import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnnouncementBanner } from "@/components/announcement-banner"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronRight, TrendingUp, Trophy, Users } from "lucide-react"

export default function TrackImpactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AnnouncementBanner />
      <Header />

      <main className="container mx-auto py-12 px-4 flex-grow">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-3">Track Your Impact</h1>
          <p className="text-lg text-gray-600 mb-8">
            Monitor your project's progress and see how your classroom is making a difference
          </p>

          <Tabs defaultValue="leaderboard" className="mb-12">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="leaderboard">Project Leaderboard</TabsTrigger>
              <TabsTrigger value="your-projects">Your Projects</TabsTrigger>
            </TabsList>

            <TabsContent value="leaderboard">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-semibold text-navy flex items-center">
                    <Trophy className="mr-2 h-6 w-6 text-sky" />
                    Projects Closest to Goal
                  </h2>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">Sort by:</span>
                    <select className="text-sm border rounded-md px-2 py-1">
                      <option>% to Goal</option>
                      <option>Newest</option>
                      <option>Most Funded</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-6">
                  {/* Project 1 */}
                  <Card className="shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between">
                        <div>
                          <CardTitle className="text-navy">New Classroom Library</CardTitle>
                          <CardDescription>Ms. Johnson's 3rd Grade</CardDescription>
                        </div>
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                          95% Funded
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">$950 raised</span>
                          <span className="text-gray-600">of $1,000 goal</span>
                        </div>
                        <Progress value={95} className="h-2 bg-gray-200" indicatorClassName="bg-sky" />
                        <div className="flex justify-between text-xs text-gray-600">
                          <span>Only $50 to go!</span>
                          <span>5 days left</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Project 2 */}
                  <Card className="shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between">
                        <div>
                          <CardTitle className="text-navy">STEM Lab Equipment</CardTitle>
                          <CardDescription>Mr. Peterson's Science Class</CardDescription>
                        </div>
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                          87% Funded
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">$1,740 raised</span>
                          <span className="text-gray-600">of $2,000 goal</span>
                        </div>
                        <Progress value={87} className="h-2 bg-gray-200" indicatorClassName="bg-sky" />
                        <div className="flex justify-between text-xs text-gray-600">
                          <span>$260 to go!</span>
                          <span>12 days left</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Project 3 */}
                  <Card className="shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between">
                        <div>
                          <CardTitle className="text-navy">Music Program Instruments</CardTitle>
                          <CardDescription>Ms. Rivera's Music Class</CardDescription>
                        </div>
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                          82% Funded
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">$2,050 raised</span>
                          <span className="text-gray-600">of $2,500 goal</span>
                        </div>
                        <Progress value={82} className="h-2 bg-gray-200" indicatorClassName="bg-sky" />
                        <div className="flex justify-between text-xs text-gray-600">
                          <span>$450 to go!</span>
                          <span>8 days left</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex justify-center mt-8">
                  <Link href="/projects">
                    <Button variant="outline" className="text-navy border-navy">
                      View All Projects <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="your-projects">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-semibold text-navy flex items-center">
                    <TrendingUp className="mr-2 h-6 w-6 text-sky" />
                    Your Project Progress
                  </h2>
                  <Link href="/create-project">
                    <Button className="bg-salmon hover:bg-salmon/90 text-white">Create New Project</Button>
                  </Link>
                </div>

                <div className="grid gap-6">
                  {/* Your Project 1 */}
                  <Card className="shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between">
                        <div>
                          <CardTitle className="text-navy">New Science Lab Equipment</CardTitle>
                          <CardDescription>Science</CardDescription>
                        </div>
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                          Active
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="font-medium">$1,250 raised</span>
                            <span className="text-gray-600">of $2,000 goal</span>
                          </div>
                          <Progress value={62} className="h-2 bg-gray-200" indicatorClassName="bg-sky" />
                          <div className="flex justify-between text-xs text-gray-600">
                            <span>62% funded</span>
                            <span>18 days left</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <div className="text-2xl font-bold text-navy">24</div>
                            <div className="text-xs text-gray-500">Donors</div>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <div className="text-2xl font-bold text-navy">18</div>
                            <div className="text-xs text-gray-500">Days Left</div>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <div className="text-2xl font-bold text-navy">$52</div>
                            <div className="text-xs text-gray-500">Avg. Donation</div>
                          </div>
                        </div>

                        <div className="flex justify-between">
                          <Button variant="outline" size="sm" className="text-navy border-navy">
                            View Details
                          </Button>
                          <Button variant="outline" size="sm" className="text-sky border-sky">
                            Share <Users className="ml-1 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Your Project 2 */}
                  <Card className="shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between">
                        <div>
                          <CardTitle className="text-navy">Classroom Library Expansion</CardTitle>
                          <CardDescription>Language Arts</CardDescription>
                        </div>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">Funded</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="font-medium">$800 raised</span>
                            <span className="text-gray-600">of $800 goal</span>
                          </div>
                          <Progress value={100} className="h-2 bg-gray-200" indicatorClassName="bg-sky" />
                          <div className="flex justify-between text-xs text-gray-600">
                            <span>100% funded</span>
                            <span>Completed</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <div className="text-2xl font-bold text-navy">16</div>
                            <div className="text-xs text-gray-500">Donors</div>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <div className="text-2xl font-bold text-navy">0</div>
                            <div className="text-xs text-gray-500">Days Left</div>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <div className="text-2xl font-bold text-navy">$50</div>
                            <div className="text-xs text-gray-500">Avg. Donation</div>
                          </div>
                        </div>

                        <div className="flex justify-between">
                          <Button variant="outline" size="sm" className="text-navy border-navy">
                            View Details
                          </Button>
                          <Button variant="outline" size="sm" className="text-sky border-sky">
                            Send Updates
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  )
}

