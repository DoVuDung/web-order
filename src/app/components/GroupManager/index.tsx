'use client';

import { useState } from 'react';
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Button, Input, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@heroui/react";
import useStore from '@/store/store';
import { useUser } from '@clerk/nextjs';

export default function GroupManager() {
  const { user } = useUser();
  const { currentGroupId, setCurrentGroupId, clearGroup } = useStore();
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const [groupIdInput, setGroupIdInput] = useState('');
  const [isCreating, setIsCreating] = useState(false);

  const handleCreateGroup = async () => {
    if (!user) return;
    
    setIsCreating(true);
    try {
      // Generate a unique group ID
      const newGroupId = `group_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      // Set the current group
      setCurrentGroupId(newGroupId);
      
      // Store group info (you might want to save this to a database)
      localStorage.setItem(`group_${newGroupId}`, JSON.stringify({
        id: newGroupId,
        createdBy: user.id,
        createdAt: new Date().toISOString(),
        members: [user.id],
        name: `${user.firstName || 'User'}&apos;s Group`,
      }));
      
      onClose();
    } catch (error) {
      console.error('Error creating group:', error);
    } finally {
      setIsCreating(false);
    }
  };

  const handleJoinGroup = () => {
    if (!groupIdInput.trim()) return;
    
    // Validate group exists (you might want to check with your backend)
    const groupInfo = localStorage.getItem(`group_${groupIdInput}`);
    if (!groupInfo) {
      alert('Group not found. Please check the group ID.');
      return;
    }
    
    // Join the group
    setCurrentGroupId(groupIdInput);
    setGroupIdInput('');
    onClose();
  };

  const handleLeaveGroup = () => {
    if (confirm('Are you sure you want to leave this group? You will lose access to the current group order.')) {
      clearGroup();
    }
  };

  const copyGroupId = () => {
    if (currentGroupId) {
      navigator.clipboard.writeText(currentGroupId);
      alert('Group ID copied to clipboard!');
    }
  };

  const getGroupInfo = () => {
    if (!currentGroupId) return null;
    
    const groupData = localStorage.getItem(`group_${currentGroupId}`);
    if (groupData) {
      return JSON.parse(groupData);
    }
    return null;
  };

  const groupInfo = getGroupInfo();

  return (
    <div className="w-full">
      <Card className="mb-4">
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 w-full">
            <h2 className="text-xl font-semibold">Group Ordering</h2>
            {!currentGroupId && (
              <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <Button 
                  color="primary" 
                  onPress={onOpen}
                  className="w-full sm:w-auto"
                >
                  Create Group
                </Button>
                <Button 
                  color="secondary" 
                  variant="bordered"
                  onPress={onOpen}
                  className="w-full sm:w-auto"
                >
                  Join Group
                </Button>
              </div>
            )}
          </div>
        </CardHeader>
        <CardBody>
          {currentGroupId ? (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <p className="text-sm text-gray-600">Current Group:</p>
                  <p className="font-medium">{groupInfo?.name || 'Unknown Group'}</p>
                  <p className="text-xs text-gray-500">ID: {currentGroupId}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                  <Button 
                    size="sm" 
                    variant="bordered"
                    onPress={copyGroupId}
                    className="w-full sm:w-auto"
                  >
                    Copy Group ID
                  </Button>
                  <Button 
                    size="sm" 
                    color="danger" 
                    variant="bordered"
                    onPress={handleLeaveGroup}
                    className="w-full sm:w-auto"
                  >
                    Leave Group
                  </Button>
                </div>
              </div>
              {groupInfo && (
                <div className="text-sm text-gray-600">
                  <p>Created by: {groupInfo.createdBy === user?.id ? 'You' : 'Another user'}</p>
                  <p>Created: {new Date(groupInfo.createdAt).toLocaleDateString()}</p>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-600 mb-4">
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
            <h3>Group Management</h3>
          </ModalHeader>
          <ModalBody>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Create New Group</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Create a new group and share the group ID with others to order together.
                </p>
                <Button 
                  color="primary" 
                  onPress={handleCreateGroup}
                  isLoading={isCreating}
                  className="w-full"
                >
                  Create Group
                </Button>
              </div>
              
              <div className="border-t pt-4">
                <h4 className="font-medium mb-2">Join Existing Group</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Enter the group ID to join an existing group order.
                </p>
                <div className="space-y-2">
                  <Input
                    placeholder="Enter group ID"
                    value={groupIdInput}
                    onChange={(e) => setGroupIdInput(e.target.value)}
                    size="sm"
                  />
                  <Button 
                    color="secondary" 
                    onPress={handleJoinGroup}
                    isDisabled={!groupIdInput.trim()}
                    className="w-full"
                  >
                    Join Group
                  </Button>
                </div>
              </div>
            </div>
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
