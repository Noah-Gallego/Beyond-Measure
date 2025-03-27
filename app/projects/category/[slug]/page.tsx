import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnnouncementBanner } from "@/components/announcement-banner"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { notFound } from "next/navigation"

// Define the category data
const categories = {
  "family-enrichment": {
    name: "Family Enrichment",
    description: "Projects that strengthen family connections and parental involvement in education",
  },
  "foreign-language": {
    name: "Foreign Language",
    description: "Projects focused on teaching and learning foreign languages",
  },
  "history-geography": {
    name: "History & Geography",
    description: "Projects related to historical events, cultures, and geographical studies",
  },
  "information-technology": {
    name: "Information Technology",
    description: "Projects involving computers, coding, and digital literacy",
  },
  "language-arts": {
    name: "Language Arts",
    description: "Projects focused on reading, writing, and communication skills",
  },
  "community-service": {
    name: "Community Service",
    description: "Projects that engage students in helping their local communities",
  },
  math: {
    name: "Math",
    description: "Projects focused on mathematical concepts and problem-solving",
  },
  "physical-education": {
    name: "Physical Education",
    description: "Projects promoting physical fitness, sports, and healthy lifestyles",
  },
  "religious-education": {
    name: "Religious Education",
    description: "Projects focused on faith-based learning and spiritual development",
  },
  science: {
    name: "Science",
    description: "Projects involving scientific inquiry, experiments, and discovery",
  },
  "art-music": {
    name: "Art & Music",
    description: "Projects focused on visual arts, music, and creative expression",
  },
  "college-prep": {
    name: "College Prep",
    description: "Projects helping students prepare for higher education",
  },
}

// Mock project data for each category
const mockProjects = [
  {
    id: 1,
    title: "New Science Lab Equipment",
    category: "science",
    description: "Funding for new microscopes and lab equipment for our 8th grade science class.",
    raised: 1250,
    goal: 2000,
    daysLeft: 18,
    status: "Active",
  },
  {
    id: 2,
    title: "Classroom Library Expansion",
    category: "language-arts",
    description: "Adding 50 new books to our classroom library to support diverse reading interests.",
    raised: 800,
    goal: 800,
    daysLeft: 0,
    status: "Funded",
  },
  {
    id: 3,
    title: "Math Manipulatives for Hands-On Learning",
    category: "math",
    description: "Providing tactile learning tools to help students understand abstract math concepts.",
    raised: 350,
    goal: 600,
    daysLeft: 12,
    status: "Active",
  },
  {
    id: 4,
    title: "Field Trip to Art Museum",
    category: "art-music",
    description: "Transportation and admission for 25 students to visit the state art museum.",
    raised: 0,
    goal: 450,
    daysLeft: 30,
    status: "New",
  },
  {
    id: 5,
    title: "Coding Club Equipment",
    category: "information-technology",
    description: "Raspberry Pi kits and accessories for our after-school coding club.",
    raised: 900,
    goal: 1200,
    daysLeft: 5,
    status: "Active",
  },
  {
    id: 6,
    title: "Spanish Language Learning Materials",
    category: "foreign-language",
    description: "Interactive software and books for our Spanish language program.",
    raised: 600,
    goal: 750,
    daysLeft: 8,
    status: "Active",
  },
]

export default function CategoryPage({ params }: { params: { slug: string } }) {
  // Check if the category exists
  const categorySlug = params.slug as string
  const categoryExists = Object.keys(categories).includes(categorySlug)

  if (!categoryExists) {
    return notFound()
  }

  const category = categories[categorySlug as keyof typeof categories]

  // Filter projects by category
  const filteredProjects = mockProjects.filter((project) => project.category === categorySlug)

  return (
    <div className="flex flex-col min-h-screen">
      <AnnouncementBanner />
      <Header />

      <main className="container mx-auto py-12 px-4 flex-grow">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-navy mb-2">{category.name} Projects</h1>
            <p className="text-gray-600 max-w-2xl">{category.description}</p>
          </div>
          <Link href="/projects" className="mt-4 md:mt-0">
            <Button variant="outline" className="border-navy text-navy">
              View All Categories
            </Button>
          </Link>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="shadow-md">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-navy text-xl">{project.title}</CardTitle>
                      <CardDescription className="text-gray-600">{category.name}</CardDescription>
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
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium text-gray-700 mb-4">No projects found in this category yet</h3>
            <p className="text-gray-600 mb-8">Be the first to create a project in this category!</p>
            <Link href="/create-project">
              <Button className="bg-salmon hover:bg-salmon/90 text-white">Create a Project</Button>
            </Link>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}

