"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnnouncementBanner } from "@/components/announcement-banner"
import { ChevronDown, ChevronUp, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FAQItem {
  question: string
  answer: string
  isOpen: boolean
}

export default function FAQPage() {
  const [faqs, setFaqs] = useState<FAQItem[]>([
    {
      question: "Is Beyond Measure only available to private school teachers?",
      answer:
        "Yes, Beyond Measure is currently focused on supporting teachers at private schools. Our mission is to help private school educators access the resources they need to create exceptional learning experiences for their students.",
      isOpen: false,
    },
    {
      question: "Is Beyond Measure only available to schools with a 501(c)(3) status?",
      answer:
        "Yes, Beyond Measure is available to schools with 501(c)(3) status. This ensures that donations to projects are tax-deductible and helps us maintain our commitment to supporting educational institutions.",
      isOpen: false,
    },
    {
      question: "I don't see my school listed when I go to create my account.",
      answer:
        "If you don't see your school listed, you can request to add it during the registration process. Click on the 'School not listed?' option and fill out the required information. Our team will verify the school's eligibility and add it to our database within 2-3 business days.",
      isOpen: false,
    },
    {
      question: "How do I know if my school is verified?",
      answer:
        "You'll receive an email notification once your school has been verified. You can also check the status in your account dashboard under 'School Verification Status'. Verified schools will display a checkmark icon next to their name.",
      isOpen: false,
    },
    {
      question: "How do I create a project?",
      answer:
        "To create a project, log in to your account and click on the 'Create a Project' button in the navigation menu. Fill out the project details including title, description, funding goal, and category. Add photos and any additional information that will help donors understand your needs. Once submitted, our team will review your project and approve it within 1-2 business days.",
      isOpen: false,
    },
    {
      question: "What kind of photos are permitted to be uploaded?",
      answer:
        "You can upload photos that showcase your classroom, students (with appropriate permissions), current resources, or visual representations of what you're seeking to fund. Photos must be appropriate for all audiences and should not contain any offensive content. Acceptable formats include JPG, PNG, and GIF with a maximum file size of 5MB per image.",
      isOpen: false,
    },
    {
      question: "How to captivate and inspire donors through project photos.",
      answer:
        "Effective project photos should tell a story about your classroom needs. Include clear, well-lit images that show the current situation and how the requested resources will make a difference. Photos of students engaged in learning (with proper permissions) are particularly effective. Before and after comparisons, if applicable, can also be powerful. Make sure to include captions that explain what donors are seeing and how their contribution will help.",
      isOpen: false,
    },
    {
      question: "How does Beyond Measure work?",
      answer:
        "Beyond Measure connects private school teachers with donors who want to support classroom projects. Teachers create project listings detailing their needs and funding goals. Donors browse projects and contribute any amount they choose. Once a project is fully funded, the teacher receives the funds to purchase the needed resources. 100% of donations go directly to classroom projects.",
      isOpen: false,
    },
    {
      question: "Who can create projects?",
      answer:
        "Verified teachers and staff members at eligible private schools can create projects. You must create an account and complete the verification process before submitting your first project.",
      isOpen: false,
    },
    {
      question: "How are donations processed?",
      answer:
        "Donations are processed securely through our payment system. Donors can use credit/debit cards or PayPal. All transactions are encrypted and protected. Once processed, funds are held in the project account until the funding goal is reached or the project deadline passes.",
      isOpen: false,
    },
  ])

  const toggleFAQ = (index: number) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) return { ...faq, isOpen: !faq.isOpen }
        return faq
      }),
    )
  }

  const expandAll = () => {
    setFaqs(faqs.map((faq) => ({ ...faq, isOpen: true })))
  }

  const collapseAll = () => {
    setFaqs(faqs.map((faq) => ({ ...faq, isOpen: false })))
  }

  return (
    <div className="flex flex-col min-h-screen">
      <AnnouncementBanner />
      <Header />

      <main className="container mx-auto py-12 px-4 flex-grow">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-navy mb-8">Frequently Asked Questions</h1>

          <div className="flex justify-end mb-4">
            <Button variant="outline" onClick={expandAll} className="mr-2 text-sky border-sky hover:bg-sky/10">
              <Plus className="h-4 w-4 mr-2" />
              Expand All
            </Button>
            <Button variant="outline" onClick={collapseAll} className="text-navy border-navy hover:bg-navy/10">
              <Minus className="h-4 w-4 mr-2" />
              Collapse All
            </Button>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full flex justify-between items-center p-4 text-left focus:outline-none focus:ring-2 focus:ring-sky focus:ring-inset"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-xl font-medium text-sky">{faq.question}</h3>
                  {faq.isOpen ? (
                    <ChevronUp className="h-5 w-5 text-sky flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-sky flex-shrink-0" />
                  )}
                </button>
                {faq.isOpen && (
                  <div className="p-4 pt-0 bg-gray-50">
                    <p className="text-navy">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

