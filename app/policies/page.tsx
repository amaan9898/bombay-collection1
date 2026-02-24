import type { Metadata } from "next";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: "Policies – Shipping, Returns, Privacy | Bombay Collection, Nagpur",
  description: "Bombay Collection policies: shipping & delivery, returns & exchange, privacy policy and terms of service.",
};

export default function PoliciesPage() {
  return (
    <div className="pt-20">
      <section className="py-12 bg-gradient-to-br from-maroon-50 to-beige-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold text-charcoal-500 mb-2">Our Policies</h1>
          <p className="font-body text-charcoal-400">Last updated: January 2024</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Shipping */}
          <div id="shipping">
            <h2 className="font-display text-2xl font-bold text-charcoal-500 mb-6 pb-3 border-b border-beige-100">
              Shipping & Delivery Policy
            </h2>
            <div className="prose font-body text-charcoal-400 space-y-4 text-sm leading-relaxed">
              <p className="font-semibold text-charcoal-500">Delivery Within Nagpur</p>
              <p>We offer same-day delivery for orders placed before 12:00 PM on business days. Orders placed after 12:00 PM will be delivered the next business day. Delivery is available across all major areas of Nagpur city including Dharampeth, Sitabuldi, Laxmi Nagar, Manewada, Jaffar Nagar and surrounding areas.</p>
              <p className="font-semibold text-charcoal-500">Delivery Charges</p>
              <p>Delivery within Nagpur city: ₹50 per order. Free delivery on orders above ₹999. For remote areas within Nagpur, additional charges may apply (we will inform you before confirming the order).</p>
              <p className="font-semibold text-charcoal-500">Outside Nagpur</p>
              <p>We ship Pan-India via trusted courier partners. Estimated delivery time: 3-7 business days. Shipping charges vary by location and will be calculated at checkout. We will share tracking details via WhatsApp once your order is dispatched.</p>
              <p className="font-semibold text-charcoal-500">Order Confirmation</p>
              <p>All orders are confirmed via WhatsApp message. Please ensure your WhatsApp number is active and reachable. If we cannot reach you within 2 hours of placing an order, the order may be cancelled.</p>
            </div>
          </div>

          {/* Returns */}
          <div id="returns">
            <h2 className="font-display text-2xl font-bold text-charcoal-500 mb-6 pb-3 border-b border-beige-100">
              Returns & Exchange Policy
            </h2>
            <div className="font-body text-charcoal-400 space-y-4 text-sm leading-relaxed">
              <p className="font-semibold text-charcoal-500">Exchange Policy</p>
              <p>We offer a 7-day exchange policy from the date of delivery. If the product is the wrong size, colour or has a manufacturing defect, you can exchange it for another product or size of equal or higher value.</p>
              <p className="font-semibold text-charcoal-500">Conditions for Exchange</p>
              <p>Products must be unworn, unwashed and in their original condition with tags intact. Items must be returned in the original packaging. Exchange is not available for products damaged due to misuse or improper care.</p>
              <p className="font-semibold text-charcoal-500">How to Exchange</p>
              <p>In-store: Bring the product to our Jaffar Nagar store within 7 days. Online: Message us on WhatsApp with your order details and reason for exchange. We will arrange pickup for Nagpur orders at no extra charge.</p>
              <p className="font-semibold text-charcoal-500">Refund Policy</p>
              <p>We currently offer exchanges only (no cash refunds for change-of-mind purchases). In case of a manufacturing defect or wrong product sent, we will offer a full refund or store credit as preferred.</p>
            </div>
          </div>

          {/* Privacy */}
          <div id="privacy">
            <h2 className="font-display text-2xl font-bold text-charcoal-500 mb-6 pb-3 border-b border-beige-100">
              Privacy Policy
            </h2>
            <div className="font-body text-charcoal-400 space-y-4 text-sm leading-relaxed">
              <p>Bombay Collection (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is committed to protecting your personal information. This policy explains how we collect, use and protect data when you interact with our website or WhatsApp service.</p>
              <p className="font-semibold text-charcoal-500">Information We Collect</p>
              <p>We collect only what is necessary: your name, phone number, delivery address and order details shared via WhatsApp or our website contact form. We do not collect payment card information directly.</p>
              <p className="font-semibold text-charcoal-500">How We Use Your Information</p>
              <p>Your information is used solely to process and deliver your orders, respond to your enquiries, and keep you updated about your order status. We do not sell, rent or share your data with third parties for marketing purposes.</p>
              <p className="font-semibold text-charcoal-500">Data Security</p>
              <p>We take reasonable steps to protect your personal information. However, no method of transmission over the internet is 100% secure. For concerns, please contact us at {SITE_CONFIG.email}.</p>
            </div>
          </div>

          {/* Terms */}
          <div id="terms">
            <h2 className="font-display text-2xl font-bold text-charcoal-500 mb-6 pb-3 border-b border-beige-100">
              Terms & Conditions
            </h2>
            <div className="font-body text-charcoal-400 space-y-4 text-sm leading-relaxed">
              <p>By accessing this website or placing an order with Bombay Collection, you agree to the following terms.</p>
              <p className="font-semibold text-charcoal-500">Product Descriptions</p>
              <p>We make every effort to display accurate product descriptions, colours and sizes. Actual colours may vary slightly due to photography and screen settings. If you have concerns about a product, please ask us via WhatsApp before ordering.</p>
              <p className="font-semibold text-charcoal-500">Pricing</p>
              <p>All prices are in Indian Rupees (INR) and are inclusive of applicable taxes. Prices are subject to change without notice. The price at the time of order confirmation is the final price.</p>
              <p className="font-semibold text-charcoal-500">Intellectual Property</p>
              <p>All content on this website, including text, images and branding, is the property of Bombay Collection. Reproduction without permission is prohibited.</p>
              <p className="font-semibold text-charcoal-500">Contact</p>
              <p>For any questions about these policies, reach us at {SITE_CONFIG.email} or via WhatsApp.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
