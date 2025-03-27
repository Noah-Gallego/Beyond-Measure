import type React from "react"
import Link from "next/link"
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
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface CategoryProps {
  icon: React.ReactNode
  name: string
  slug: string
}

const Category = ({ icon, name, slug }: CategoryProps) => (
  <Link href={`/projects/category/${slug}`} className="flex flex-col items-center group">
    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-2 group-hover:bg-white/30 transition-colors">
      {icon}
    </div>
    <span className="text-center text-sm font-medium text-white group-hover:underline">{name}</span>
  </Link>
)

export function ExploreProjectsSection() {
  const categories = [
    {
      name: "Family Enrichment",
      slug: "family-enrichment",
      icon: <Users className="w-6 h-6 text-white" />,
    },
    {
      name: "Foreign Language",
      slug: "foreign-language",
      icon: <Languages className="w-6 h-6 text-white" />,
    },
    {
      name: "History & Geography",
      slug: "history-geography",
      icon: <GraduationCap className="w-6 h-6 text-white" />,
    },
    {
      name: "Information Technology",
      slug: "information-technology",
      icon: <Laptop className="w-6 h-6 text-white" />,
    },
    {
      name: "Language Arts",
      slug: "language-arts",
      icon: <BookOpen className="w-6 h-6 text-white" />,
    },
    {
      name: "Community Service",
      slug: "community-service",
      icon: <Heart className="w-6 h-6 text-white" />,
    },
    {
      name: "Math",
      slug: "math",
      icon: <Calculator className="w-6 h-6 text-white" />,
    },
    {
      name: "Physical Education",
      slug: "physical-education",
      icon: <Dumbbell className="w-6 h-6 text-white" />,
    },
    {
      name: "Religious Education",
      slug: "religious-education",
      icon: <BookMarked className="w-6 h-6 text-white" />,
    },
    {
      name: "Science",
      slug: "science",
      icon: <FlaskConical className="w-6 h-6 text-white" />,
    },
    {
      name: "Art & Music",
      slug: "art-music",
      icon: <Music className="w-6 h-6 text-white" />,
    },
    {
      name: "College Prep",
      slug: "college-prep",
      icon: <School className="w-6 h-6 text-white" />,
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-salmon text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            Explore projects aligned with your interests and subjects that inspire you.
          </h2>
          <Link href="/projects">
            <Button className="bg-white text-salmon hover:bg-white/90 px-8 py-6 text-lg">Explore All Projects</Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {categories.map((category, index) => (
            <Category key={index} icon={category.icon} name={category.name} slug={category.slug} />
          ))}
        </div>
      </div>
    </section>
  )
}

