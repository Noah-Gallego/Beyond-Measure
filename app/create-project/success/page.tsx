"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnnouncementBanner } from "@/components/announcement-banner"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle, Instagram, Facebook, Twitter, Copy, ExternalLink, ArrowRight } from "lucide-react"

export default function ProjectCreationSuccessPage() {
  // State for the share message
  const [shareMessage, setShareMessage] = useState(
    "I just created a new classroom project on Beyond Measure! Would you like to support my students? Check it out here: ",
  )

  // State for social media platforms
  const [platforms, setPlatforms] = useState({
    instagram: true,
    facebook: true,
    twitter: false,
  })

  // Mock project data (in a real app, this would come from the database or URL params)
  const project = {
    id: "proj-123456",
    title: "New Science Lab Equipment",
    slug: "new-science-lab-equipment",
    description: "Funding for new microscopes and lab equipment for our 8th grade science class.",
    goal: 2000,
    image: "/placeholder.svg?height=300&width=600",
  }

  // Project URL to share
  const projectUrl = `https://beyondmeasure.org/projects/${project.slug}`

  // Handle platform toggle
  const togglePlatform = (platform: keyof typeof platforms) => {
    setPlatforms((prev) => ({
      ...prev,
      [platform]: !prev[platform],
    }))
  }

  // Handle copy link to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(`${shareMessage} ${projectUrl}`)
    alert("Link copied to clipboard!")
  }

  // Handle share to social media
  const shareToSocialMedia = () => {
    // In a real app, this would use the respective social media APIs
    // For now, we'll just show an alert
    const selectedPlatforms = Object.entries(platforms)
      .filter(([_, isSelected]) => isSelected)
      .map(([platform]) => platform)

    alert(`Project shared to: ${selectedPlatforms.join(", ")}`)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <AnnouncementBanner />
      <Header />

      <main className="container mx-auto py-12 px-4 flex-grow">
        <div className="max-w-3xl mx-auto">
          {/* Success message */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-navy mb-3">Project Created Successfully!</h1>
            <p className="text-lg text-gray-600">
              Your project "{project.title}" has been created and is now live. Share it with your network to start
              receiving donations!
            </p>
          </div>

          {/* Project preview card */}
          <Card className="mb-8 overflow-hidden">
            <div className="relative h-[200px] w-full">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-navy mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Funding Goal: ${project.goal}</span>
                <Link href={`/projects/${project.slug}`} className="text-sky hover:underline flex items-center">
                  View Project <ExternalLink className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Share section */}
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">Share Your Project</h2>
            <p className="text-gray-600 mb-6">
              Spread the word about your project to increase your chances of getting funded. Share it on social media to
              reach more potential donors.
            </p>

            {/* Share message */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Customize your message</label>
              <Textarea
                value={shareMessage}
                onChange={(e) => setShareMessage(e.target.value)}
                className="w-full"
                rows={3}
              />
              <p className="text-xs text-gray-500 mt-1">
                Your project link will be automatically added to the end of your message.
              </p>
            </div>

            {/* Platform selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Select platforms to share on</label>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Checkbox
                    id="instagram"
                    checked={platforms.instagram}
                    onCheckedChange={() => togglePlatform("instagram")}
                  />
                  <label htmlFor="instagram" className="ml-2 flex items-center">
                    <Instagram className="h-5 w-5 text-pink-600 mr-2" />
                    <span>Instagram</span>
                  </label>
                </div>
                <div className="flex items-center">
                  <Checkbox
                    id="facebook"
                    checked={platforms.facebook}
                    onCheckedChange={() => togglePlatform("facebook")}
                  />
                  <label htmlFor="facebook" className="ml-2 flex items-center">
                    <Facebook className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Facebook</span>
                  </label>
                </div>
                <div className="flex items-center">
                  <Checkbox
                    id="twitter"
                    checked={platforms.twitter}
                    onCheckedChange={() => togglePlatform("twitter")}
                  />
                  <label htmlFor="twitter" className="ml-2 flex items-center">
                    <Twitter className="h-5 w-5 text-sky mr-2" />
                    <span>Twitter</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Share buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white flex-1"
                onClick={shareToSocialMedia}
              >
                Share to Social Media
              </Button>
              <Button variant="outline" className="border-gray-300 text-gray-700 flex-1" onClick={copyToClipboard}>
                <Copy className="mr-2 h-4 w-4" />
                Copy Link
              </Button>
            </div>
          </div>

          {/* Next steps */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-navy mb-4">Next Steps</h2>
            <ul className="space-y-4">
              <li className="flex">
                <div className="flex-shrink-0 w-8 h-8 bg-sky rounded-full flex items-center justify-center text-white font-medium mr-3">
                  1
                </div>
                <div>
                  <h3 className="font-medium text-navy">Share with your network</h3>
                  <p className="text-gray-600 text-sm">
                    The more people who see your project, the more likely you are to reach your funding goal.
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className="flex-shrink-0 w-8 h-8 bg-sky rounded-full flex items-center justify-center text-white font-medium mr-3">
                  2
                </div>
                <div>
                  <h3 className="font-medium text-navy">Post regular updates</h3>
                  <p className="text-gray-600 text-sm">
                    Keep your donors engaged by sharing progress and updates about your project.
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className="flex-shrink-0 w-8 h-8 bg-sky rounded-full flex items-center justify-center text-white font-medium mr-3">
                  3
                </div>
                <div>
                  <h3 className="font-medium text-navy">Thank your donors</h3>
                  <p className="text-gray-600 text-sm">
                    Show appreciation to those who support your project to build lasting relationships.
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex justify-between">
              <Link href="/my-projects">
                <Button variant="outline" className="border-navy text-navy">
                  View My Projects
                </Button>
              </Link>
              <Link href="/create-project">
                <Button className="bg-salmon hover:bg-salmon/90 text-white">
                  Create Another Project <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

