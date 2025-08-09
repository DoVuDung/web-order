"use client";

import { useAuth } from '@/hooks/useAuth';
import { useUser } from "@clerk/nextjs";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Button, Input, Select, SelectItem, Chip, Divider } from "@heroui/react";
import { useState, useEffect } from "react";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  role: string;
  lastSignInAt: string;
  createdAt: string;
}

export default function AdminPage() {
  const { isLoaded } = useAuth('admin');
  const { user } = useUser();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  // Fetch users
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/admin/users');
      if (response.ok) {
        const data = await response.json();
        setUsers(data.users || []);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateUserRole = async (userId: string, newRole: string) => {
    try {
      const response = await fetch('/api/admin/users', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, role: newRole }),
      });

      if (response.ok) {
        // Refresh users list
        fetchUsers();
      } else {
        alert('Failed to update user role');
      }
    } catch (error) {
      console.error('Error updating user role:', error);
      alert('Error updating user role');
    }
  };

  const deleteUser = async (userId: string) => {
    if (!confirm('Are you sure you want to delete this user?')) return;

    try {
      const response = await fetch('/api/admin/users', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      });

      if (response.ok) {
        fetchUsers();
      } else {
        alert('Failed to delete user');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Error deleting user');
    }
  };

  const filteredUsers = users.filter(u => {
    const matchesSearch = !searchTerm || 
      u.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.lastName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.emailAddress?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesRole = !selectedRole || u.role === selectedRole;
    
    return matchesSearch && matchesRole;
  });

  // Authorization check using hook
  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 w-full">
            <div>
              <h1 className="text-2xl font-bold">User Management</h1>
              <p className="text-gray-600">Manage users and their roles</p>
            </div>
            <Chip color="primary" variant="flat">
              {users.length} Total Users
            </Chip>
          </div>
        </CardHeader>

        <CardBody>
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Input
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1"
              startContent={<span>🔍</span>}
            />
            <Select
              placeholder="Filter by role"
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="w-full sm:w-48"
            >
              <SelectItem key="">All Roles</SelectItem>
              <SelectItem key="admin">Admin</SelectItem>
              <SelectItem key="user">User</SelectItem>
              <SelectItem key="moderator">Moderator</SelectItem>
            </Select>
          </div>

          <Divider />

          {/* Users List */}
          {loading ? (
            <div className="text-center py-8">
              <p>Loading users...</p>
            </div>
          ) : (
            <div className="space-y-4 mt-6">
              {filteredUsers.map((u) => (
                <Card key={u.id} className="border">
                  <CardBody>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">
                          {u.firstName} {u.lastName}
                        </h3>
                        <p className="text-gray-600">{u.emailAddress}</p>
                        <div className="flex gap-2 mt-2">
                          <Chip 
                            size="sm" 
                            color={u.role === 'admin' ? 'danger' : u.role === 'moderator' ? 'warning' : 'default'}
                          >
                            {u.role || 'user'}
                          </Chip>
                          <Chip size="sm" variant="flat">
                            Joined: {new Date(u.createdAt).toLocaleDateString()}
                          </Chip>
                          {u.lastSignInAt && (
                            <Chip size="sm" variant="flat">
                              Last seen: {new Date(u.lastSignInAt).toLocaleDateString()}
                            </Chip>
                          )}
                        </div>
                      </div>

                      <div className="flex gap-2 w-full sm:w-auto">
                        <Select
                          size="sm"
                          placeholder="Change role"
                          defaultSelectedKeys={[u.role || 'user']}
                          onChange={(e) => updateUserRole(u.id, e.target.value)}
                          className="w-32"
                        >
                          <SelectItem key="user">User</SelectItem>
                          <SelectItem key="moderator">Moderator</SelectItem>
                          <SelectItem key="admin">Admin</SelectItem>
                        </Select>
                        
                        <Button
                          size="sm"
                          color="danger"
                          variant="flat"
                          onClick={() => deleteUser(u.id)}
                          isDisabled={u.id === user?.id} // Can't delete yourself
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              ))}

              {filteredUsers.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-500">No users found matching your criteria.</p>
                </div>
              )}
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  );
}
