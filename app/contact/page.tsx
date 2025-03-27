import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnnouncementBanner } from "@/components/announcement-banner"
import { Button } from "@/components/ui/button"
import { ChatBot } from "@/components/chat-bot"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AnnouncementBanner />
      <Header />

      <main className="container mx-auto py-12 px-4 flex-grow">
        <h1 className="text-3xl font-bold text-navy mb-8">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg mb-6">
              Have questions or need assistance? Fill out the form and our team will get back to you as soon as
              possible.
            </p>

            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky"
                ></textarea>
              </div>

              <Button className="bg-salmon hover:bg-salmon/90 text-white">Send Message</Button>
            </div>
          </div>

          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-navy mb-4">Contact Information</h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-navy">Address</h3>
                <p className="text-gray-600">
                  123 Education Lane, Suite 100
                  <br />
                  Anytown, MT 12345
                </p>
              </div>

              <div>
                <h3 className="font-medium text-navy">Email</h3>
                <p className="text-gray-600">info@beyondmeasure.org</p>
              </div>

              <div>
                <h3 className="font-medium text-navy">Phone</h3>
                <p className="text-gray-600">(123) 456-7890</p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-white rounded-lg border border-gray-200">
              <h3 className="font-medium text-navy mb-2">Need Immediate Help?</h3>
              <p className="text-gray-600 text-sm mb-3">
                Our chat assistant is available 24/7 to answer your questions. Click the chat icon in the bottom right
                corner to get started.
              </p>
              <div className="flex items-center text-sm text-sky">
                <span className="relative flex h-3 w-3 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-sky"></span>
                </span>
                Chat assistant is online
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Chat Bot Component */}
      <ChatBot />
    </div>
  )
}

