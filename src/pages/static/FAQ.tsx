import { useState } from 'react'
import { ChevronDown } from 'lucide-react' // Ideally install lucide-react, or use an SVG
import StaticPageLayout from './StaticPageLayout'

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: 'What is Chikankari?',
    answer:
      'Chikankari is a form of traditional hand embroidery native to Lucknow, India. It involves creating intricate designs on fabric using various stitching techniques, creating beautiful, delicate patterns.',
  },
  {
    question: 'Are your products handmade?',
    answer:
      'Yes, all our products are handcrafted by skilled artisans using traditional Chikankari techniques. Each piece is unique and made with care and attention to detail.',
  },
  {
    question: 'How should I care for my Chikankari garment?',
    answer:
      'Hand wash in cold water with mild detergent, avoid bleaching, dry in shade, and iron on low heat. For detailed instructions, please visit our Care Instructions page.',
  },
  {
    question: 'What is your return and exchange policy?',
    answer:
      'We offer returns and exchanges within 30 days of purchase if the item is unused and in original condition. Please visit our Returns & Exchanges page for more details.',
  },
  {
    question: 'How long does shipping take?',
    answer:
      'Domestic orders typically arrive within 5-7 business days. International orders may take longer depending on your location. For more information, visit our Shipping Policy page.',
  },
  {
    question: 'Do you offer customization?',
    answer:
      'Yes! We offer custom Chikankari work. Please contact us at info@anokhichikankari.com to discuss your custom order requirements.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards, debit cards, and digital payment methods. Payment is processed securely through our payment gateway.',
  },
  {
    question: 'How are the artisans compensated?',
    answer:
      'We believe in fair trade practices and ensure our artisans receive fair compensation for their skilled work. We work directly with artisans to support their livelihoods and preserve this traditional craft.',
  },
]

function FAQItem({ item }: { item: FAQItem }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden transition-all duration-200 hover:border-slate-300 bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-6 py-4 flex justify-between items-center bg-white hover:bg-slate-50 transition-colors"
      >
        <span className="font-medium text-slate-900 pr-4">{item.question}</span>
        {/* If you don't have lucide-react, replace <ChevronDown /> with a simple SVG */}
        <span
          className={`transform transition-transform duration-300 text-slate-400 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          <ChevronDown/>
        </span>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 pt-2 text-slate-600 leading-relaxed border-t border-slate-100">
          {item.answer}
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <StaticPageLayout
      title="Frequently Asked Questions"
      subtitle="Everything you need to know about our products and services."
    >
      <div className="space-y-4 not-prose">
        {faqItems.map((item, index) => (
          <FAQItem key={index} item={item} />
        ))}
      </div>
    </StaticPageLayout>
  )
}