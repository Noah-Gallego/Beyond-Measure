import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnnouncementBanner } from "@/components/announcement-banner"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, PieChart, Shield, ThumbsUp } from "lucide-react"

export default function FundingBreakdownPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AnnouncementBanner />
      <Header />

      <main className="container mx-auto py-12 px-4 flex-grow">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-3">100% of Funds Go to Classrooms</h1>
          <p className="text-lg text-gray-600 mb-8">
            At Beyond Measure, we're committed to ensuring that every dollar donated goes directly to supporting
            teachers and students.
          </p>

          <div className="bg-white shadow-md rounded-lg p-8 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8">
              <div className="text-center md:text-left mb-6 md:mb-0">
                <h2 className="text-2xl font-bold text-navy mb-2">Our Funding Promise</h2>
                <p className="text-gray-600 max-w-xl">
                  Unlike other platforms that take a percentage of donations, we ensure that 100% of your contribution
                  reaches the classroom projects you choose to support.
                </p>
              </div>
              <div className="w-32 h-32 bg-sky rounded-full flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm">to classrooms</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center text-center">
                <DollarSign className="h-10 w-10 text-salmon mb-4" />
                <h3 className="text-lg font-semibold text-navy mb-2">Direct Funding</h3>
                <p className="text-gray-600 text-sm">
                  Every dollar you donate goes directly to the classroom project you choose to support.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center text-center">
                <Shield className="h-10 w-10 text-salmon mb-4" />
                <h3 className="text-lg font-semibold text-navy mb-2">Secure Transactions</h3>
                <p className="text-gray-600 text-sm">
                  All donations are processed securely and transferred directly to the teacher's project fund.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center text-center">
                <ThumbsUp className="h-10 w-10 text-salmon mb-4" />
                <h3 className="text-lg font-semibold text-navy mb-2">Full Transparency</h3>
                <p className="text-gray-600 text-sm">
                  Teachers provide updates on how funds are used, so you can see your impact.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-navy mb-6 flex items-center">
            <PieChart className="mr-2 h-6 w-6 text-sky" />
            How We're Different
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-navy">Beyond Measure Model</CardTitle>
                <CardDescription>100% to classrooms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Teacher Project Funding</span>
                    <span className="font-bold text-green-600">100%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Platform Fee</span>
                    <span className="font-bold text-green-600">0%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Payment Processing</span>
                    <span className="font-bold text-green-600">Covered by sponsors</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Administrative Costs</span>
                    <span className="font-bold text-green-600">Covered by grants</span>
                  </div>
                  <div className="bg-green-50 p-4 rounded-md mt-4">
                    <p className="text-green-800 text-sm">
                      <strong>Result:</strong> Every dollar you donate goes directly to the classroom project you choose
                      to support.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-gray-700">Typical Crowdfunding Model</CardTitle>
                <CardDescription>Only 85-93% to projects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Project Funding</span>
                    <span className="font-bold text-gray-600">85-93%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Platform Fee</span>
                    <span className="font-bold text-gray-600">3-5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Payment Processing</span>
                    <span className="font-bold text-gray-600">2.9% + $0.30 per transaction</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Administrative Costs</span>
                    <span className="font-bold text-gray-600">Taken from donations</span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md mt-4">
                    <p className="text-gray-700 text-sm">
                      <strong>Result:</strong> A significant portion of each donation goes to platform fees and
                      processing costs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-salmon text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">How We Make This Possible</h2>
            <p className="mb-6">
              Beyond Measure is able to deliver 100% of donations to classrooms thanks to our generous foundation
              partners and sponsors who cover our operational costs.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Foundation Support</h3>
                <p className="text-sm text-white/90">
                  Our operational costs are covered by grants from educational foundations committed to improving
                  classroom resources.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Corporate Sponsors</h3>
                <p className="text-sm text-white/90">
                  Payment processing fees are covered by our corporate sponsors who believe in our mission to support
                  teachers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

