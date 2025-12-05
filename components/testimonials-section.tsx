"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    text: "Absolutely in love with my Anarkali set! The fabric quality is amazing and the fit was perfect. Will definitely order again!",
    rating: 5,
  },
  {
    name: "Ananya Patel",
    location: "Ahmedabad",
    text: "The WhatsApp support is incredible. They helped me choose the perfect saree for my sister's wedding. Everyone loved it!",
    rating: 5,
  },
  {
    name: "Sneha Reddy",
    location: "Hyderabad",
    text: "Finally found a brand that understands style AND comfort. Their kurtis are my everyday go-to now. Simply beautiful!",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Happy Customers</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Loved by Our Queens
          </h2>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 bg-card rounded-full shadow-lg flex items-center justify-center text-foreground hover:text-primary hover:bg-secondary transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 bg-card rounded-full shadow-lg flex items-center justify-center text-foreground hover:text-primary hover:bg-secondary transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Testimonial Card */}
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-lg border border-border text-center">
            <Quote className="w-12 h-12 text-accent/40 mx-auto mb-6" />

            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 font-medium">
              "{testimonials[currentIndex].text}"
            </p>

            {/* Rating */}
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-accent fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <p className="font-serif text-lg font-semibold text-foreground">{testimonials[currentIndex].name}</p>
            <p className="text-sm text-muted-foreground">{testimonials[currentIndex].location}</p>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-border"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
