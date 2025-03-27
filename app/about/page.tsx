import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnnouncementBanner } from "@/components/announcement-banner"
import { Button } from "@/components/ui/button"
import { Instagram, ExternalLink } from "lucide-react"
import Link from "next/link"
import { InstagramCarousel } from "@/components/instagram-carousel"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AnnouncementBanner />
      <Header />

      <main className="container mx-auto py-12 px-4 flex-grow">
        <h1 className="text-3xl font-bold text-navy mb-8">About Us</h1>

        {/* Instagram Section - Now at the top with reduced size */}
        <div className="bg-gray-100 p-6 rounded-lg mb-12 max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-navy flex items-center">
              <Instagram className="mr-2 h-5 w-5 text-salmon" />
              @gobeyondmeasure
            </h2>
            <Link
              href="https://www.instagram.com/gobeyondmeasure/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-salmon hover:text-salmon/80 transition-colors text-sm"
            >
              Visit Instagram <ExternalLink className="ml-1 h-3 w-3" />
            </Link>
          </div>

          <p className="text-gray-600 text-sm mb-4">
            Stay updated with the latest projects, success stories, and classroom transformations. Our Instagram feed
            showcases the real impact of your donations and the amazing work of teachers across the country.
          </p>

          {/* Custom Instagram Carousel Component with real posts - Now smaller */}
          <InstagramCarousel username="gobeyondmeasure" />

          <div className="mt-4 text-center">
            <Link href="https://www.instagram.com/gobeyondmeasure/" target="_blank" rel="noopener noreferrer">
              <Button className="bg-salmon hover:bg-salmon/90 text-white text-sm py-1.5">
                <Instagram className="mr-2 h-4 w-4" />
                Follow @gobeyondmeasure
              </Button>
            </Link>
          </div>
        </div>

        {/* About Content - Now after Instagram */}
        <div className="prose max-w-none">
          <h2 className="text-2xl font-bold text-navy mb-6">Our Story</h2>
          <p className="text-lg mb-6">
            Beyond Measure is dedicated to supporting private school teachers in creating exceptional learning
            experiences. Our platform connects passionate educators with donors who believe in the power of quality
            education.
          </p>

          <p className="text-lg mb-6">
            We believe that every teacher should have access to the resources they need to create engaging, effective
            learning environments for their students. By connecting teachers directly with donors, we're creating a
            community that values and supports educational excellence.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-12 mb-6">Our Mission</h2>
          <p className="text-lg mb-6">
            At Beyond Measure, our mission is to bridge the gap between passionate teachers and supportive donors. We
            believe that by providing teachers with the resources they need, we can help create more engaging, effective
            learning environments for students across the country.
          </p>
          <p className="text-lg mb-6">
            Every dollar donated through our platform goes directly to classroom projects, ensuring that your
            contribution makes a real difference in the educational experience of students.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}

