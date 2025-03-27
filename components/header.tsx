import Image from "next/image"
import Link from "next/link"
import { AuthButtons } from "@/components/auth-buttons"

export function Header() {
  return (
    <header className="container mx-auto py-6 px-4">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-6 md:mb-0">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/beyond-measure-full-logo.png"
              alt="Beyond Measure Logo"
              width={280}
              height={100}
              className="h-auto"
              priority
            />
          </Link>
        </div>

        <nav className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0">
          <div className="flex space-x-10 md:mr-10">
            <Link href="/about" className="text-navy text-lg font-medium hover:text-sky transition-colors">
              ABOUT
            </Link>
            <Link href="/faq" className="text-navy text-lg font-medium hover:text-sky transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="text-navy text-lg font-medium hover:text-sky transition-colors">
              CONTACT
            </Link>
          </div>

          <AuthButtons />
        </nav>
      </div>
    </header>
  )
}

