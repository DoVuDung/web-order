'use client';

import { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader } from "@heroui/react";
import { Button, Input, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Select, SelectItem, Spinner } from "@heroui/react";
import useStore from '@/store/store';
import { useUser } from '@clerk/nextjs';

interface Restaurant {
  id: string;
  name: string;
  platform: string;
}

interface GroupOrder {
  id: string;
  groupId: string;
  status: string;
  restaurant: Restaurant;
  owner: {
    id: string;
    name: string;
  };
  members: Array<{
    id: string;
    user: {
      id: string;
      name: string;
    };
  }>;
  createdAt: string;
}

export default function GroupManager() {
  const { user } = useUser();
  const { currentGroupId, setCurrentGroupId, clearGroup } = useStore();
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const [groupIdInput, setGroupIdInput] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [isJoining, setIsJoining] = useState(false);
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState('');
  const [loadingRestaurants, setLoadingRestaurants] = useState(false);
  const [currentGroup, setCurrentGroup] = useState<GroupOrder | null>(null);
  const [modalMode, setModalMode] = useState<'create' | 'join'>('create');

  // Load restaurants when modal opens for create mode
  useEffect(() => {
    if (isOpen && modalMode === 'create') {
      loadRestaurants();
    }
  }, [isOpen, modalMode]);

  // Load current group info
  useEffect(() => {
    if (currentGroupId) {
      loadGroupInfo();
    } else {
      setCurrentGroup(null);
    }
  }, [currentGroupId]);

  const loadRestaurants = async () => {
    setLoadingRestaurants(true);
    try {
      const response = await fetch('/api/restaurants');
      if (response.ok) {
        const data = await response.json();
        setRestaurants(data);
      }
    } catch (error) {
      console.error('Error loading restaurants:', error);
    } finally {
      setLoadingRestaurants(false);
    }
  };

  const loadGroupInfo = async () => {
    if (!currentGroupId) return;
    
    try {
      const response = await fetch(`/api/groups/${currentGroupId}`);
      if (response.ok) {
        const data = await response.json();
        setCurrentGroup(data.groupOrder);
      }
    } catch (error) {
      console.error('Error loading group info:', error);
    }
  };

  const handleCreateGroup = async () => {
    if (!user || !selectedRestaurant) {
      alert('Please select a restaurant');
      return;
    }
    
    setIsCreating(true);
    try {
      const response = await fetch('/api/groups', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          restaurantId: selectedRestaurant,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setCurrentGroupId(data.groupOrder.groupId);
        alert(`✅ Group created successfully!\n\nShare this ID with others:\n${data.groupOrder.groupId}`);
        onClose();
        setSelectedRestaurant('');
      } else {
        const error = await response.json();
        alert(`❌ Error: ${error.error || 'Failed to create group'}`);
      }
    } catch (error) {
      console.error('Error creating group:', error);
      alert('❌ Failed to create group. Please try again.');
    } finally {
      setIsCreating(false);
    }
  };

  const handleJoinGroup = async () => {
    if (!groupIdInput.trim()) {
      alert('Please enter a group ID');
      return;
    }
    
    setIsJoining(true);
    try {
      const response = await fetch(`/api/groups/${groupIdInput}/join`, {
        method: 'POST',
      });

      if (response.ok) {
        const data = await response.json();
        setCurrentGroupId(groupIdInput);
        alert(`✅ ${data.message || 'Successfully joined group!'}`);
        onClose();
        setGroupIdInput('');
      } else {
        const error = await response.json();
        alert(`❌ Error: ${error.error || 'Failed to join group'}`);
      }
    } catch (error) {
      console.error('Error joining group:', error);
      alert('❌ Failed to join group. Please try again.');
    } finally {
      setIsJoining(false);
    }
  };

  const handleLeaveGroup = async () => {
    if (!currentGroupId) return;
    
    if (confirm('⚠️ Are you sure you want to leave this group?\n\nYou will lose access to the group order.')) {
      try {
        const response = await fetch(`/api/groups/${currentGroupId}/leave`, {
          method: 'POST',
        });

        if (response.ok) {
          clearGroup();
          alert('✅ Successfully left the group');
        } else {
          const error = await response.json();
          alert(`❌ Error: ${error.error || 'Failed to leave group'}`);
        }
      } catch (error) {
        console.error('Error leaving group:', error);
        alert('❌ Failed to leave group. Please try again.');
      }
    }
  };

  const copyGroupId = () => {
    if (currentGroupId) {
      navigator.clipboard.writeText(currentGroupId);
      alert('✅ Group ID copied to clipboard!');
    }
  };

  const openCreateModal = () => {
    setModalMode('create');
    onOpen();
  };

  const openJoinModal = () => {
    setModalMode('join');
    onOpen();
  };

  const isOwner = currentGroup?.owner?.id === user?.id;

  return (
    <div className="w-full">
      <Card className="mb-4">
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 w-full">
            <h2 className="text-xl font-semibold">🍽️ Group Ordering</h2>
            {!currentGroupId && (
              <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <Button 
                  color="primary" 
                  onPress={openCreateModal}
                  className="w-full sm:w-auto"
                >
                  Create Group
                </Button>
                <Button 
                  color="secondary" 
                  variant="bordered"
                  onPress={openJoinModal}
                  className="w-full sm:w-auto"
                >
                  Join Group
                </Button>
              </div>
            )}
          </div>
        </CardHeader>
        <CardBody>
          {currentGroup ? (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex-1">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Restaurant</p>
                  <p className="font-semibold text-lg">{currentGroup.restaurant.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Group ID: {currentGroup.groupId}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      currentGroup.status === 'DRAFT' ? 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300' :
                      currentGroup.status === 'ACTIVE' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' :
                      currentGroup.status === 'LOCKED' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' :
                      'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                    }`}>
                      {currentGroup.status}
                    </span>
                    <span className="text-xs text-gray-500">
                      {currentGroup.members.length} {currentGroup.members.length === 1 ? 'member' : 'members'}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                  <Button 
                    size="sm" 
                    variant="bordered"
                    onPress={copyGroupId}
                    className="w-full sm:w-auto"
                  >
                    📋 Copy ID
                  </Button>
                  {!isOwner && (
                    <Button 
                      size="sm" 
                      color="danger" 
                      variant="bordered"
                      onPress={handleLeaveGroup}
                      className="w-full sm:w-auto"
                    >
                      Leave
                    </Button>
                  )}
                </div>
              </div>
              
              <div className="border-t pt-3">
                <p className="text-sm font-medium mb-2">Members:</p>
                <div className="flex flex-wrap gap-2">
                  {currentGroup.members.map((member) => (
                    <div
                      key={member.id}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm flex items-center gap-2"
                    >
                      <span>{member.user.name}</span>
                      {member.user.id === currentGroup.owner.id && (
                        <span className="text-xs bg-blue-500 text-white px-2 py-0.5 rounded">Owner</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                You&apos;re not currently in a group. Create a new group to start ordering together,
                or join an existing group with a group ID.
              </p>
            </div>
          )}
        </CardBody>
      </Card>

      <Modal isOpen={isOpen} onClose={onClose} size="md">
        <ModalContent>
          <ModalHeader>
            <h3>{modalMode === 'create' ? '✨ Create Group' : '🚪 Join Group'}</h3>
          </ModalHeader>
          <ModalBody>
            {modalMode === 'create' ? (
              <div className="space-y-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Select a restaurant to create a group order. Share the group ID with others to let them join.
                </p>
                
                {loadingRestaurants ? (
                  <div className="flex justify-center py-4">
                    <Spinner size="sm" />
                  </div>
                ) : restaurants.length > 0 ? (
                  <Select
                    label="Select Restaurant"
                    placeholder="Choose a restaurant"
                    selectedKeys={selectedRestaurant ? [selectedRestaurant] : []}
                    onSelectionChange={(keys) => {
                      const selected = Array.from(keys)[0] as string;
                      setSelectedRestaurant(selected || '');
                    }}
                  >
                    {restaurants.map((restaurant) => (
                      <SelectItem key={restaurant.id}>
                        {restaurant.name} ({restaurant.platform})
                      </SelectItem>
                    ))}
                  </Select>
                ) : (
                  <p className="text-sm text-gray-500">
                    No restaurants available. Please crawl a restaurant first at the home page.
                  </p>
                )}
                
                <Button 
                  color="primary" 
                  onPress={handleCreateGroup}
                  isLoading={isCreating}
                  isDisabled={!selectedRestaurant}
                  className="w-full"
                >
                  Create Group
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Enter the group ID shared by the group owner to join the order.
                </p>
                <Input
                  label="Group ID"
                  placeholder="group_..."
                  value={groupIdInput}
                  onChange={(e) => setGroupIdInput(e.target.value)}
                  fullWidth
                />
                <Button 
                  color="secondary" 
                  onPress={handleJoinGroup}
                  isLoading={isJoining}
                  isDisabled={!groupIdInput.trim()}
                  className="w-full"
                >
                  Join Group
                </Button>
              </div>
            )}
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
