import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Award, Calendar, Users, BarChart3, GraduationCap } from "lucide-react"

// Mock student data - in a real app, this would come from a database
const studentData = {
  name: "Alex Johnson",
  id: "STU2023001",
  department: "Computer Science",
  year: "Third Year",
  email: "alex.johnson@university.edu",
  profileImage: "https://i.pinimg.com/736x/f3/58/73/f3587343df2a97bf6f738bc33547c83d.jpg",
  events: [
    { name: "Tech Symposium 2023", role: "Participant", date: "Oct 15, 2023" },
    { name: "Hackathon 2023", role: "Team Leader", date: "Sep 5, 2023" },
    { name: "AI Workshop", role: "Volunteer", date: "Aug 20, 2023" },
    { name: "Career Fair", role: "Attendee", date: "Jul 10, 2023" },
  ],
  clubs: [
    { name: "Coding Club", role: "Member", status: "Active" },
    { name: "Robotics Society", role: "Secretary", status: "Active" },
    { name: "Photography Club", role: "Member", status: "Inactive" },
  ],
  attendance: {
    overall: 87,
    subjects: [
      { name: "Data Structures", percentage: 92 },
      { name: "Computer Networks", percentage: 85 },
      { name: "Operating Systems", percentage: 78 },
      { name: "Database Systems", percentage: 90 },
    ],
  },
  performance: {
    cgpa: 3.8,
    currentSemesterGPA: 3.9,
    completedCourses: 24,
    ongoingCourses: 5,
    certifications: [
      { name: "AWS Certified Developer", issuer: "Amazon", date: "Jun 2023" },
      { name: "Machine Learning Specialization", issuer: "Coursera", date: "Mar 2023" },
    ],
    skills: ["Python", "JavaScript", "React", "Node.js", "SQL", "Data Structures", "Algorithms"],
  },
}

export default function ProfilePage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Student Profile</h1>

      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6">
        {/* Profile Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="relative w-32 h-32 rounded-full overflow-hidden">
                  <img
                    src={studentData.profileImage || "/placeholder.svg"}
                    alt={studentData.name}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <CardTitle>{studentData.name}</CardTitle>
              <CardDescription>{studentData.id}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <GraduationCap className="mr-2 h-4 w-4 opacity-70" />
                  <span className="text-sm">{studentData.department}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4 opacity-70" />
                  <span className="text-sm">{studentData.year}</span>
                </div>
                <div className="flex items-center">
                  <BarChart3 className="mr-2 h-4 w-4 opacity-70" />
                  <span className="text-sm">CGPA: {studentData.performance.cgpa}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="w-full">
                <div className="text-xs text-muted-foreground mb-1">Course Completion</div>
                <Progress
                  value={
                    (studentData.performance.completedCourses /
                      (studentData.performance.completedCourses + studentData.performance.ongoingCourses)) *
                    100
                  }
                  className="h-2"
                />
              </div>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {studentData.performance.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div>
          <Tabs defaultValue="performance" className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="attendance">Attendance</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="clubs">Clubs</TabsTrigger>
            </TabsList>

            {/* Performance Tab */}
            <TabsContent value="performance">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Academic Performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>CGPA</span>
                        <span className="font-bold">{studentData.performance.cgpa}/4.0</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Current Semester GPA</span>
                        <span className="font-bold">{studentData.performance.currentSemesterGPA}/4.0</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Completed Courses</span>
                        <span className="font-bold">{studentData.performance.completedCourses}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Ongoing Courses</span>
                        <span className="font-bold">{studentData.performance.ongoingCourses}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Certifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {studentData.performance.certifications.map((cert, index) => (
                        <div key={index} className="border-b pb-3 last:border-0 last:pb-0">
                          <div className="font-medium">{cert.name}</div>
                          <div className="text-sm text-muted-foreground flex justify-between">
                            <span>{cert.issuer}</span>
                            <span>{cert.date}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Attendance Tab */}
            <TabsContent value="attendance">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Attendance Summary</CardTitle>
                  <CardDescription>Overall attendance: {studentData.attendance.overall}%</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {studentData.attendance.subjects.map((subject, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">{subject.name}</span>
                          <span>{subject.percentage}%</span>
                        </div>
                        <Progress value={subject.percentage} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Events Tab */}
            <TabsContent value="events">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Event Participation</CardTitle>
                  <CardDescription>Events attended or organized</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {studentData.events.map((event, index) => (
                      <div key={index} className="flex items-start space-x-4 border-b pb-4 last:border-0 last:pb-0">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Award className="h-5 w-5 text-primary" />
                        </div>
                        <div className="space-y-1">
                          <div className="font-medium">{event.name}</div>
                          <div className="text-sm text-muted-foreground flex items-center justify-between">
                            <span>{event.role}</span>
                            <span>{event.date}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Clubs Tab */}
            <TabsContent value="clubs">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Club Memberships</CardTitle>
                  <CardDescription>Clubs joined: {studentData.clubs.length}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {studentData.clubs.map((club, index) => (
                      <div key={index} className="flex items-start space-x-4 border-b pb-4 last:border-0 last:pb-0">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <div className="space-y-1 flex-1">
                          <div className="font-medium">{club.name}</div>
                          <div className="text-sm text-muted-foreground flex items-center justify-between">
                            <span>{club.role}</span>
                            <Badge variant={club.status === "Active" ? "default" : "secondary"}>{club.status}</Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
