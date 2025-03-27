"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"

export function AnnouncementBanner() {
  const textRef = useRef<HTMLSpanElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const textElement = textRef.current
    const containerElement = containerRef.current
    if (!textElement || !containerElement) return

    // Clone the text element to create a seamless loop
    const textClone = textElement.cloneNode(true) as HTMLElement
    containerElement.appendChild(textClone)

    const textWidth = textElement.offsetWidth
    const containerWidth = containerElement.offsetWidth

    // Add spacing between the original and cloned text (80px spacing)
    const spacing = 80

    // Set initial positions
    textElement.style.transform = `translateX(0)`
    textClone.style.transform = `translateX(${textWidth + spacing}px)`

    let animationId: number
    let currentPosition = 0

    const animate = () => {
      currentPosition -= 1

      // When the first text element has moved completely off-screen (including spacing)
      if (currentPosition <= -(textWidth + spacing)) {
        currentPosition = 0
        // Reset positions
        textElement.style.transform = `translateX(0)`
        textClone.style.transform = `translateX(${textWidth + spacing}px)`
      } else {
        // Move both text elements
        textElement.style.transform = `translateX(${currentPosition}px)`
        textClone.style.transform = `translateX(${currentPosition + textWidth + spacing}px)`
      }

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <Link
      href="/about"
      className="block w-full bg-grass py-4 px-4 text-center text-white overflow-hidden cursor-pointer hover:bg-grass/90 transition-colors"
    >
      <div ref={containerRef} className="relative h-6 overflow-hidden whitespace-nowrap">
        <span ref={textRef} className="absolute text-sm md:text-base font-medium inline-block">
          FOLLOW @GOBEYONDMEASURE ON INSTAGRAM FOR TEACHER TIPS, SUCCESS STORIES, AND FUNDING OPPORTUNITIES
        </span>
      </div>
    </Link>
  )
}

