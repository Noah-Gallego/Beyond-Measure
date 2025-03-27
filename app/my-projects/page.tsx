import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnnouncementBanner } from "@/components/announcement-banner"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import Image from "next/image"
import {
  Edit,
  MessageCircle,
  Share2,
  Instagram,
  Users,
  DollarSign,
  Calendar,
  BarChart3,
  PlusCircle,
} from "lucide-react"

export default function MyProjectsPage() {
  // Mock data for teacher's projects
  const myProjects = [
    {
      id: 1,
      title: "New Science Lab Equipment",
      category: "Science",
      description: "Funding for new microscopes and lab equipment for our 8th grade science class.",
      raised: 1250,
      goal: 2000,
      daysLeft: 18,
      status: "Active",
      donors: 24,
      updates: 3,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 2,
      title: "Classroom Library Expansion",
      category: "Language Arts",
      description: "Adding 50 new books to our classroom library to support diverse reading interests.",
      raised: 800,
      goal: 800,
      daysLeft: 0,
      status: "Funded",
      donors: 16,
      updates: 5,
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <AnnouncementBanner />
      <Header />

      <main className="container mx-auto py-12 px-4 flex-grow">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-navy mb-2">My Projects</h1>
            <p className="text-gray-600">Manage your classroom projects and connect with donors</p>
          </div>
          <Link href="/create-project">
            <Button className="mt-4 md:mt-0 bg-salmon hover:bg-salmon/90 text-white">
              <PlusCircle className="mr-2 h-4 w-4" />
              Create New Project
            </Button>
          </Link>
        </div>

        <Tabs defaultValue="active" className="mb-12">
          <TabsList className="mb-8">
            <TabsTrigger value="active">Active Projects</TabsTrigger>
            <TabsTrigger value="funded">Funded Projects</TabsTrigger>
            <TabsTrigger value="drafts">Drafts</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-8">
            {myProjects
              .filter((project) => project.status === "Active")
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}

            {myProjects.filter((project) => project.status === "Active").length === 0 && (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-medium text-gray-700 mb-4">You don't have any active projects</h3>
                <p className="text-gray-600 mb-6">Start creating a project to get funding for your classroom needs</p>
                <Link href="/create-project">
                  <Button className="bg-salmon hover:bg-salmon/90 text-white">Create a Project</Button>
                </Link>
              </div>
            )}
          </TabsContent>

          <TabsContent value="funded" className="space-y-8">
            {myProjects
              .filter((project) => project.status === "Funded")
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}

            {myProjects.filter((project) => project.status === "Funded").length === 0 && (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-medium text-gray-700 mb-4">No funded projects yet</h3>
                <p className="text-gray-600 mb-6">Your funded projects will appear here once they reach their goal</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="drafts">
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-medium text-gray-700 mb-4">No draft projects</h3>
              <p className="text-gray-600 mb-6">You can save projects as drafts while you work on them</p>
              <Link href="/create-project">
                <Button className="bg-salmon hover:bg-salmon/90 text-white">Start a Draft</Button>
              </Link>
            </div>
          </TabsContent>
        </Tabs>

        {/* Instagram Integration Section */}
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-navy flex items-center mb-2">
                <Instagram className="mr-2 h-5 w-5 text-salmon" />
                Instagram Integration
              </h2>
              <p className="text-gray-600">Connect your Instagram account to share updates and thank donors</p>
            </div>
            <Button className="mt-4 md:mt-0 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
              <Instagram className="mr-2 h-4 w-4" />
              Connect Instagram
            </Button>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="font-medium text-navy mb-4">Send Thank You to Anonymous Donors</h3>
            <p className="text-gray-600 mb-4">
              Create a personalized thank you post for all the anonymous donors who have supported your projects. This
              will be shared on your Instagram account.
            </p>

            <div className="mb-4">
              <textarea
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky"
                rows={3}
                placeholder="Write your thank you message here..."
              ></textarea>
            </div>

            <div className="flex justify-end">
              <Button className="bg-sky hover:bg-sky/90 text-white">
                <Instagram className="mr-2 h-4 w-4" />
                Post Thank You
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

// Project Card Component
function ProjectCard({ project }: { project: any }) {
  return (
    <Card className="overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Project Image */}
        <div className="md:w-1/3 relative h-[200px]">
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          <div className="absolute top-2 right-2">
            <span
              className={`px-3 py-1 text-xs font-medium rounded-full ${
                project.status === "Active" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
              }`}
            >
              {project.status}
            </span>
          </div>
        </div>

        {/* Project Details */}
        <div className="md:w-2/3 p-6">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-navy mb-1">{project.title}</h3>
            <p className="text-gray-500 text-sm">{project.category}</p>
          </div>

          <p className="text-gray-600 mb-4">{project.description}</p>

          {/* Funding Progress */}
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-sm">
              <span className="font-medium">${project.raised} raised</span>
              <span className="text-gray-600">of ${project.goal} goal</span>
            </div>
            <Progress
              value={(project.raised / project.goal) * 100}
              className="h-2 bg-gray-200"
              indicatorClassName="bg-sky"
            />
            <div className="flex justify-between text-xs text-gray-600">
              <span>{Math.round((project.raised / project.goal) * 100)}% funded</span>
              <span>{project.daysLeft > 0 ? `${project.daysLeft} days left` : "Completed"}</span>
            </div>
          </div>

          {/* Project Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="flex flex-col items-center p-2 bg-gray-50 rounded-md">
              <Users className="h-4 w-4 text-sky mb-1" />
              <span className="text-sm font-medium">{project.donors}</span>
              <span className="text-xs text-gray-500">Donors</span>
            </div>
            <div className="flex flex-col items-center p-2 bg-gray-50 rounded-md">
              <DollarSign className="h-4 w-4 text-sky mb-1" />
              <span className="text-sm font-medium">${Math.round(project.raised / project.donors)}</span>
              <span className="text-xs text-gray-500">Avg. Donation</span>
            </div>
            <div className="flex flex-col items-center p-2 bg-gray-50 rounded-md">
              <Calendar className="h-4 w-4 text-sky mb-1" />
              <span className="text-sm font-medium">{project.daysLeft > 0 ? project.daysLeft : 0}</span>
              <span className="text-xs text-gray-500">Days Left</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" className="text-navy border-navy">
              <Edit className="mr-1 h-4 w-4" />
              Edit Project
            </Button>
            <Button variant="outline" size="sm" className="text-sky border-sky">
              <MessageCircle className="mr-1 h-4 w-4" />
              Post Update
            </Button>
            <Button variant="outline" size="sm" className="text-sky border-sky">
              <Share2 className="mr-1 h-4 w-4" />
              Share
            </Button>
            <Button variant="outline" size="sm" className="text-sky border-sky">
              <BarChart3 className="mr-1 h-4 w-4" />
              Analytics
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}

