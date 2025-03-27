import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnnouncementBanner } from "@/components/announcement-banner"

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AnnouncementBanner />
      <Header />

      <main className="container mx-auto py-12 px-4 flex-grow">
        <h1 className="text-3xl font-bold text-navy mb-8">Terms of Use</h1>

        <div className="prose max-w-none">
          <p className="text-lg mb-6">Last Updated: March 21, 2025</p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">1. Agreement to Terms</h2>
          <p>
            By accessing our website, you are agreeing to be bound by these Terms of Use and all applicable laws and
            regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this
            site.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials on Beyond Measure's website for
            personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title,
            and under this license you may not:
          </p>
          <ul className="list-disc pl-6 mt-2 mb-4">
            <li>Modify or copy the materials;</li>
            <li>
              Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);
            </li>
            <li>Attempt to decompile or reverse engineer any software contained on Beyond Measure's website;</li>
            <li>Remove any copyright or other proprietary notations from the materials; or</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">3. Disclaimer</h2>
          <p>
            The materials on Beyond Measure's website are provided on an 'as is' basis. Beyond Measure makes no
            warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without
            limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or
            non-infringement of intellectual property or other violation of rights.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">4. Limitations</h2>
          <p>
            In no event shall Beyond Measure or its suppliers be liable for any damages (including, without limitation,
            damages for loss of data or profit, or due to business interruption) arising out of the use or inability to
            use the materials on Beyond Measure's website, even if Beyond Measure or a Beyond Measure authorized
            representative has been notified orally or in writing of the possibility of such damage.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">5. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at:</p>
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

