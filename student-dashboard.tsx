"use client"

import { Bell, Book, Calendar, FileText, MessageSquare, Settings, User, Video } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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

export default function StudentDashboard() {
  const [resources] = useState([
    {
      id: 1,
      name: "Mathematics Course Material",
      type: "PDF",
      access: "All Students",
      thumbnail: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Physics Lecture Video",
      type: "Video",
      access: "Grade 12 Only",
      description: "An in-depth look at quantum mechanics",
      thumbnail: "/placeholder.svg?height=100&width=200",
    },
    {
      id: 3,
      name: "Chemistry Lab Report Template",
      type: "DOC",
      access: "All Students",
      thumbnail: "/placeholder.svg?height=100&width=100",
    },
  ])

  const [announcements] = useState([
    {
      id: 1,
      title: "Upcoming Exam Schedule",
      content: "The final exam schedule for this semester has been posted. Please check your student portal for details.",
      date: "2024-05-15",
    },
    {
      id: 2,
      title: "New Online Resources Available",
      content: "We've added new study materials for Biology and Chemistry. Access them in the Resources section.",
      date: "2024-05-10",
    },
  ])

  const [schedule] = useState([
    { id: 1, subject: "Mathematics", time: "09:00 AM - 10:30 AM", room: "Room 101" },
    { id: 2, subject: "Physics", time: "11:00 AM - 12:30 PM", room: "Lab 2" },
    { id: 3, subject: "English Literature", time: "02:00 PM - 03:30 PM", room: "Room 205" },
  ])

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-blue-50 to-blue-100">
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-f9uh1mKs1JRX4fjHFCxwaAkgx0bcur.png"
              alt="PDV LEADEX Logo"
              width={60}
              height={60}
              className="rounded-full"
            />
            <h1 className="text-2xl font-bold text-blue-600">PDV LEADEX Corp</h1>
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
                <DropdownMenuItem>New announcement posted</DropdownMenuItem>
                <DropdownMenuItem>Upcoming exam reminder</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Student Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
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
                Student Dashboard
              </h2>
              <div className="space-y-1">
                <Button variant="ghost" className="w-full justify-start">
                  <Book className="mr-2 h-4 w-4" />
                  Resources
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Announcements
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
              </div>
            </div>
          </div>
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          <Tabs defaultValue="resources" className="space-y-4">
            <TabsList>
              <TabsTrigger value="resources">Resources</TabsTrigger>
              <TabsTrigger value="schedule">Schedule</TabsTrigger>
              <TabsTrigger value="announcements">Announcements</TabsTrigger>
            </TabsList>
            <TabsContent value="resources" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Educational Resources</CardTitle>
                  <CardDescription>
                    Access your course materials and study resources
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-end mb-4">
                    <Input
                      placeholder="Search resources..."
                      className="max-w-sm"
                    />
                  </div>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-4">
                      {resources.map((resource) => (
                        <div
                          key={resource.id}
                          className="flex items-center justify-between rounded-lg border p-4"
                        >
                          <div className="flex items-center space-x-4">
                            <Image
                              src={resource.thumbnail}
                              alt={resource.name}
                              width={100}
                              height={resource.type === "Video" ? 56 : 100}
                              className="rounded-md"
                            />
                            <div>
                              <h3 className="font-semibold">{resource.name}</h3>
                              <p className="text-sm text-muted-foreground">
                                {resource.type} • {resource.access}
                              </p>
                              {resource.description && (
                                <p className="text-sm mt-1">{resource.description}</p>
                              )}
                            </div>
                          </div>
                          <Button variant="outline" onClick={() => alert("Viewing resource: " + resource.name)}>
                            View
                          </Button>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="schedule" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Class Schedule</CardTitle>
                  <CardDescription>
                    Your daily class schedule
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-4">
                      {schedule.map((class_) => (
                        <div
                          key={class_.id}
                          className="flex items-center justify-between rounded-lg border p-4"
                        >
                          <div>
                            <h3 className="font-semibold">{class_.subject}</h3>
                            <p className="text-sm text-muted-foreground">
                              {class_.time} • {class_.room}
                            </p>
                          </div>
                          <Button variant="outline" onClick={() => alert("Viewing details for: " + class_.subject)}>
                            Details
                          </Button>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="announcements" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Announcements</CardTitle>
                  <CardDescription>
                    Important updates and notifications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-4">
                      {announcements.map((announcement) => (
                        <div
                          key={announcement.id}
                          className="rounded-lg border p-4"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold">{announcement.title}</h3>
                            <span className="text-sm text-muted-foreground">{announcement.date}</span>
                          </div>
                          <p className="text-sm">{announcement.content}</p>
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
      <footer className="w-full bg-white shadow-md mt-auto">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <p className="text-sm text-gray-600">© 2024 PDV LEADEX Corp. All rights reserved.</p>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-sm text-blue-600 hover:text-blue-800">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-blue-600 hover:text-blue-800">Terms of Service</a></li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  )
}