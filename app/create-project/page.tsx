"use client"

import type React from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnnouncementBanner } from "@/components/announcement-banner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function CreateProjectPage() {
  const router = useRouter()

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would save the project to the database
    // For now, we'll just redirect to the success page
    router.push("/create-project/success")
  }

  return (
    <div className="flex flex-col min-h-screen">
      <AnnouncementBanner />
      <Header />

      <main className="container mx-auto py-12 px-4 flex-grow">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-3">Create Your Classroom Project</h1>
          <p className="text-lg text-gray-600 mb-8">Share your vision and get the resources your students deserve</p>

          <div className="bg-white shadow-md rounded-lg p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="project-title" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Title
                </label>
                <Input
                  id="project-title"
                  placeholder="Give your project a clear, descriptive title"
                  className="w-full"
                  required
                />
              </div>

              <div>
                <label htmlFor="project-category" className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  id="project-category"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  <option value="family">Family Enrichment</option>
                  <option value="language">Foreign Language</option>
                  <option value="history">History & Geography</option>
                  <option value="technology">Information Technology</option>
                  <option value="language-arts">Language Arts</option>
                  <option value="community">Community Service</option>
                  <option value="math">Math</option>
                  <option value="physical">Physical Education</option>
                  <option value="religious">Religious Education</option>
                  <option value="science">Science</option>
                  <option value="arts">Art & Music</option>
                  <option value="college">College Prep</option>
                </select>
              </div>

              <div>
                <label htmlFor="funding-goal" className="block text-sm font-medium text-gray-700 mb-2">
                  Funding Goal ($)
                </label>
                <Input id="funding-goal" type="number" placeholder="Enter amount needed" className="w-full" required />
              </div>

              <div>
                <label htmlFor="project-description" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Description
                </label>
                <Textarea
                  id="project-description"
                  rows={6}
                  placeholder="Describe your project, its goals, and how it will benefit your students"
                  className="w-full"
                  required
                />
              </div>

              <div>
                <label htmlFor="project-impact" className="block text-sm font-medium text-gray-700 mb-2">
                  Student Impact
                </label>
                <Textarea
                  id="project-impact"
                  rows={4}
                  placeholder="How many students will this project help? How will it make a difference?"
                  className="w-full"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Image</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-sky hover:text-sky/80"
                      >
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-4 pt-4">
                <Button type="button" variant="outline" className="border-gray-300 text-gray-700 px-6">
                  Save as Draft
                </Button>
                <Button type="submit" className="bg-salmon hover:bg-salmon/90 text-white px-6">
                  Submit Project
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

