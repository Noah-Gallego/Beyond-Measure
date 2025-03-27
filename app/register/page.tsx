import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnnouncementBanner } from "@/components/announcement-banner"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { AlertCircle } from "lucide-react"

export default function RegisterPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AnnouncementBanner />
      <Header />

      <main className="container mx-auto py-12 px-4 flex-grow">
        <div className="max-w-3xl mx-auto">
          {/* Inspirational hook */}
          <div className="text-center mb-10">
            <h2 className="text-2xl font-medium text-navy mb-3">Join our community of passionate educators</h2>
            <p className="text-lg text-gray-600">
              Create a project, get funded, and make a positive change in your classroom today!
            </p>
          </div>

          <h1 className="text-4xl font-bold text-salmon text-center mb-10">Create an Account</h1>

          {/* Registration steps */}
          <div className="flex mb-8 border-b border-gray-200">
            <div className="flex items-center pb-4 border-b-2 border-sky mr-8">
              <div className="w-7 h-7 rounded-full bg-sky text-white flex items-center justify-center mr-2">1</div>
              <span className="font-medium text-navy">User Details</span>
            </div>
            <div className="flex items-center pb-4 text-gray-400">
              <div className="w-7 h-7 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center mr-2">
                2
              </div>
              <span>Email Confirmation</span>
            </div>
          </div>

          {/* Alert for existing users */}
          <div className="bg-amber-50 border border-amber-200 rounded-md p-4 mb-8 flex items-start">
            <AlertCircle className="text-amber-500 mt-0.5 mr-3 h-5 w-5 flex-shrink-0" />
            <div>
              <p className="text-amber-800">
                Already signed up and need to confirm your account?{" "}
                <Link href="/confirm-email" className="text-sky font-medium underline">
                  Confirm your email.
                </Link>
              </p>
            </div>
          </div>

          {/* Registration form */}
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name <span className="text-red-500">*</span>
                </label>
                <Input id="firstName" name="firstName" type="text" required className="w-full" />
              </div>

              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <Input id="lastName" name="lastName" type="text" required className="w-full" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <Input id="email" name="email" type="email" required className="w-full" />
              </div>

              <div className="space-y-2">
                <label htmlFor="accountType" className="block text-sm font-medium text-gray-700">
                  Account Type <span className="text-red-500">*</span>
                </label>
                <select
                  id="accountType"
                  name="accountType"
                  required
                  defaultValue=""
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky focus:border-sky"
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="teacher">Teacher</option>
                  <option value="administrator">School Administrator</option>
                  <option value="donor">Donor</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password <span className="text-red-500">*</span>
                </label>
                <Input id="password" name="password" type="password" required className="w-full" />
              </div>

              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                  Confirm Password <span className="text-red-500">*</span>
                </label>
                <Input id="confirmPassword" name="confirmPassword" type="password" required className="w-full" />
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-start">
                <Checkbox id="terms" className="mt-1" />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                  I agree to the{" "}
                  <Link href="/terms" className="text-sky hover:underline">
                    Terms of Use
                  </Link>{" "}
                  and have read and understand the{" "}
                  <Link href="/privacy-policy" className="text-sky hover:underline">
                    Privacy Policy
                  </Link>{" "}
                  <span className="text-red-500">*</span>
                </label>
              </div>
            </div>

            <div className="flex justify-center pt-6">
              <Button type="submit" className="bg-grass hover:bg-grass/90 text-white px-8 py-6 text-lg">
                Create Account
              </Button>
            </div>

            <div className="text-center text-sm text-gray-600 mt-4">
              Already have an account?{" "}
              <Link href="/login" className="text-sky font-medium hover:underline">
                Log in
              </Link>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  )
}

