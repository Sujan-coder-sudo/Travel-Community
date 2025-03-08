import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, UserRound, Users2 } from "lucide-react"

export default function TripSelectionPage() {
  const tripTypes = [
    {
      id: "community",
      title: "Community Trip",
      description: "Join pre-planned trips organized by others",
      icon: <Users className="h-12 w-12 mb-4 text-primary" />,
      href: "/trip-planning/community",
    },
    {
      id: "group",
      title: "Group Trip",
      description: "Plan a trip with friends or family",
      icon: <Users2 className="h-12 w-12 mb-4 text-primary" />,
      href: "/trip-planning/group",
    },
    {
      id: "solo",
      title: "Solo Trip",
      description: "Plan an individual trip",
      icon: <UserRound className="h-12 w-12 mb-4 text-primary" />,
      href: "/trip-planning/solo",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Choose Your Trip Type</h1>
        <p className="text-muted-foreground text-center mb-12">Select how you want to plan your journey</p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tripTypes.map((trip) => (
            <Link href={trip.href} key={trip.id} className="block">
              <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="text-center pb-2">
                  <div className="flex justify-center">{trip.icon}</div>
                  <CardTitle>{trip.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription>{trip.description}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

