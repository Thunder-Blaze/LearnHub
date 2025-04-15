import { notFound } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Video, BookOpen, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

// This would come from your database in a real app
const topicsData = {
  "data-structures-and-algorithms": {
    title: "Data Structures and Algorithms",
    branch: "Computer Science",
    year: "Second Year",
    description:
      "Learn about fundamental data structures like arrays, linked lists, trees, and graphs, as well as algorithms for searching, sorting, and graph traversal.",
    videos: [
      {
        title: "Introduction to Data Structures",
        duration: "45:20",
        url: "https://example.com/video1",
        thumbnail: "/placeholder.svg?height=200&width=350",
      },
      {
        title: "Arrays and Linked Lists",
        duration: "52:15",
        url: "https://example.com/video2",
        thumbnail: "/placeholder.svg?height=200&width=350",
      },
      {
        title: "Trees and Graphs",
        duration: "48:30",
        url: "https://example.com/video3",
        thumbnail: "/placeholder.svg?height=200&width=350",
      },
    ],
    notes: [
      {
        title: "Data Structures Fundamentals",
        pages: 24,
        fileSize: "2.4 MB",
        url: "https://example.com/notes1",
      },
      {
        title: "Algorithm Analysis and Big O Notation",
        pages: 18,
        fileSize: "1.8 MB",
        url: "https://example.com/notes2",
      },
      {
        title: "Sorting Algorithms Explained",
        pages: 32,
        fileSize: "3.1 MB",
        url: "https://example.com/notes3",
      },
    ],
    quizzes: [
      {
        title: "Data Structures Basics",
        questions: 15,
        timeLimit: "20 minutes",
        url: "https://example.com/quiz1",
      },
      {
        title: "Algorithm Complexity",
        questions: 10,
        timeLimit: "15 minutes",
        url: "https://example.com/quiz2",
      },
    ],
  },
  thermodynamics: {
    title: "Thermodynamics",
    branch: "Mechanical Engineering",
    year: "Second Year",
    description:
      "Study of heat, work, energy, and the principles governing energy conversion, including the laws of thermodynamics and their applications.",
    videos: [
      {
        title: "Introduction to Thermodynamics",
        duration: "50:10",
        url: "https://example.com/video1",
        thumbnail: "/placeholder.svg?height=200&width=350",
      },
      {
        title: "First Law of Thermodynamics",
        duration: "48:25",
        url: "https://example.com/video2",
        thumbnail: "/placeholder.svg?height=200&width=350",
      },
    ],
    notes: [
      {
        title: "Thermodynamics Principles",
        pages: 30,
        fileSize: "3.2 MB",
        url: "https://example.com/notes1",
      },
      {
        title: "Entropy and the Second Law",
        pages: 22,
        fileSize: "2.5 MB",
        url: "https://example.com/notes2",
      },
    ],
    quizzes: [
      {
        title: "Thermodynamics Laws",
        questions: 20,
        timeLimit: "25 minutes",
        url: "https://example.com/quiz1",
      },
    ],
  },
  "electric-circuits": {
    title: "Electric Circuits",
    branch: "Electrical Engineering",
    year: "First Year",
    description:
      "Study of electrical networks, circuit analysis techniques, and the behavior of passive and active components in DC and AC circuits.",
    videos: [
      {
        title: "Introduction to Circuit Analysis",
        duration: "42:15",
        url: "https://example.com/video1",
        thumbnail: "/placeholder.svg?height=200&width=350",
      },
      {
        title: "Kirchhoff's Laws",
        duration: "38:50",
        url: "https://example.com/video2",
        thumbnail: "/placeholder.svg?height=200&width=350",
      },
    ],
    notes: [
      {
        title: "Basic Circuit Elements",
        pages: 26,
        fileSize: "2.8 MB",
        url: "https://example.com/notes1",
      },
      {
        title: "AC Circuit Analysis",
        pages: 34,
        fileSize: "3.5 MB",
        url: "https://example.com/notes2",
      },
    ],
    quizzes: [
      {
        title: "DC Circuits",
        questions: 15,
        timeLimit: "20 minutes",
        url: "https://example.com/quiz1",
      },
    ],
  },
  // Add more topics as needed
}

export default function TopicPage({ params }: { params: { branch: string; topic: string } }) {
  const topic = topicsData[params.topic as keyof typeof topicsData]

  if (!topic) {
    notFound()
  }

  return (
    <div className="container py-10">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="outline">{topic.branch}</Badge>
          <Badge variant="outline">{topic.year}</Badge>
        </div>
        <h1 className="text-3xl font-bold mb-2">{topic.title}</h1>
        <p className="text-muted-foreground">{topic.description}</p>
      </div>

      <Tabs defaultValue="videos" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="videos">
            <Video className="mr-2 h-4 w-4" />
            Video Lectures
          </TabsTrigger>
          <TabsTrigger value="notes">
            <FileText className="mr-2 h-4 w-4" />
            Lecture Notes
          </TabsTrigger>
          <TabsTrigger value="quizzes">
            <BookOpen className="mr-2 h-4 w-4" />
            Quizzes & Practice
          </TabsTrigger>
        </TabsList>

        {/* Videos Tab */}
        <TabsContent value="videos">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topic.videos.map((video, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video relative">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Button variant="secondary">
                      <Video className="mr-2 h-4 w-4" />
                      Watch Video
                    </Button>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-base">{video.title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Notes Tab */}
        <TabsContent value="notes">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topic.notes.map((note, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="p-4">
                  <CardTitle className="text-base">{note.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="flex justify-between text-sm text-muted-foreground mb-4">
                    <span>{note.pages} pages</span>
                    <span>{note.fileSize}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Button>
                    <Button variant="outline" className="w-full">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Online
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Quizzes Tab */}
        <TabsContent value="quizzes">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topic.quizzes.map((quiz, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="p-4">
                  <CardTitle className="text-base">{quiz.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="flex justify-between text-sm text-muted-foreground mb-4">
                    <span>{quiz.questions} questions</span>
                    <span>{quiz.timeLimit}</span>
                  </div>
                  <Button className="w-full">Start Quiz</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
