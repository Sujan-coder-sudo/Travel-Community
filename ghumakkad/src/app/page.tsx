"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const travelImages = [
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2000&q=80", // Road trip
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=2000&q=80", // Mountain landscape
  "https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?auto=format&fit=crop&w=2000&q=80", // Beach sunset
  "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=2000&q=80", // Ancient temple
  "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=2000&q=80", // Italian coast
];

export default function WelcomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === travelImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Changed to 5 seconds for smoother transitions

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Images */}
      {travelImages.map((image, index) => (
        <div
          key={image}
          className="absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${image})`,
            opacity: currentImageIndex === index ? 1 : 0,
          }}
        />
      ))}
      
      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-black/40" />

      {/* Content */}
      <div className="z-10 text-center px-4 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-wide">
          Ghumakkad
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 font-light">
          Discover the World, One Journey at a Time
        </p>
        <Link href="/auth">
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-white/90 px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
          >
            Start Your Adventure
          </Button>
        </Link>
      </div>

      {/* Contact Details */}
      <div className="z-10 text-white absolute bottom-8 text-center">
        <h3 className="text-xl font-semibold mb-2">Connect With Us</h3>
        <p className="mb-1 text-gray-200">contact@ghummakkad.com</p>
        <p className="mb-1 text-gray-200">+91 123-456-7890</p>
        <div className="flex gap-6 justify-center mt-4">
          <a href="#" className="text-white hover:text-primary transition-colors duration-300 hover:scale-110 transform">
            Twitter
          </a>
          <a href="#" className="text-white hover:text-primary transition-colors duration-300 hover:scale-110 transform">
            Instagram
          </a>
          <a href="#" className="text-white hover:text-primary transition-colors duration-300 hover:scale-110 transform">
            Facebook
          </a>
        </div>
      </div>
    </div>
  );
}