import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnnouncementBanner } from "@/components/announcement-banner"

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AnnouncementBanner />
      <Header />

      <main className="container mx-auto py-12 px-4 flex-grow">
        <h1 className="text-3xl font-bold text-navy mb-8">Privacy Policy</h1>

        <div className="prose max-w-none">
          <p className="text-lg mb-6">Last Updated: March 21, 2025</p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">1. Introduction</h2>
          <p>
            Beyond Measure ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains
            how we collect, use, disclose, and safeguard your information when you visit our website or use our
            services.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">2. Information We Collect</h2>
          <p>We may collect information about you in a variety of ways. The information we may collect includes:</p>
          <ul className="list-disc pl-6 mt-2 mb-4">
            <li>
              Personal Data: Personally identifiable information, such as your name, email address, and telephone
              number, that you voluntarily give to us when you register or when you choose to participate in various
              activities related to our website.
            </li>
            <li>
              Derivative Data: Information our servers automatically collect when you access our website, such as your
              IP address, browser type, operating system, access times, and the pages you have viewed.
            </li>
            <li>
              Financial Data: Financial information, such as data related to your payment method (e.g., credit card
              number) when you donate to a project.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">3. Use of Your Information</h2>
          <p>
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized
            experience. Specifically, we may use information collected about you via the website to:
          </p>
          <ul className="list-disc pl-6 mt-2 mb-4">
            <li>Create and manage your account.</li>
            <li>Process donations and transactions.</li>
            <li>Send you emails regarding your account or projects.</li>
            <li>Compile anonymous statistical data and analysis for use internally or with third parties.</li>
            <li>
              Deliver targeted advertising, newsletters, and other information regarding promotions and the website to
              you.
            </li>
            <li>Increase the efficiency and operation of the website.</li>
            <li>Monitor and analyze usage and trends to improve your experience with the website.</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">4. Contact Us</h2>
          <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
          <p className="mt-2">
            Beyond Measure
            <br />
            123 Education Lane, Suite 100
            <br />
            Anytown, MT 12345
            <br />
            info@beyondmeasure.org
            <br />
            (123) 456-7890
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}

