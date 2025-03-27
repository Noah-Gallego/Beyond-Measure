import Link from "next/link"

export function AnnouncementBannerSimple() {
  return (
    <Link
      href="/about"
      className="block w-full bg-grass py-4 px-4 text-center text-white hover:bg-grass/90 transition-colors"
    >
      <p className="text-sm md:text-base font-medium animate-marquee">
        HAPPENING NOW! CHECK OUT OUR INSTAGRAM FOR LIVE UPDATES
      </p>
    </Link>
  )
}

