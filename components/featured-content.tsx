import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, FileText, Video } from "lucide-react"

const featuredContent = [
  {
    title: "Introduction to Data Structures",
    type: "lecture",
    branch: "Computer Science",
    year: "Second Year",
    icon: Video,
    trending: true,
  },
  {
    title: "Thermodynamics Complete Notes",
    type: "notes",
    branch: "Mechanical Engineering",
    year: "Third Year",
    icon: FileText,
    trending: false,
  },
  {
    title: "Circuit Analysis Fundamentals",
    type: "lecture",
    branch: "Electrical Engineering",
    year: "First Year",
    icon: Video,
    trending: true,
  },
  {
    title: "Structural Engineering Handbook",
    type: "book",
    branch: "Civil Engineering",
    year: "Fourth Year",
    icon: BookOpen,
    trending: false,
  },
  {
    title: "Calculus for Engineers",
    type: "notes",
    branch: "Mathematics",
    year: "First Year",
    icon: FileText,
    trending: true,
  },
  {
    title: "Digital Logic Design",
    type: "lecture",
    branch: "Computer Science",
    year: "Second Year",
    icon: Video,
    trending: false,
  },
]

export default function FeaturedContent() {
  return (
    <>
      {featuredContent.map((content, index) => (
        <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
          <CardHeader className="p-4 bg-gray-50 dark:bg-gray-900">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-md bg-primary/10 text-primary">
                  <content.icon className="h-4 w-4" />
                </div>
                <CardTitle className="text-base">{content.title}</CardTitle>
              </div>
              {content.trending && (
                <Badge variant="secondary" className="ml-2">
                  Trending
                </Badge>
              )}
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{content.branch}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{content.year}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Badge variant="outline" className="text-xs">
                  {content.type === "lecture"
                    ? "Video Lecture"
                    : content.type === "notes"
                      ? "PDF Notes"
                      : "Reference Book"}
                </Badge>
              </div>
            </div>
          </CardContent>
          <CardFooter className="p-4 border-t bg-gray-50 dark:bg-gray-900">
            <span className="text-sm text-primary hover:underline cursor-pointer">View content</span>
          </CardFooter>
        </Card>
      ))}
    </>
  )
}
