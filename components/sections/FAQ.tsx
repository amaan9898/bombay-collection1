"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What sizes are available?",
    a: "We stock sizes XS to XXL across most categories. Some items come in Free Size that fits S to L comfortably. Size charts are available for each product. If you're unsure, message us on WhatsApp with your measurements and we'll help you pick the perfect size.",
  },
  {
    q: "Do you deliver to my area in Nagpur?",
    a: "Yes! We deliver across Nagpur city, including Dharampeth, Sitabuldi, Laxmi Nagar, Manewada, Pratap Nagar, Hingna, and all major areas. Same-day delivery (order before 12 PM) and next-day delivery options are available. Message us on WhatsApp for delivery to your specific pin code.",
  },
  {
    q: "Can I return or exchange a product?",
    a: "Absolutely! We have a hassle-free 7-day exchange policy. If you're not happy with the size, colour or style, bring it to our store in Jaffar Nagar or arrange a pickup for online orders. Products must be unworn and in original condition. Please refer to our Returns Policy for details.",
  },
  {
    q: "What are your store timings?",
    a: "Our store is open Monday to Saturday from 10:00 AM to 9:00 PM, and Sunday from 11:00 AM to 8:00 PM. We're located at Shop No. 12, Near Jaffar Nagar Square, Nagpur – 440013.",
  },
  {
    q: "What payment options do you accept?",
    a: "We accept Cash, UPI (PhonePe, Google Pay, Paytm), Debit/Credit Cards, and bank transfers. For WhatsApp orders, we accept advance payment via UPI. No extra charges for digital payments.",
  },
  {
    q: "How do I place an order on WhatsApp?",
    a: "Simply click any 'Order on WhatsApp' button on our website, or save our number and send us a message. Tell us the product name, size and colour. We'll confirm availability, share final price and arrange delivery or pickup. It's that simple!",
  },
  {
    q: "Do you take bulk or wedding orders?",
    a: "Yes! We offer special pricing for bulk orders (5+ pieces) and wedding/event group orders. For bridal trousseau, family wedding sets or corporate gifting, please reach out on WhatsApp or visit our store for a personal consultation.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-beige-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-body text-sm font-semibold text-maroon-500 tracking-widest uppercase mb-2">FAQ</p>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle mx-auto text-center">
            Everything you need to know about ordering from Bombay Collection.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-beige-100 overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-beige-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="font-body font-semibold text-charcoal-500 pr-4 text-sm md:text-base">
                  {faq.q}
                </span>
                <span className="shrink-0 w-6 h-6 rounded-full bg-maroon-50 flex items-center justify-center text-maroon-500">
                  {openIndex === i ? <Minus size={14} /> : <Plus size={14} />}
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5">
                  <p className="font-body text-sm text-charcoal-400 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
