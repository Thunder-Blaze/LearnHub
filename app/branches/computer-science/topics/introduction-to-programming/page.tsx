import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Clock, FileText, PlayCircle } from "lucide-react"

export default function IntroductionToProgrammingPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="secondary">Computer Science</Badge>
          <Badge variant="secondary">Beginner</Badge>
        </div>
        <h1 className="text-3xl font-bold mb-2">Introduction to Programming</h1>
        <p className="text-muted-foreground">
          Learn the fundamentals of programming and start your coding journey
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Video Player */}
          <div className="aspect-video w-full rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/zOjov-2OZ0E"
              title="Introduction to Programming"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Video Description */}
          <Card>
            <CardHeader>
              <CardTitle>About This Video</CardTitle>
              <CardDescription>
                This video provides a comprehensive introduction to programming concepts, 
                including variables, data types, control structures, and basic algorithms.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>45 minutes</span>
                </div>
                <div className="flex items-center gap-1">
                  <PlayCircle className="w-4 h-4" />
                  <span>Video Lecture</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Learning Objectives */}
          <Card>
            <CardHeader>
              <CardTitle>Learning Objectives</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc list-inside">
                <li>Understand basic programming concepts and terminology</li>
                <li>Learn about variables, data types, and operators</li>
                <li>Explore control structures (if-else, loops)</li>
                <li>Get familiar with basic algorithms and problem-solving</li>
                <li>Write your first simple programs</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Progress */}
          <Card>
            <CardHeader>
              <CardTitle>Your Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Course Progress</span>
                    <span>0%</span>
                  </div>
                  <Progress value={0} />
                </div>
                <Button className="w-full">Mark as Completed</Button>
              </div>
            </CardContent>
          </Card>

          {/* Resources */}
          <Card>
            <CardHeader>
              <CardTitle>Additional Resources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full justify-start gap-2">
                <FileText className="w-4 h-4" />
                Download Slides
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <BookOpen className="w-4 h-4" />
                Reading Materials
              </Button>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card>
            <CardHeader>
              <CardTitle>Next Steps</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  Variables and Data Types
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Control Structures
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Functions and Modules
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 