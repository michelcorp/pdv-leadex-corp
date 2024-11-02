"use client"

import {
  Bell,
  FileText,
  MessageSquare,
  Settings,
  Upload,
  UserPlus,
  Users,
  Video,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Component() {
  const [users] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Student" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Student" },
  ])

  const [resources] = useState([
    {
      id: 1,
      name: "Mathematics Course Material",
      type: "PDF",
      access: "All Students",
    },
    {
      id: 2,
      name: "Physics Lecture Video",
      type: "Video",
      access: "Grade 12 Only",
    },
  ])

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-blue-50 to-blue-100">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <Image
              src="/placeholder.svg"
              alt="PDV LEADEX Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <h1 className="text-xl font-bold">PDV LEADEX Corp</h1>
          </div>
          <nav className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Bell className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>New user registration</DropdownMenuItem>
                <DropdownMenuItem>Resource upload completed</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Settings className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Admin Settings</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>System Settings</DropdownMenuItem>
                <DropdownMenuItem>Sign out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </header>
      <div className="container flex-1 items-start md:grid md:grid-cols-[200px_1fr] md:gap-6 md:p-6">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
          <div className="space-y-4 py-4">
            <div className="px-3 py-2">
              <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                Admin Dashboard
              </h2>
              <div className="space-y-1">
                <Button variant="ghost" className="w-full justify-start">
                  <Users className="mr-2 h-4 w-4" />
                  User Management
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <FileText className="mr-2 h-4 w-4" />
                  Resources
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Video className="mr-2 h-4 w-4" />
                  Videos
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Announcements
                </Button>
              </div>
            </div>
          </div>
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          <Tabs defaultValue="users" className="space-y-4">
            <TabsList>
              <TabsTrigger value="users">Users</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
              <TabsTrigger value="permissions">Permissions</TabsTrigger>
            </TabsList>
            <TabsContent value="users" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>User Management</CardTitle>
                  <CardDescription>
                    Manage student and staff accounts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between">
                    <div className="space-x-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button>
                            <UserPlus className="mr-2 h-4 w-4" />
                            Add User
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Add New User</DialogTitle>
                            <DialogDescription>
                              Create a new user account
                            </DialogDescription>
                          </DialogHeader>
                          <form className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="name">Name</Label>
                              <Input id="name" placeholder="Enter name" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="email">Email</Label>
                              <Input
                                id="email"
                                placeholder="Enter email"
                                type="email"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="role">Role</Label>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select role" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="student">Student</SelectItem>
                                  <SelectItem value="teacher">Teacher</SelectItem>
                                  <SelectItem value="admin">Admin</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <Button type="submit">Create User</Button>
                          </form>
                        </DialogContent>
                      </Dialog>
                    </div>
                    <Input
                      
                      placeholder="Search users..."
                      className="max-w-sm"
                    />
                  </div>
                  <Separator className="my-4" />
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-4">
                      {users.map((user) => (
                        <div
                          key={user.id}
                          className="flex items-center justify-between rounded-lg border p-4"
                        >
                          <div>
                            <h3 className="font-semibold">{user.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {user.email}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary">{user.role}</Badge>
                            <Button variant="ghost" size="icon">
                              <Settings className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="resources" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Resource Management</CardTitle>
                  <CardDescription>
                    Upload and manage educational resources
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between">
                    <div className="space-x-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button>
                            <Upload className="mr-2 h-4 w-4" />
                            Upload Resource
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Upload New Resource</DialogTitle>
                            <DialogDescription>
                              Add a new educational resource
                            </DialogDescription>
                          </DialogHeader>
                          <form className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="title">Title</Label>
                              <Input id="title" placeholder="Enter title" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="type">Type</Label>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select type" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="pdf">PDF</SelectItem>
                                  <SelectItem value="video">Video</SelectItem>
                                  <SelectItem value="audio">Audio</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="access">Access Level</Label>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select access level" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="all">All Students</SelectItem>
                                  <SelectItem value="grade12">
                                    Grade 12 Only
                                  </SelectItem>
                                  <SelectItem value="teachers">
                                    Teachers Only
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="file">File</Label>
                              <Input id="file" type="file" />
                            </div>
                            <Button type="submit">Upload</Button>
                          </form>
                        </DialogContent>
                      </Dialog>
                    </div>
                    <Input
                      placeholder="Search resources..."
                      className="max-w-sm"
                    />
                  </div>
                  <Separator className="my-4" />
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-4">
                      {resources.map((resource) => (
                        <div
                          key={resource.id}
                          className="flex items-center justify-between rounded-lg border p-4"
                        >
                          <div>
                            <h3 className="font-semibold">{resource.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {resource.type} • {resource.access}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon">
                              <Settings className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}