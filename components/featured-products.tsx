import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  {
    name: "Rose Gold Anarkali Set",
    description: "Elegant floor-length anarkali with intricate embroidery",
    price: "₹2,199 – ₹2,499",
    image: "/rose-gold-anarkali-indian-dress-embroidery.jpg",
  },
  {
    name: "Midnight Blue Saree",
    description: "Luxurious silk saree with golden border details",
    price: "₹3,499 – ₹3,999",
    image: "/midnight-blue-silk-saree-golden-border.jpg",
  },
  {
    name: "Blush Pink Lehenga",
    description: "Stunning bridal lehenga with pearl embellishments",
    price: "₹5,999 – ₹6,499",
    image: "/blush-pink-lehenga-bridal-pearl-embellishment.jpg",
  },
  {
    name: "Ivory Cotton Kurti",
    description: "Breathable cotton kurti perfect for everyday elegance",
    price: "₹899 – ₹1,199",
    image: "/ivory-cotton-kurti-embroidered-casual.jpg",
  },
  {
    name: "Emerald Palazzo Set",
    description: "Contemporary palazzo set with mirror work details",
    price: "₹1,799 – ₹2,099",
    image: "/emerald-green-palazzo-set-mirror-work.jpg",
  },
  {
    name: "Champagne Gown",
    description: "Sophisticated evening gown with sequin detailing",
    price: "₹4,299 – ₹4,799",
    image: "/champagne-evening-gown-sequin-party-wear.jpg",
  },
]

function createWhatsAppMessage(productName: string) {
  return encodeURIComponent(`Hi, I'm interested in the ${productName} from Ma Women's Collection.`)
}

export default function FeaturedProducts() {
  return (
    <section id="featured" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Curated For You</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">Featured Looks</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Hand-picked pieces that embody elegance, comfort, and timeless style.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div
              key={product.name}
              className={`group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border animate-fade-in-up animation-delay-${((index % 3) + 1) * 100}`}
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />

                {/* Quick view overlay */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{product.description}</p>
                <p className="text-base font-bold text-primary mt-3">{product.price}</p>

                <Button
                  asChild
                  className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground gap-2 rounded-full"
                >
                  <a
                    href={`https://wa.me/910000000000?text=${createWhatsAppMessage(product.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Get it on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
