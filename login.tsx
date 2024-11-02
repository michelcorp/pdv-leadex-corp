"use client"

import { Book, Globe, Lock, LogIn, UserPlus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Component() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="container relative flex min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center gap-2 text-lg font-medium">
            <Book className="h-6 w-6" />
            PDV LEADEX Corp
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;Empowering education through innovative data
                management.&rdquo;
              </p>
              <footer className="text-sm">PDV LEADEX Corp</footer>
            </blockquote>
          </div>
        </div>
        <div className="p-4 lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Welcome to PDV LEADEX
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your credentials to access the platform
              </p>
            </div>
            <Card className="border-2">
              <CardContent className="pt-6">
                <Tabs defaultValue="login" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="register">Register</TabsTrigger>
                  </TabsList>
                  <TabsContent value="login">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          placeholder="name@example.com"
                          required
                          type="email"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                          id="password"
                          required
                          type="password"
                        />
                      </div>
                      <Button
                        className="w-full"
                        disabled={isLoading}
                        type="submit"
                      >
                        {isLoading ? (
                          "Signing in..."
                        ) : (
                          <>
                            <LogIn className="mr-2 h-4 w-4" /> Sign In
                          </>
                        )}
                      </Button>
                    </form>
                  </TabsContent>
                  <TabsContent value="register">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="student-id">Student ID</Label>
                        <Input
                          id="student-id"
                          placeholder="Enter your student ID"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="reg-email">Email</Label>
                        <Input
                          id="reg-email"
                          placeholder="name@example.com"
                          required
                          type="email"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="reg-password">Password</Label>
                        <Input
                          id="reg-password"
                          required
                          type="password"
                        />
                      </div>
                      <Button
                        className="w-full"
                        disabled={isLoading}
                        type="submit"
                      >
                        {isLoading ? (
                          "Registering..."
                        ) : (
                          <>
                            <UserPlus className="mr-2 h-4 w-4" /> Register
                          </>
                        )}
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center gap-2">
                <div className="rounded-full bg-blue-100 p-2">
                  <Globe className="h-4 w-4 text-blue-500" />
                </div>
                <span className="text-xs">Global Access</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="rounded-full bg-blue-100 p-2">
                  <Book className="h-4 w-4 text-blue-500" />
                </div>
                <span className="text-xs">Resources</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="rounded-full bg-blue-100 p-2">
                  <Lock className="h-4 w-4 text-blue-500" />
                </div>
                <span className="text-xs">Secure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}