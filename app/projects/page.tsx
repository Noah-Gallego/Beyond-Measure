import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnnouncementBanner } from "@/components/announcement-banner"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  Users,
  Languages,
  GraduationCap,
  Laptop,
  BookOpen,
  Heart,
  Calculator,
  Dumbbell,
  BookMarked,
  FlaskConical,
  Music,
  School,
  Search,
} from "lucide-react"

export default function ProjectsPage() {
  // Category data
  const categories = [
    {
      name: "Family Enrichment",
      slug: "family-enrichment",
      icon: <Users className="w-5 h-5" />,
      count: 8,
    },
    {
      name: "Foreign Language",
      slug: "foreign-language",
      icon: <Languages className="w-5 h-5" />,
      count: 12,
    },
    {
      name: "History & Geography",
      slug: "history-geography",
      icon: <GraduationCap className="w-5 h-5" />,
      count: 15,
    },
    {
      name: "Information Technology",
      slug: "information-technology",
      icon: <Laptop className="w-5 h-5" />,
      count: 24,
    },
    {
      name: "Language Arts",
      slug: "language-arts",
      icon: <BookOpen className="w-5 h-5" />,
      count: 31,
    },
    {
      name: "Community Service",
      slug: "community-service",
      icon: <Heart className="w-5 h-5" />,
      count: 9,
    },
    {
      name: "Math",
      slug: "math",
      icon: <Calculator className="w-5 h-5" />,
      count: 18,
    },
    {
      name: "Physical Education",
      slug: "physical-education",
      icon: <Dumbbell className="w-5 h-5" />,
      count: 7,
    },
    {
      name: "Religious Education",
      slug: "religious-education",
      icon: <BookMarked className="w-5 h-5" />,
      count: 14,
    },
    {
      name: "Science",
      slug: "science",
      icon: <FlaskConical className="w-5 h-5" />,
      count: 22,
    },
    {
      name: "Art & Music",
      slug: "art-music",
      icon: <Music className="w-5 h-5" />,
      count: 19,
    },
    {
      name: "College Prep",
      slug: "college-prep",
      icon: <School className="w-5 h-5" />,
      count: 6,
    },
  ]

  // Featured projects
  const featuredProjects = [
    {
      id: 1,
      title: "New Science Lab Equipment",
      category: "Science",
      description: "Funding for new microscopes and lab equipment for our 8th grade science class.",
      raised: 1250,
      goal: 2000,
      daysLeft: 18,
      status: "Active",
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
    },
    {
      id: 3,
      title: "Math Manipulatives for Hands-On Learning",
      category: "Math",
      description: "Providing tactile learning tools to help students understand abstract math concepts.",
      raised: 350,
      goal: 600,
      daysLeft: 12,
      status: "Active",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <AnnouncementBanner />
      <Header />

      <main className="container mx-auto py-12 px-4 flex-grow">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h1 className="text-3xl font-bold text-navy mb-2">Explore Projects</h1>
            <p className="text-gray-600">Discover classroom projects that need your support</p>
          </div>
          <Link href="/create-project">
            <Button className="mt-4 md:mt-0 bg-salmon hover:bg-salmon/90 text-white px-6">Create New Project</Button>
          </Link>
        </div>

        {/* Search and filter section */}
        <div className="bg-gray-50 p-6 rounded-lg mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky"
              />
            </div>
            <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky">
              <option value="">All Statuses</option>
              <option value="active">Active</option>
              <option value="funded">Funded</option>
              <option value="new">New</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky">
              <option value="newest">Newest</option>
              <option value="ending-soon">Ending Soon</option>
              <option value="most-funded">Most Funded</option>
              <option value="least-funded">Least Funded</option>
            </select>
          </div>
        </div>

        {/* Categories section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-navy mb-6">Browse by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={`/projects/category/${category.slug}`}
                className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-12 h-12 bg-salmon/10 rounded-full flex items-center justify-center mb-2">
                  <div className="text-salmon">{category.icon}</div>
                </div>
                <span className="text-center text-sm font-medium text-navy">{category.name}</span>
                <span className="text-xs text-gray-500">{category.count} projects</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Featured projects section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-navy mb-6">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="shadow-md">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-navy text-xl">{project.title}</CardTitle>
                      <CardDescription className="text-gray-600">{project.category}</CardDescription>
                    </div>
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded ${
                        project.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : project.status === "Funded"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-6">{project.description}</p>
                  <div className="space-y-3">
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
                </CardContent>
                <CardFooter className="flex justify-between pt-3">
                  <Button variant="outline" size="sm" className="text-navy border-navy">
                    View Details
                  </Button>
                  <Button variant="outline" size="sm" className="text-sky border-sky">
                    {project.status === "Funded" ? "See Impact" : "Support"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button variant="outline" className="border-navy text-navy">
              View All Projects
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

