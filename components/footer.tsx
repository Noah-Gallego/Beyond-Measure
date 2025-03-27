import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Twitter, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-6xl">
        {/* Main sections with improved alignment - Equal spacing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Quick Links Column */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="flex flex-col space-y-3 text-center md:text-left">
              <li>
                <Link href="/about" className="hover:text-gray-300">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-gray-300">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300">
                  CONTACT
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-gray-300">
                  PROJECTS
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information Column */}
          <div className="flex flex-col items-center md:items-center">
            <Link href="/contact">
              <h3 className="text-white font-bold text-lg mb-4 hover:text-gray-300 transition-colors">Contact Us</h3>
            </Link>
            <ul className="flex flex-col space-y-3 text-center">
              <li className="flex items-center justify-center">
                <Mail className="mr-2 h-4 w-4" />
                <span>info@beyondmeasure.org</span>
              </li>
              <li className="flex items-center justify-center">
                <Phone className="mr-2 h-4 w-4" />
                <span>(123) 456-7890</span>
              </li>
            </ul>
          </div>

          {/* Connect With Us Column */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-white font-bold text-lg mb-4">Connect With Us</h3>
            <div className="flex space-x-6">
              <Link
                href="https://www.instagram.com/gobeyondmeasure/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-sky flex items-center justify-center hover:bg-sky/80 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </Link>
              <Link
                href="https://www.facebook.com/beyondmeasure"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-sky flex items-center justify-center hover:bg-sky/80 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </Link>
              <Link
                href="https://twitter.com/beyondmeasure"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-sky flex items-center justify-center hover:bg-sky/80 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white" />
              </Link>
            </div>
          </div>
        </div>

        {/* Logo and Copyright Section */}
        <div className="flex flex-col items-center border-t border-gray-700 pt-8">
          <Link href="/" className="block mb-6">
            <Image
              src="/images/beyond-measure-logo.png"
              alt="Beyond Measure Logo"
              width={200}
              height={80}
              className="h-auto"
            />
          </Link>

          {/* Policy Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
            <Link href="/privacy-policy" className="text-sm text-gray-300 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-300 hover:text-white">
              Terms of Use
            </Link>
            <Link href="/projects" className="text-sm text-gray-300 hover:text-white">
              Project Directory
            </Link>
          </div>

          <div className="text-center text-sm text-gray-300">
            <p>
              © {new Date().getFullYear()} Beyond Measure, a project of the SeedCore Foundation, a 501(c)(3)
              not-for-profit corporation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

