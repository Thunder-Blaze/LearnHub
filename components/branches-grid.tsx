import Link from "next/link"
import { Code, Cpu, Zap, Building2, FlaskRoundIcon as Flask, Stethoscope, BookOpen, Atom } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const branches = [
  {
    name: "Computer Science",
    icon: Code,
    description: "Programming, algorithms, data structures, and software engineering.",
    slug: "computer-science",
  },
  {
    name: "Mechanical Engineering",
    icon: Cpu,
    description: "Thermodynamics, mechanics, manufacturing, and machine design.",
    slug: "mechanical",
  },
  {
    name: "Electrical Engineering",
    icon: Zap,
    description: "Circuits, electronics, power systems, and control systems.",
    slug: "electrical",
  },
  {
    name: "Civil Engineering",
    icon: Building2,
    description: "Structures, transportation, geotechnical, and environmental engineering.",
    slug: "civil",
  },
  {
    name: "Chemical Engineering",
    icon: Flask,
    description: "Process design, thermodynamics, and reaction engineering.",
    slug: "chemical",
  },
  {
    name: "Biomedical Engineering",
    icon: Stethoscope,
    description: "Medical devices, biomaterials, and biomedical signal processing.",
    slug: "biomedical",
  },
  {
    name: "Physics",
    icon: Atom,
    description: "Mechanics, electromagnetism, quantum physics, and relativity.",
    slug: "physics",
  },
  {
    name: "Mathematics",
    icon: BookOpen,
    description: "Calculus, algebra, statistics, and numerical methods.",
    slug: "mathematics",
  },
]

export default function BranchesGrid() {
  return (
    <>
      {branches.map((branch) => (
        <Link key={branch.slug} href={`/branches/${branch.slug}`} className="group">
          <Card className="overflow-hidden transition-all hover:shadow-lg">
            <CardHeader className="p-4 bg-gray-50 dark:bg-gray-900">
              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-md bg-primary/10 text-primary">
                  <branch.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">{branch.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">{branch.description}</p>
            </CardContent>
            <CardFooter className="p-4 border-t bg-gray-50 dark:bg-gray-900">
              <span className="text-sm text-primary group-hover:underline">Explore materials</span>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </>
  )
}
