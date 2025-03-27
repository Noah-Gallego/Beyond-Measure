import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnnouncementBanner } from "@/components/announcement-banner"
import { ExploreProjectsSection } from "@/components/explore-projects-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Announcement Banner */}
      <AnnouncementBanner />

      {/* Header/Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="w-full">
        <div className="flex flex-col md:flex-row">
          {/* Left side - Image - Now with aspect ratio matching the blue box */}
          <div className="relative w-full md:w-1/2 md:aspect-[4/5] h-[400px] md:h-auto">
            <Image
              src="/images/classroom-hero.png"
              alt="Teacher helping students in classroom"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right side - Content - Full width with no margin */}
          <div className="w-full md:w-1/2 bg-navy text-white p-8 md:p-16 flex flex-col justify-center">
            <h1 className="font-script text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
              Empower your classroom.
              <br />
              Create lasting impact.
            </h1>

            <p className="text-lg md:text-xl mb-10 leading-relaxed">
              A platform dedicated to supporting private school teachers in creating exceptional learning experiences.
              Start your project today and connect with donors who believe in educational excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/create-project" className="w-full sm:w-1/2">
                <Button className="bg-salmon hover:bg-salmon/90 text-white px-8 py-6 text-lg w-full">
                  Create a Project
                </Button>
              </Link>
              <Link href="/projects" className="w-full sm:w-1/2">
                <Button className="bg-salmon hover:bg-salmon/90 text-white px-8 py-6 text-lg w-full">
                  Browse Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <Link href="/create-project" className="group">
              <div className="flex flex-col items-center p-6 rounded-lg transition-all hover:bg-gray-50">
                <h3 className="text-salmon text-xl font-medium mb-4 group-hover:underline">CREATE A PROJECT</h3>
                <p className="text-gray-700 max-w-xs mx-auto">Transform your classroom vision into reality</p>
              </div>
            </Link>

            <Link href="/track-impact" className="group">
              <div className="flex flex-col items-center p-6 rounded-lg transition-all hover:bg-gray-50">
                <h3 className="text-salmon text-xl font-medium mb-4 group-hover:underline">TRACK YOUR IMPACT</h3>
                <p className="text-gray-700 max-w-xs mx-auto">
                  Monitor your project's progress and connect with your supporters
                </p>
              </div>
            </Link>

            <Link href="/funding-breakdown" className="group">
              <div className="flex flex-col items-center p-6 rounded-lg transition-all hover:bg-gray-50">
                <h3 className="text-salmon text-xl font-medium mb-4 group-hover:underline">100% OF FUNDS</h3>
                <p className="text-gray-700 max-w-xs mx-auto">Every dollar donated goes directly to your classroom</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Explore Projects Section - New component */}
      <ExploreProjectsSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}

