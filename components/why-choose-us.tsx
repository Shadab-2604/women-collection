import { Sparkles, Ruler, MessageSquare, Truck } from "lucide-react"

const highlights = [
  {
    icon: Sparkles,
    title: "Premium Quality Fabrics",
    description: "Carefully sourced materials for comfort and durability",
  },
  {
    icon: Ruler,
    title: "Custom Fitting on Request",
    description: "Get the perfect fit tailored just for you",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Personal Styling",
    description: "Expert styling advice at your fingertips",
  },
  {
    icon: Truck,
    title: "COD Available",
    description: "Cash on delivery in select areas",
  },
]

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Our Promise</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Why Ma Women's Collection?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Brand Story */}
          <div className="animate-fade-in-up">
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Crafted with Love, Designed for You
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Ma Women's Collection is a curated line of women's wear designed to celebrate comfort, elegance, and
                confidence.
              </p>
              <p>
                From everyday staples to statement pieces, each design is crafted with love and attention to detail. We
                believe every woman deserves to feel beautiful, powerful, and uniquely herself.
              </p>
              <p>
                Our journey began with a simple mission: to bring premium fashion to modern women without compromising
                on quality or style. Today, we're proud to dress thousands of queens across India.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6 animate-fade-in-up animation-delay-200">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="bg-secondary rounded-2xl p-6 border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
