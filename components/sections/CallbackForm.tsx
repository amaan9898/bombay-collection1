"use client";
import { useState } from "react";
import { Phone, User, MessageSquare, Send } from "lucide-react";
import { useToast } from "@/components/ui/ToastProvider";

const callbackRequests: { name: string; phone: string; message: string; time: string }[] = [];

export function CallbackForm() {
  const { showToast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      showToast("Please fill in your name and phone number.", "error");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    callbackRequests.push({ ...form, time: new Date().toISOString() });
    setLoading(false);
    setForm({ name: "", phone: "", message: "" });
    showToast("Thank you! We'll call you back within 30 minutes. 🎉", "success");
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="font-body text-sm font-semibold text-maroon-500 tracking-widest uppercase mb-2">Talk to Us</p>
            <h2 className="section-title mb-4">Request a Callback</h2>
            <p className="font-body text-base text-charcoal-400 leading-relaxed mb-8">
              Not sure what to order? Leave your number and our friendly team will call you back to help you find the perfect outfit for any occasion.
            </p>
            <div className="space-y-4">
              {[
                { icon: "📞", text: "We call back within 30 minutes during store hours" },
                { icon: "👗", text: "Get personalized styling recommendations" },
                { icon: "💰", text: "Ask about ongoing offers and discounts" },
                { icon: "📦", text: "Enquire about bulk and wedding orders" },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <p className="font-body text-sm text-charcoal-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-beige-50 rounded-3xl p-8 border border-beige-100">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="font-body text-sm font-semibold text-charcoal-500 block mb-2">
                  <User size={14} className="inline mr-1" />
                  Your Name *
                </label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="e.g. Priya Sharma"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  required
                />
              </div>
              <div>
                <label className="font-body text-sm font-semibold text-charcoal-500 block mb-2">
                  <Phone size={14} className="inline mr-1" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  className="input-field"
                  placeholder="e.g. 98XXXXXXXX"
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  required
                />
              </div>
              <div>
                <label className="font-body text-sm font-semibold text-charcoal-500 block mb-2">
                  <MessageSquare size={14} className="inline mr-1" />
                  What are you looking for? (Optional)
                </label>
                <textarea
                  className="input-field h-24 resize-none"
                  placeholder="e.g. Looking for a saree for my sister's wedding..."
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full py-3.5 disabled:opacity-70"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <>
                    <Send size={16} />
                    Request Callback
                  </>
                )}
              </button>
              <p className="font-body text-xs text-gray-400 text-center">
                We respect your privacy. No spam, ever. 🔒
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
