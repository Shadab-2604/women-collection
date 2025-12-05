"use client"

import { useState } from "react"
import { X, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_LINK = "https://wa.me/910000000000"

const lookbookImages = [
  {
    src: "/elegant-woman-ethnic-wear-photoshoot.jpg",
    alt: "Ethnic wear collection",
    span: "row-span-2",
  },
  {
    src: "/stylish-woman-western-dress-fashion.jpg",
    alt: "Western dress style",
    span: "",
  },
  {
    src: "/bridal-lehenga-indian-wedding-fashion.jpg",
    alt: "Bridal collection",
    span: "",
  },
  {
    src: "/party-wear-gown-glamorous.jpg",
    alt: "Party wear gown",
    span: "col-span-1 md:col-span-2",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Casual kurti",
    span: "",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Traditional saree",
    span: "",
  },
]

export default function LookbookSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="lookbook" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Get Inspired</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">Style Lookbook</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Browse our curated collection of looks and find your next favorite outfit.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {lookbookImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image.src)}
              className={`group relative overflow-hidden rounded-xl ${image.span} cursor-pointer`}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover min-h-[200px] transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 flex items-center justify-center">
                <span className="text-primary-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/80 px-4 py-2 rounded-full text-sm">
                  View
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 rounded-full px-8 py-6 text-base shadow-lg shadow-primary/20"
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Send Me These Looks on WhatsApp
            </a>
          </Button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-foreground/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-primary-foreground hover:text-accent transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage || "/placeholder.svg"}
            alt="Lookbook image"
            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
