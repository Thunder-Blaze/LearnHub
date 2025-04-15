import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function TopicLoading() {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-6 w-20" />
        </div>
        <Skeleton className="h-10 w-3/4 mb-2" />
        <Skeleton className="h-5 w-full" />
      </div>

      <div className="mb-8">
        <Skeleton className="h-10 w-full mb-8" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <Card key={index} className="overflow-hidden">
              <Skeleton className="aspect-video w-full" />
              <CardHeader className="p-4">
                <Skeleton className="h-5 w-3/4" />
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-9 w-full" />
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  )
}
