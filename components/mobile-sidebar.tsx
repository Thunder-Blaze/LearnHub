"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BookOpen,
  Code,
  Cpu,
  Zap,
  Building2,
  FlaskRoundIcon as Flask,
  Stethoscope,
  Atom,
  GraduationCap,
  BookMarked,
  Video,
  FileText,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const branches = [
  {
    name: "Computer Science",
    icon: Code,
    slug: "computer-science",
  },
  {
    name: "Mechanical",
    icon: Cpu,
    slug: "mechanical",
  },
  {
    name: "Electrical",
    icon: Zap,
    slug: "electrical",
  },
  {
    name: "Civil",
    icon: Building2,
    slug: "civil",
  },
  {
    name: "Chemical",
    icon: Flask,
    slug: "chemical",
  },
  {
    name: "Biomedical",
    icon: Stethoscope,
    slug: "biomedical",
  },
  {
    name: "Physics",
    icon: Atom,
    slug: "physics",
  },
  {
    name: "Mathematics",
    icon: BookOpen,
    slug: "mathematics",
  },
]

const contentTypes = [
  {
    name: "Lectures",
    icon: Video,
    slug: "lectures",
  },
  {
    name: "Notes",
    icon: FileText,
    slug: "notes",
  },
  {
    name: "Books",
    icon: BookMarked,
    slug: "books",
  },
]

export default function MobileSidebar() {
  const pathname = usePathname()

  return (
    <ScrollArea className="h-full py-6">
      <div className="pl-1 pr-7">
        <div className="space-y-1">
          <h2 className="px-4 text-lg font-semibold tracking-tight">Browse</h2>
          <div className="space-y-1">
            <Button asChild variant={pathname === "/" ? "secondary" : "ghost"} className="w-full justify-start">
              <Link href="/">
                <GraduationCap className="mr-2 h-4 w-4" />
                All Courses
              </Link>
            </Button>
          </div>
        </div>

        <Accordion type="single" collapsible className="mt-6 w-full">
          <AccordionItem value="branches">
            <AccordionTrigger className="px-4 text-lg font-semibold">Branches</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-1 pl-2">
                {branches.map((branch) => (
                  <Button
                    key={branch.slug}
                    asChild
                    variant={pathname === `/branches/${branch.slug}` ? "secondary" : "ghost"}
                    className="w-full justify-start"
                  >
                    <Link href={`/branches/${branch.slug}`}>
                      <branch.icon className="mr-2 h-4 w-4" />
                      {branch.name}
                    </Link>
                  </Button>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="content-types">
            <AccordionTrigger className="px-4 text-lg font-semibold">Content Types</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-1 pl-2">
                {contentTypes.map((type) => (
                  <Button
                    key={type.slug}
                    asChild
                    variant={pathname === `/content/${type.slug}` ? "secondary" : "ghost"}
                    className="w-full justify-start"
                  >
                    <Link href={`/content/${type.slug}`}>
                      <type.icon className="mr-2 h-4 w-4" />
                      {type.name}
                    </Link>
                  </Button>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </ScrollArea>
  )
}
