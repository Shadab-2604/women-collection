import { Instagram, Facebook, MessageCircle, Mail, Phone, MapPin } from "lucide-react"

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Collections", href: "#categories" },
  { name: "Size Guide", href: "#" },
  { name: "FAQs", href: "#" },
  { name: "Return & Exchange Policy", href: "#" },
]

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "WhatsApp", icon: MessageCircle, href: "https://wa.me/910000000000" },
  { name: "Facebook", icon: Facebook, href: "#" },
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl font-bold mb-4">Ma Women's Collection</h3>
            <p className="text-primary-foreground/70 mb-6">
              Curating premium styles for modern women. Elegance in every thread.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-foreground transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-primary-foreground/70 hover:text-accent transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-0.5" />
                <span className="text-primary-foreground/70">+91-00000 00000</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-0.5" />
                <span className="text-primary-foreground/70">hello@mawomenscollection.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5" />
                <span className="text-primary-foreground/70">Mumbai, India</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Stay Connected</h4>
            <p className="text-primary-foreground/70 mb-4">
              Get exclusive updates, new arrivals, and styling tips directly on WhatsApp.
            </p>
            <a
              href="https://wa.me/910000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-foreground px-5 py-2.5 rounded-full font-medium hover:bg-accent/90 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Join Our WhatsApp
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <p className="text-center text-primary-foreground/50 text-sm">
            © 2025 Ma Women's Collection. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
