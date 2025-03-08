import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function WelcomePage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          filter: "brightness(0.7)",
        }}
      />

      {/* Content */}
      <div className="z-10 text-center px-4 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Ghumakkad</h1>
        <p className="text-xl md:text-2xl text-white mb-8">Plan Your Journey, Your Way</p>
        <Link href="/auth">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  )
}

