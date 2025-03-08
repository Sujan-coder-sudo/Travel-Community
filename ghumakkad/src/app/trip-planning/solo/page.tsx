"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin, Plus, Car, Bus, Train, Plane, Hotel, MessageSquare, Compass } from "lucide-react"

export default function SoloTripPage() {
  const router = useRouter()
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [transportation, setTransportation] = useState("")
  const [stops, setStops] = useState<string[]>([])
  const [newStop, setNewStop] = useState("")

  const handleAddStop = () => {
    if (newStop.trim()) {
      setStops([...stops, newStop.trim()])
      setNewStop("")
    }
  }

  const handleContinue = () => {
    router.push("/budget-estimation?type=solo")
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Plan Your Solo Adventure</h1>
        <p className="text-muted-foreground text-center mb-12">Create a personalized journey just for you</p>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="planning" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="planning">Trip Planning</TabsTrigger>
              <TabsTrigger value="hotels">Hotels</TabsTrigger>
              <TabsTrigger value="ai">AI Suggestions</TabsTrigger>
            </TabsList>

            <TabsContent value="planning">
              <Card>
                <CardHeader>
                  <CardTitle>Solo Trip Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Date Selection */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="start-date">Start Date</Label>
                      <Input
                        id="start-date"
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="end-date">End Date</Label>
                      <Input id="end-date" type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                    </div>
                  </div>

                  {/* Transportation */}
                  <div className="space-y-2">
                    <Label htmlFor="transportation">Mode of Transportation</Label>
                    <Select value={transportation} onValueChange={setTransportation}>
                      <SelectTrigger id="transportation">
                        <SelectValue placeholder="Select transportation" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="car">
                          <div className="flex items-center gap-2">
                            <Car className="h-4 w-4" /> Car
                          </div>
                        </SelectItem>
                        <SelectItem value="bus">
                          <div className="flex items-center gap-2">
                            <Bus className="h-4 w-4" /> Bus
                          </div>
                        </SelectItem>
                        <SelectItem value="train">
                          <div className="flex items-center gap-2">
                            <Train className="h-4 w-4" /> Train
                          </div>
                        </SelectItem>
                        <SelectItem value="flight">
                          <div className="flex items-center gap-2">
                            <Plane className="h-4 w-4" /> Flight
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Map Integration Placeholder */}
                  <div className="border rounded-md p-4 h-64 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                    <div className="text-center">
                      <MapPin className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-muted-foreground">Map Integration (Google Maps API)</p>
                    </div>
                  </div>

                  {/* Drop Points */}
                  <div className="space-y-4">
                    <Label>Drop Points (Stops)</Label>
                    <div className="flex gap-2">
                      <Input placeholder="Add a stop" value={newStop} onChange={(e) => setNewStop(e.target.value)} />
                      <Button variant="outline" size="icon" onClick={handleAddStop}>
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>

                    {stops.length > 0 && (
                      <div className="space-y-2">
                        {stops.map((stop, index) => (
                          <div key={index} className="flex items-center gap-2 p-2 border rounded-md">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span>{stop}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <Button className="w-full" onClick={handleContinue}>
                    Continue to Hotels
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="hotels">
              <Card>
                <CardHeader>
                  <CardTitle>Solo-Friendly Accommodations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Hotel Search */}
                    <div className="space-y-2">
                      <Label htmlFor="hotel-search">Search Accommodations</Label>
                      <div className="flex gap-2">
                        <Input id="hotel-search" placeholder="City or hotel name" />
                        <Button variant="outline">Search</Button>
                      </div>
                    </div>

                    {/* Hotel Results Placeholder */}
                    <div className="space-y-4">
                      {[1, 2, 3].map((hotel) => (
                        <div key={hotel} className="border rounded-md p-4 flex flex-col md:flex-row gap-4">
                          <div className="bg-gray-200 dark:bg-gray-700 rounded-md h-24 w-full md:w-32 flex items-center justify-center">
                            <Hotel className="h-8 w-8 text-muted-foreground" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium">Solo Traveler Hostel {hotel}</h3>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <MapPin className="h-3 w-3" /> City {hotel}
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                              <div className="flex">
                                {Array(4)
                                  .fill(0)
                                  .map((_, i) => (
                                    <svg
                                      key={i}
                                      className="w-4 h-4 text-yellow-500"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                    >
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                  ))}
                              </div>
                              <span className="text-sm">4.0 (120 reviews)</span>
                            </div>
                          </div>
                          <div className="flex flex-col items-end justify-between">
                            <div className="text-right">
                              <p className="font-bold">₹{2000 + hotel * 500}/night</p>
                              <p className="text-sm text-muted-foreground">Taxes extra</p>
                            </div>
                            <Button size="sm">Book Now</Button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Button className="w-full" onClick={handleContinue}>
                      Continue to Budget
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ai">
              <Card>
                <CardHeader>
                  <CardTitle>Solo Travel Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* AI Chat Interface */}
                    <div className="border rounded-md p-4 h-80 flex flex-col">
                      <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                        <div className="bg-primary/10 rounded-lg p-3 max-w-[80%]">
                          <p className="text-sm">
                            Hello! I'm your AI solo travel assistant. How can I help with your adventure?
                          </p>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 max-w-[80%] ml-auto">
                          <p className="text-sm">I'm looking for safe solo travel destinations in India.</p>
                        </div>
                        <div className="bg-primary/10 rounded-lg p-3 max-w-[80%]">
                          <p className="text-sm">Here are some safe and solo-friendly destinations in India:</p>
                          <ul className="list-disc pl-5 text-sm mt-2">
                            <li>Pondicherry - French colonial charm with safe beaches</li>
                            <li>Udaipur - Beautiful lake city with friendly locals</li>
                            <li>Sikkim - Peaceful mountain state with excellent infrastructure</li>
                            <li>Goa - Popular with solo travelers, well-connected and safe</li>
                          </ul>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Input placeholder="Ask for solo travel tips..." />
                        <Button variant="outline" size="icon">
                          <MessageSquare className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Solo Travel Tips */}
                    <div className="space-y-4">
                      <h3 className="font-medium">Solo Travel Tips</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { title: "Safety First", icon: <Compass className="h-8 w-8 text-primary" /> },
                          { title: "Budget Hacks", icon: <Calendar className="h-8 w-8 text-primary" /> },
                        ].map((item, index) => (
                          <Card key={index} className="overflow-hidden">
                            <CardContent className="p-4 flex items-center gap-4">
                              <div className="bg-primary/10 p-3 rounded-full">{item.icon}</div>
                              <div>
                                <h4 className="font-medium mb-1">{item.title}</h4>
                                <p className="text-sm text-muted-foreground">Click to view tips</p>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full" onClick={handleContinue}>
                      Continue to Budget
                    </Button>
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

