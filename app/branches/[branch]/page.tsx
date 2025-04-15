import { notFound } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Video, BookOpen } from "lucide-react"
import Link from "next/link"

// This would come from your database in a real app
const branches = {
  "computer-science": {
    name: "Computer Science",
    description: "Programming, algorithms, data structures, and software engineering.",
    years: ["First Year", "Second Year", "Third Year", "Fourth Year"],
    content: {
      "First Year": [
        { title: "Introduction to Programming", type: "lecture", icon: Video },
        { title: "Computer Organization", type: "notes", icon: FileText },
        { title: "Discrete Mathematics", type: "book", icon: BookOpen },
      ],
      "Second Year": [
        { title: "Data Structures and Algorithms", type: "lecture", icon: Video },
        { title: "Object-Oriented Programming", type: "notes", icon: FileText },
        { title: "Database Systems", type: "lecture", icon: Video },
      ],
      "Third Year": [
        { title: "Operating Systems", type: "lecture", icon: Video },
        { title: "Computer Networks", type: "notes", icon: FileText },
        { title: "Software Engineering", type: "book", icon: BookOpen },
      ],
      "Fourth Year": [
        { title: "Artificial Intelligence", type: "lecture", icon: Video },
        { title: "Machine Learning", type: "notes", icon: FileText },
        { title: "Cloud Computing", type: "lecture", icon: Video },
      ],
    },
  },
  mechanical: {
    name: "Mechanical Engineering",
    description: "Thermodynamics, mechanics, manufacturing, and machine design.",
    years: ["First Year", "Second Year", "Third Year", "Fourth Year"],
    content: {
      "First Year": [
        { title: "Engineering Mechanics", type: "lecture", icon: Video },
        { title: "Engineering Drawing", type: "notes", icon: FileText },
        { title: "Materials Science", type: "book", icon: BookOpen },
      ],
      "Second Year": [
        { title: "Thermodynamics", type: "lecture", icon: Video },
        { title: "Fluid Mechanics", type: "notes", icon: FileText },
        { title: "Machine Design", type: "lecture", icon: Video },
      ],
      "Third Year": [
        { title: "Heat Transfer", type: "lecture", icon: Video },
        { title: "Manufacturing Processes", type: "notes", icon: FileText },
        { title: "Mechanical Vibrations", type: "book", icon: BookOpen },
      ],
      "Fourth Year": [
        { title: "Robotics and Automation", type: "lecture", icon: Video },
        { title: "Finite Element Analysis", type: "notes", icon: FileText },
        { title: "Automotive Engineering", type: "lecture", icon: Video },
      ],
    },
  },
  electrical: {
    name: "Electrical Engineering",
    description: "Circuits, electronics, power systems, and control systems.",
    years: ["First Year", "Second Year", "Third Year", "Fourth Year"],
    content: {
      "First Year": [
        { title: "Electric Circuits", type: "lecture", icon: Video },
        { title: "Digital Logic Design", type: "notes", icon: FileText },
        { title: "Electromagnetic Fields", type: "book", icon: BookOpen },
      ],
      "Second Year": [
        { title: "Electronics", type: "lecture", icon: Video },
        { title: "Signals and Systems", type: "notes", icon: FileText },
        { title: "Control Systems", type: "lecture", icon: Video },
      ],
      "Third Year": [
        { title: "Power Systems", type: "lecture", icon: Video },
        { title: "Communication Systems", type: "notes", icon: FileText },
        { title: "Microprocessors", type: "book", icon: BookOpen },
      ],
      "Fourth Year": [
        { title: "Power Electronics", type: "lecture", icon: Video },
        { title: "VLSI Design", type: "notes", icon: FileText },
        { title: "Renewable Energy Systems", type: "lecture", icon: Video },
      ],
    },
  },
  // Add other branches as needed
}

export default function BranchPage({ params }: { params: { branch: string } }) {
  const branch = branches[params.branch as keyof typeof branches]

  if (!branch) {
    notFound()
  }

  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{branch.name}</h1>
        <p className="text-muted-foreground">{branch.description}</p>
      </div>

      <Tabs defaultValue={branch.years[0]} className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
          {branch.years.map((year) => (
            <TabsTrigger key={year} value={year}>
              {year}
            </TabsTrigger>
          ))}
        </TabsList>

        {branch.years.map((year) => (
          <TabsContent key={year} value={year}>
            <h2 className="text-2xl font-semibold mb-6">{year} Content</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {branch.content[year as keyof typeof branch.content].map((item, index) => (
                <Link
                  href={`/branches/${params.branch}/topics/${encodeURIComponent(item.title.toLowerCase().replace(/\s+/g, "-"))}`}
                  key={index}
                >
                  <Card className="overflow-hidden transition-all hover:shadow-lg">
                    <CardHeader className="p-4 bg-gray-50 dark:bg-gray-900">
                      <div className="flex items-center space-x-2">
                        <div className="p-2 rounded-md bg-primary/10 text-primary">
                          <item.icon className="h-4 w-4" />
                        </div>
                        <CardTitle className="text-base">{item.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          {item.type === "lecture"
                            ? "Video Lecture"
                            : item.type === "notes"
                              ? "PDF Notes"
                              : "Reference Book"}
                        </Badge>
                        <span className="text-sm text-primary hover:underline">View</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
