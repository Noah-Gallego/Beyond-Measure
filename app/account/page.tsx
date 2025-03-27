import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnnouncementBanner } from "@/components/announcement-banner"
import { Button } from "@/components/ui/button"

export default function AccountPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AnnouncementBanner />
      <Header />

      <main className="container mx-auto py-12 px-4 flex-grow">
        <h1 className="text-3xl font-bold text-navy mb-8">My Account</h1>

        <div className="bg-white shadow-md rounded-lg p-8 max-w-3xl">
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-medium text-navy mb-6">Account Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <p className="text-gray-900">Teacher Name</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <p className="text-gray-900">teacher@school.edu</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">School</label>
                  <p className="text-gray-900">Example Private School</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <p className="text-gray-900">Montana</p>
                </div>
              </div>
              <Button className="mt-6 bg-sky hover:bg-sky/90 text-white">Edit Profile</Button>
            </div>

            <hr className="border-gray-200" />

            <div>
              <h2 className="text-xl font-medium text-navy mb-6">Account Settings</h2>
              <div className="space-y-4">
                <div>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left border-gray-300 text-gray-700 py-3"
                  >
                    Change Password
                  </Button>
                </div>
                <div>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left border-gray-300 text-gray-700 py-3"
                  >
                    Notification Preferences
                  </Button>
                </div>
                <div>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left border-gray-300 text-gray-700 py-3"
                  >
                    Payment Information
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

