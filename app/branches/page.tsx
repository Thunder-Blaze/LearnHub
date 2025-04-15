import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const branches = [
  {
    id: "cse",
    name: "Computer Science & Engineering",
    description: "Explore computer science fundamentals, programming, algorithms, and software development.",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    id: "ece",
    name: "Electronics & Communication",
    description: "Learn about electronic circuits, communication systems, and signal processing.",
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    id: "mech",
    name: "Mechanical Engineering",
    description: "Study mechanical systems, thermodynamics, and manufacturing processes.",
    color: "bg-red-500/10 text-red-500",
  },
  {
    id: "civil",
    name: "Civil Engineering",
    description: "Explore structural design, construction management, and infrastructure development.",
    color: "bg-green-500/10 text-green-500",
  },
  {
    id: "eee",
    name: "Electrical & Electronics",
    description: "Learn about power systems, electrical machines, and control systems.",
    color: "bg-yellow-500/10 text-yellow-500",
  },
  {
    id: "it",
    name: "Information Technology",
    description: "Study information systems, network security, and database management.",
    color: "bg-indigo-500/10 text-indigo-500",
  },
]

export default function BranchesPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Academic Branches</h1>
        <p className="text-muted-foreground">
          Select your branch to access relevant study materials and resources
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {branches.map((branch) => (
          <Link href={`/branches/${branch.id}`} key={branch.id}>
            <Card className="h-full transition-all hover:shadow-lg hover:scale-[1.02]">
              <CardHeader>
                <div className={`w-12 h-12 rounded-full ${branch.color} flex items-center justify-center mb-4`}>
                  <span className="text-2xl font-bold">{branch.name[0]}</span>
                </div>
                <CardTitle>{branch.name}</CardTitle>
                <CardDescription>{branch.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  Click to explore {branch.name} resources
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
} 