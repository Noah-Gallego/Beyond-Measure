"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { UserDropdown } from "@/components/user-dropdown"
import Link from "next/link"

export function AuthButtons() {
  // State to track login status
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Check for dummy auth state on component mount and when localStorage changes
  useEffect(() => {
    const checkAuthState = () => {
      const authState = localStorage.getItem("dummyAuthState")
      setIsLoggedIn(authState === "true")
    }

    // Check on mount
    checkAuthState()

    // Set up event listener for storage changes
    window.addEventListener("storage", checkAuthState)

    // Clean up
    return () => {
      window.removeEventListener("storage", checkAuthState)
    }
  }, [])

  // Toggle login state (for demo purposes)
  const handleLogout = () => {
    localStorage.removeItem("dummyAuthState")
    setIsLoggedIn(false)
  }

  if (isLoggedIn) {
    return (
      <div className="flex items-center">
        <UserDropdown userName="Teacher Name" onLogout={handleLogout} />
      </div>
    )
  }

  return (
    <div className="flex items-center space-x-3">
      <Link href="/login">
        <Button variant="outline" className="border-navy text-navy hover:bg-navy/10 px-6">
          Login
        </Button>
      </Link>
      <Link href="/register">
        <Button className="bg-salmon hover:bg-salmon/90 text-white px-6">Register</Button>
      </Link>
    </div>
  )
}

