"use client"

import { Bell, FileText, MessageSquare, Settings, Users } from "lucide-react"
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Component() {
  const [messages] = useState([
    { id: 1, user: "Admin", content: "Welcome to PDV LEADEX!" },
    { id: 2, user: "John", content: "Thanks for the new resources!" },
    { id: 3, user: "Sarah", content: "When is the next meeting?" },
  ])

  const [announcements] = useState([
    {
      id: 1,
      title: "New Document Upload",
      content: "Important study materials have been added to the repository.",
      date: "2024-01-11",
    },
    {
      id: 2,
      title: "System Maintenance",
      content: "Scheduled maintenance this weekend.",
      date: "2024-01-10",
    },
  ])

  const [documents] = useState([
    { id: 1, name: "Course Material 2024", type: "PDF", size: "2.3 MB" },
    { id: 2, name: "Student Guidelines", type: "DOC", size: "1.1 MB" },
    { id: 3, name: "Lecture Recording", type: "MP4", size: "45.6 MB" },
  ])

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
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
          <nav className="flex flex-1 items-center justify-end gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Bell className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>New document available</DropdownMenuItem>
                <DropdownMenuItem>Message from admin</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Settings className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Sign out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <div className="container grid gap-6 py-6 md:grid-cols-[250px_1fr]">
          <div className="hidden flex-col gap-4 md:flex">
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold">Navigation</h2>
              <div className="grid gap-1">
                <Button variant="ghost" className="justify-start">
                  <FileText className="mr-2 h-4 w-4" />
                  Documents
                </Button>
                <Button variant="ghost" className="justify-start">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Messages
                </Button>
                <Button variant="ghost" className="justify-start">
                  <Users className="mr-2 h-4 w-4" />
                  Users
                </Button>
                <Button variant="ghost" className="justify-start">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
              </div>
            </div>
            <Separator />
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold">Recent Documents</h2>
              <ScrollArea className="h-[300px]">
                <div className="grid gap-2">
                  {documents.map((doc) => (
                    <Link
                      key={doc.id}
                      href="#"
                      className="flex items-center gap-2 rounded-lg p-2 hover:bg-accent"
                    >
                      <FileText className="h-4 w-4" />
                      <div className="grid gap-0.5 text-sm">
                        <span className="font-medium">{doc.name}</span>
                        <span className="text-muted-foreground">
                          {doc.type} • {doc.size}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>
          <div className="grid gap-6">
            <Tabs defaultValue="announcements">
              <TabsList>
                <TabsTrigger value="announcements">Announcements</TabsTrigger>
                <TabsTrigger value="chat">Chat</TabsTrigger>
              </TabsList>
              <TabsContent value="announcements" className="grid gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Announcements</CardTitle>
                    <CardDescription>
                      Stay updated with the latest news and updates
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      {announcements.map((announcement) => (
                        <div
                          key={announcement.id}
                          className="grid gap-1 rounded-lg border p-4"
                        >
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold">
                              {announcement.title}
                            </h3>
                            <span className="text-sm text-muted-foreground">
                              {announcement.date}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {announcement.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="chat" className="grid gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Chat</CardTitle>
                    <CardDescription>
                      Communicate with other members
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[400px]">
                      <div className="grid gap-4">
                        {messages.map((message) => (
                          <div
                            key={message.id}
                            className="grid gap-1 rounded-lg border p-4"
                          >
                            <div className="flex items-center gap-2">
                              <span className="font-semibold">
                                {message.user}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {message.content}
                            </p>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                    <div className="mt-4 flex gap-2">
                      <Input placeholder="Type your message..." />
                      <Button>Send</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}