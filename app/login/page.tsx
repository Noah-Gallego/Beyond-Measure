"use client"

import type React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnnouncementBanner } from "@/components/announcement-banner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()

  // Dummy login function for demonstration
  const handleDummyLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Set a dummy auth state in localStorage
    localStorage.setItem("dummyAuthState", "true")
    // Redirect to home page
    router.push("/")
  }

  return (
    <div className="flex flex-col min-h-screen">
      <AnnouncementBanner />
      <Header />

      <main className="container mx-auto py-12 px-4 flex-grow">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold text-navy text-center mb-8">Log In</h1>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <form className="space-y-6" onSubmit={handleDummyLogin}>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  defaultValue="teacher@example.com"
                  required
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <Link href="/forgot-password" className="text-sm text-sky hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  defaultValue="password123"
                  required
                  className="w-full"
                />
              </div>

              <div className="flex items-center">
                <Checkbox id="remember" />
                <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
                  Remember me
                </label>
              </div>

              <Button type="submit" className="w-full bg-salmon hover:bg-salmon/90 text-white">
                Log In (Demo)
              </Button>

              <div className="text-xs text-gray-500 text-center">
                This is a demo login. Click to simulate logging in and see the user dropdown.
              </div>
            </form>

            <div className="mt-6 text-center text-sm">
              <p className="text-gray-600">
                Ready to make a difference in your classroom?{" "}
                <Link href="/register" className="text-sky font-medium hover:underline">
                  Register now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

