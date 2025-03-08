"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, Bus, Train, Plane, Car } from "lucide-react"

export default function CommunityTripPage() {
  const router = useRouter()
  const [month, setMonth] = useState<string>("")
  const [destination, setDestination] = useState<string>("")
  const [duration, setDuration] = useState<string>("")

  // Mock data for trip packages
  const tripPackages = [
    {
      id: 1,
      title: "Himalayan Adventure",
      destination: "Himachal Pradesh",
      month: "June",
      duration: "7 days",
      cost: "₹25,000",
      transportation: "Bus",
      image: "/placeholder.svg?height=200&width=400",
      services: ["Accommodation", "Meals", "Guide", "Activities"],
    },
    {
      id: 2,
      title: "Goa Beach Retreat",
      destination: "Goa",
      month: "December",
      duration: "5 days",
      cost: "₹18,000",
      transportation: "Flight",
      image: "/placeholder.svg?height=200&width=400",
      services: ["Accommodation", "Breakfast", "Beach Activities"],
    },
    {
      id: 3,
      title: "Kerala Backwaters",
      destination: "Kerala",
      month: "August",
      duration: "6 days",
      cost: "₹22,000",
      transportation: "Train",
      image: "/placeholder.svg?height=200&width=400",
      services: ["Accommodation", "Meals", "Houseboat Stay", "Ayurvedic Spa"],
    },
  ]

  // Filter trips based on selected filters
  const filteredTrips = tripPackages.filter((trip) => {
    return (
      (!month || trip.month === month) &&
      (!destination || trip.destination === destination) &&
      (!duration || trip.duration === duration)
    )
  })

  const handleBookNow = (tripId: number) => {
    router.push(`/budget-estimation?tripId=${tripId}&type=community`)
  }

  const getTransportIcon = (transport: string) => {
    switch (transport.toLowerCase()) {
      case "bus":
        return <Bus className="h-4 w-4" />
      case "train":
        return <Train className="h-4 w-4" />
      case "flight":
        return <Plane className="h-4 w-4" />
      case "car":
        return <Car className="h-4 w-4" />
      default:
        return <Bus className="h-4 w-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Community Trips</h1>
        <p className="text-muted-foreground text-center mb-12">Join pre-planned trips organized by our community</p>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
          <Select value={month} onValueChange={setMonth}>
            <SelectTrigger>
              <SelectValue placeholder="Select Month" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Months</SelectItem>
              <SelectItem value="June">June</SelectItem>
              <SelectItem value="August">August</SelectItem>
              <SelectItem value="December">December</SelectItem>
            </SelectContent>
          </Select>

          <Select value={destination} onValueChange={setDestination}>
            <SelectTrigger>
              <SelectValue placeholder="Select Destination" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Destinations</SelectItem>
              <SelectItem value="Himachal Pradesh">Himachal Pradesh</SelectItem>
              <SelectItem value="Goa">Goa</SelectItem>
              <SelectItem value="Kerala">Kerala</SelectItem>
            </SelectContent>
          </Select>

          <Select value={duration} onValueChange={setDuration}>
            <SelectTrigger>
              <SelectValue placeholder="Select Duration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Durations</SelectItem>
              <SelectItem value="5 days">5 days</SelectItem>
              <SelectItem value="6 days">6 days</SelectItem>
              <SelectItem value="7 days">7 days</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Trip Packages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredTrips.map((trip) => (
            <Card key={trip.id} className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src={trip.image || "/placeholder.svg"} alt={trip.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{trip.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="outline" className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> {trip.destination}
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> {trip.month}
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {trip.duration}
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    {getTransportIcon(trip.transportation)} {trip.transportation}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-bold text-lg mb-2">{trip.cost}</p>
                <div className="flex flex-wrap gap-1">
                  {trip.services.map((service, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {service}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" onClick={() => handleBookNow(trip.id)}>
                  Book Now
                </Button>
              </CardFooter>
            </Card>
          ))}

          {filteredTrips.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">
                No trips found matching your filters. Try adjusting your criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

