"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, Check, Download, Mail, MessageSquare, RefreshCcw } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function ConfirmationPage() {
  const [showRefundInfo, setShowRefundInfo] = useState(false)

  // Mock booking data
  const bookingData = {
    bookingId: "GHM" + Math.floor(100000 + Math.random() * 900000),
    destination: "Himachal Pradesh",
    startDate: "2023-12-15",
    endDate: "2023-12-22",
    travelers: 1,
    totalAmount: 32000,
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <div className="inline-flex items-center justify-center p-4 bg-green-100 dark:bg-green-900 rounded-full mb-4">
            <Check className="h-8 w-8 text-green-600 dark:text-green-300" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Booking Confirmed!</h1>
          <p className="text-muted-foreground">
            Your adventure is all set. Check your email for the confirmation details.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="ticket" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="ticket">Ticket Details</TabsTrigger>
              <TabsTrigger value="refund">Refund Policy</TabsTrigger>
            </TabsList>

            <TabsContent value="ticket">
              <Card>
                <CardHeader>
                  <CardTitle>Booking Confirmation</CardTitle>
                  <CardDescription>Booking ID: {bookingData.bookingId}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Destination</p>
                        <p className="font-medium">{bookingData.destination}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Duration</p>
                        <p className="font-medium">
                          {new Date(bookingData.startDate).toLocaleDateString()} -{" "}
                          {new Date(bookingData.endDate).toLocaleDateString()}
                        </p>
                      </div>
                    </div>

                    <Separator />

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Travelers</p>
                        <p className="font-medium">{bookingData.travelers}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Total Amount</p>
                        <p className="font-medium">₹{bookingData.totalAmount.toLocaleString()}</p>
                      </div>
                    </div>

                    <Alert>
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Important</AlertTitle>
                      <AlertDescription>
                        Please carry a printed copy or digital version of this ticket during your journey.
                      </AlertDescription>
                    </Alert>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <Button className="w-full flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      Download Ticket
                    </Button>
                    <Button variant="outline" className="w-full flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email Ticket
                    </Button>
                  </div>
                  <Button variant="outline" className="w-full flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Contact Support
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="refund">
              <Card>
                <CardHeader>
                  <CardTitle>Refund Policy</CardTitle>
                  <CardDescription>Terms and conditions for cancellations and refunds</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium">Cancellation Timeline</p>
                        <p className="text-sm text-muted-foreground">Refund Percentage</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">Refund Amount</p>
                        <p className="text-sm text-muted-foreground">
                          Based on ₹{bookingData.totalAmount.toLocaleString()}
                        </p>
                      </div>
                    </div>

                    <Separator />

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p>More than 30 days before</p>
                        <p className="text-sm text-muted-foreground">90% refund</p>
                      </div>
                      <div className="text-right">
                        <p>₹{(bookingData.totalAmount * 0.9).toLocaleString()}</p>
                      </div>
                    </div>

                    <Separator />

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p>15-30 days before</p>
                        <p className="text-sm text-muted-foreground">70% refund</p>
                      </div>
                      <div className="text-right">
                        <p>₹{(bookingData.totalAmount * 0.7).toLocaleString()}</p>
                      </div>
                    </div>

                    <Separator />

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p>7-14 days before</p>
                        <p className="text-sm text-muted-foreground">50% refund</p>
                      </div>
                      <div className="text-right">
                        <p>₹{(bookingData.totalAmount * 0.5).toLocaleString()}</p>
                      </div>
                    </div>

                    <Separator />

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p>Less than 7 days before</p>
                        <p className="text-sm text-muted-foreground">No refund</p>
                      </div>
                      <div className="text-right">
                        <p>₹0</p>
                      </div>
                    </div>

                    <Alert>
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Special Circumstances</AlertTitle>
                      <AlertDescription>
                        In case of medical emergencies or natural disasters, please contact our support team for special
                        consideration.
                      </AlertDescription>
                    </Alert>

                    {showRefundInfo && (
                      <div className="bg-muted p-4 rounded-lg">
                        <h4 className="font-medium mb-2">How to Request a Refund</h4>
                        <ol className="list-decimal pl-5 space-y-1">
                          <li>Log in to your Ghumakkad account</li>
                          <li>Navigate to "My Bookings"</li>
                          <li>Select the booking you wish to cancel</li>
                          <li>Click on "Request Cancellation"</li>
                          <li>Follow the prompts to complete the process</li>
                        </ol>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <Button
                    variant="outline"
                    className="w-full flex items-center gap-2"
                    onClick={() => setShowRefundInfo(!showRefundInfo)}
                  >
                    <RefreshCcw className="h-4 w-4" />
                    {showRefundInfo ? "Hide Refund Process" : "Show Refund Process"}
                  </Button>
                  <Link href="/" className="w-full">
                    <Button className="w-full">Return to Home</Button>
                  </Link>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

