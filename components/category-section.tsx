import { ArrowRight } from "lucide-react"

const categories = [
  {
    name: "Ethnic Wear",
    description: "Timeless sarees, elegant kurtis, and traditional ensembles for every celebration.",
    image: "/beautiful-indian-ethnic-saree-kurti-collection.jpg",
  },
  {
    name: "Western Wear",
    description: "Contemporary dresses, chic tops, and modern silhouettes for the stylish you.",
    image: "/stylish-western-dress-tops-fashion-women.jpg",
  },
  {
    name: "Party & Occasion",
    description: "Statement pieces for weddings, parties, and special moments that matter.",
    image: "/glamorous-party-wear-gown-lehenga-women.jpg",
  },
  {
    name: "Everyday Casuals",
    description: "Comfortable yet stylish pieces perfect for your daily adventures.",
    image: "/casual-comfortable-women-clothing-cotton.jpg",
  },
]

export default function CategorySection() {
  return (
    <section id="categories" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Explore Our Range</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Shop by Category
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            From everyday essentials to statement pieces, find the perfect style for every occasion.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <a
              key={category.name}
              href="#featured"
              className={`group relative bg-secondary rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 animate-fade-in-up animation-delay-${(index + 1) * 100}`}
            >
              {/* Image */}
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                <h3 className="font-serif text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-sm text-primary-foreground/80 mb-4 line-clamp-2">{category.description}</p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all duration-300">
                  View Styles
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
