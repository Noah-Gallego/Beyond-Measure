"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Heart, MessageCircle, Instagram } from "lucide-react"

// Real Instagram posts from @gobeyondmeasure with the new images
const INSTAGRAM_POSTS = [
  {
    id: "1",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-20%20at%203.43.01%E2%80%AFPM-Kl0CPFbTxOEeOdVilBRn3JBZxs2gbC.png",
    caption:
      "Looking for ways to generate more donations on Beyond Measure? Try the tips above! New to Beyond Measure? Open your free account today at beyondmeasure.org (link in bio). We recommend visiting our website on a desktop for the best viewing experience!",
    likes: 0,
    comments: 0,
    date: "March 6",
  },
  {
    id: "2",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-20%20at%203.43.18%E2%80%AFPM-1u7qObG9b8tAwJxXqccF7DWl6Dgm5j.png",
    caption: "Happy St. Patrick's Day!",
    likes: 0,
    comments: 0,
    date: "3d",
  },
  {
    id: "3",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-20%20at%203.43.36%E2%80%AFPM-99z8UX5aB1YFCLXIp6h80DLA5nUYdG.png",
    caption:
      "Beyond Measure offers teachers at Christian schools a solution to offset classroom costs: online crowdfunding. Teachers can post a funding request on our platform and use their online presence to attract donors to their project's webpage. The best part? It's 100% free to use! #beyondmeasure #ChristianEducation #teachers #crowdfunding",
    likes: 0,
    comments: 0,
    date: "1w",
  },
  {
    id: "4",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-20%20at%203.43.52%E2%80%AFPM-3vGEBjGzyyEtnRwWKxykE5vLCY9AV2.png",
    caption:
      "Teachers, we want to hear from you! What is the #1 thing you struggle with in the classroom? Share your thoughts in the comments below and let's start a conversation about how we can better support you.",
    likes: 1,
    comments: 0,
    date: "March 12",
  },
]

interface InstagramCarouselProps {
  username: string
}

export function InstagramCarousel({ username }: InstagramCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === INSTAGRAM_POSTS.length - 1 ? 0 : prevIndex + 1))
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  // Pause auto-scroll when user interacts with carousel
  const handleManualNavigation = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)

    // Resume auto-scroll after 10 seconds of inactivity
    const timeout = setTimeout(() => {
      setIsAutoPlaying(true)
    }, 10000)

    return () => clearTimeout(timeout)
  }

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? INSTAGRAM_POSTS.length - 1 : currentIndex - 1
    handleManualNavigation(newIndex)
  }

  const goToNext = () => {
    const newIndex = currentIndex === INSTAGRAM_POSTS.length - 1 ? 0 : currentIndex + 1
    handleManualNavigation(newIndex)
  }

  return (
    <div className="relative max-w-xl mx-auto">
      {/* Main carousel */}
      <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
        {/* Post image - Reduced size */}
        <div className="relative" style={{ aspectRatio: "4/5", maxHeight: "400px" }}>
          <Image
            src={INSTAGRAM_POSTS[currentIndex].imageUrl || "/placeholder.svg"}
            alt={`Instagram post by @${username}`}
            fill
            className="object-cover"
          />

          {/* Navigation arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-colors"
            aria-label="Previous post"
          >
            <ChevronLeft className="h-4 w-4 text-gray-800" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-colors"
            aria-label="Next post"
          >
            <ChevronRight className="h-4 w-4 text-gray-800" />
          </button>
        </div>

        {/* Post info - Reduced padding and text size */}
        <div className="p-3">
          <div className="flex items-center mb-1">
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-yellow-400 to-pink-600 flex items-center justify-center">
              <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                <Instagram className="h-3 w-3 text-gray-800" />
              </div>
            </div>
            <span className="ml-2 text-sm font-medium">@{username}</span>
            <span className="ml-auto text-xs text-gray-500">{INSTAGRAM_POSTS[currentIndex].date}</span>
          </div>

          <p className="text-xs text-gray-800 mb-2 line-clamp-2">{INSTAGRAM_POSTS[currentIndex].caption}</p>

          <div className="flex items-center text-xs text-gray-600">
            <div className="flex items-center mr-4">
              <Heart className="h-3 w-3 mr-1" />
              <span>{INSTAGRAM_POSTS[currentIndex].likes}</span>
            </div>
            <div className="flex items-center">
              <MessageCircle className="h-3 w-3 mr-1" />
              <span>{INSTAGRAM_POSTS[currentIndex].comments}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel indicators */}
      <div className="flex justify-center mt-2 space-x-2">
        {INSTAGRAM_POSTS.map((_, index) => (
          <button
            key={index}
            onClick={() => handleManualNavigation(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-salmon w-3" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="text-center mt-1">
        <button onClick={() => setIsAutoPlaying(!isAutoPlaying)} className="text-xs text-gray-500 hover:text-gray-700">
          {isAutoPlaying ? "Pause" : "Play"} slideshow
        </button>
      </div>
    </div>
  )
}

