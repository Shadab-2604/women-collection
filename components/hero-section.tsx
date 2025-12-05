import { MessageCircle, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_LINK = "https://wa.me/910000000000"

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-muted -z-10" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in-up">
            <span className="inline-block text-sm font-medium text-accent bg-accent/10 px-4 py-1.5 rounded-full border border-accent/20">
              New Collection 2025
            </span>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight text-balance">
              Elegance Designed for <span className="text-primary">Everyday Queens</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed text-pretty">
              Discover premium ethnic and western wear crafted to fit your style, mood, and moment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 rounded-full px-8 py-6 text-base shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
              >
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Explore Collection on WhatsApp
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary/30 text-primary hover:bg-primary/5 rounded-full px-8 py-6 text-base bg-transparent"
              >
                <a href="#lookbook">View Lookbook</a>
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-fade-in animation-delay-200">
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:max-w-lg">
              {/* Image container with decorative border */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-secondary rounded-3xl transform rotate-3" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/elegant-indian-woman-in-beautiful-ethnic-saree-dre.jpg"
                  alt="Elegant woman in premium ethnic wear"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl p-4 shadow-xl border border-border">
                <p className="text-sm font-medium text-muted-foreground">Starting from</p>
                <p className="text-2xl font-serif font-bold text-primary">₹1,499</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#categories" className="text-muted-foreground hover:text-primary transition-colors">
            <ChevronDown className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  )
}
