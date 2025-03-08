"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BadgeIndianRupee, Car, Hotel, Utensils, Ticket, Shield, Accessibility } from "lucide-react"

export default function BudgetEstimationPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const tripType = searchParams.get("type") || "community"

  const [includeInsurance, setIncludeInsurance] = useState(true)
  const [includeAccessibility, setIncludeAccessibility] = useState(false)
  const [selectedActivities, setSelectedActivities] = useState<string[]>(["sightseeing"])

  // Mock budget data
  const budgetItems = {
    transportation: 8000,
    accommodation: 12000,
    food: 6000,
    activities: 4000,
    insurance: 2000,
    accessibility: 3000,
  }

  const handleActivityToggle = (activity: string) => {
    if (selectedActivities.includes(activity)) {
      setSelectedActivities(selectedActivities.filter((a) => a !== activity))
    } else {
      setSelectedActivities([...selectedActivities, activity])
    }
  }

  const calculateTotal = () => {
    let total = budgetItems.transportation + budgetItems.accommodation + budgetItems.food

    // Add activities cost based on selection
    total += selectedActivities.length * 1000

    // Add insurance if selected
    if (includeInsurance) {
      total += budgetItems.insurance
    }

    // Add accessibility services if selected
    if (includeAccessibility) {
      total += budgetItems.accessibility
    }

    return total
  }

  const handleConfirm = () => {
    router.push("/confirmation")
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Budget Estimation</h1>
        <p className="text-muted-foreground text-center mb-12">Review and customize your trip budget</p>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="budget" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="budget">Budget Breakdown</TabsTrigger>
              <TabsTrigger value="customize">Customize</TabsTrigger>
            </TabsList>

            <TabsContent value="budget">
              <Card>
                <CardHeader>
                  <CardTitle>Trip Budget</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Car className="h-5 w-5 text-primary" />
                        <span>Transportation</span>
                      </div>
                      <span className="font-medium">₹{budgetItems.transportation.toLocaleString()}</span>
                    </div>
                    <Separator />

                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Hotel className="h-5 w-5 text-primary" />
                        <span>Accommodation</span>
                      </div>
                      <span className="font-medium">₹{budgetItems.accommodation.toLocaleString()}</span>
                    </div>
                    <Separator />

                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Utensils className="h-5 w-5 text-primary" />
                        <span>Food & Beverages</span>
                      </div>
                      <span className="font-medium">₹{budgetItems.food.toLocaleString()}</span>
                    </div>
                    <Separator />

                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Ticket className="h-5 w-5 text-primary" />
                        <span>Activities ({selectedActivities.length})</span>
                      </div>
                      <span className="font-medium">₹{(selectedActivities.length * 1000).toLocaleString()}</span>
                    </div>
                    <Separator />

                    {includeInsurance && (
                      <>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <Shield className="h-5 w-5 text-primary" />
                            <span>Health Insurance</span>
                          </div>
                          <span className="font-medium">₹{budgetItems.insurance.toLocaleString()}</span>
                        </div>
                        <Separator />
                      </>
                    )}

                    {includeAccessibility && (
                      <>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <Accessibility className="h-5 w-5 text-primary" />
                            <span>Accessibility Services</span>
                          </div>
                          <span className="font-medium">₹{budgetItems.accessibility.toLocaleString()}</span>
                        </div>
                        <Separator />
                      </>
                    )}

                    <div className="flex justify-between items-center pt-2">
                      <div className="flex items-center gap-2">
                        <BadgeIndianRupee className="h-5 w-5 text-primary" />
                        <span className="font-bold">Total</span>
                      </div>
                      <span className="font-bold text-xl">₹{calculateTotal().toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" onClick={handleConfirm}>
                    Confirm and Proceed
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="customize">
              <Card>
                <CardHeader>
                  <CardTitle>Customize Your Package</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Activities */}
                  <div className="space-y-4">
                    <h3 className="font-medium">Activities</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { id: "sightseeing", label: "Sightseeing" },
                        { id: "adventure", label: "Adventure Activities" },
                        { id: "cultural", label: "Cultural Experiences" },
                        { id: "food", label: "Food Tours" },
                      ].map((activity) => (
                        <div key={activity.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={activity.id}
                            checked={selectedActivities.includes(activity.id)}
                            onCheckedChange={() => handleActivityToggle(activity.id)}
                          />
                          <Label htmlFor={activity.id}>{activity.label} (₹1,000)</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Insurance */}
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="insurance">Health Insurance</Label>
                      <p className="text-sm text-muted-foreground">Coverage for medical emergencies during your trip</p>
                    </div>
                    <Switch id="insurance" checked={includeInsurance} onCheckedChange={setIncludeInsurance} />
                  </div>

                  <Separator />

                  {/* Accessibility */}
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="accessibility">Accessibility Services</Label>
                      <p className="text-sm text-muted-foreground">Special assistance and accessible accommodations</p>
                    </div>
                    <Switch
                      id="accessibility"
                      checked={includeAccessibility}
                      onCheckedChange={setIncludeAccessibility}
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <div className="flex justify-between items-center w-full">
                    <span className="font-bold">Total</span>
                    <span className="font-bold text-xl">₹{calculateTotal().toLocaleString()}</span>
                  </div>
                  <Button className="w-full" onClick={handleConfirm}>
                    Confirm and Proceed
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

