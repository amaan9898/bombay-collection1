export const SITE_CONFIG = {
  name: "Bombay Collection",
  tagline: "Style that feels like you.",
  description: "Premium women's fashion store in Jaffar Nagar, Nagpur. Kurtis, sarees, dresses, tops & more. Easy WhatsApp ordering & same-day Nagpur delivery.",
  url: "https://bombaycollection.in",
  whatsappNumber: "919867861310",
  phone: "+91 919867861310",
  email: "hello@bombaycollection.in",
  address: {
    street: "Shop No. 12, Near Jaffar Nagar Square",
    area: "Jaffar Nagar",
    city: "Nagpur",
    state: "Maharashtra",
    pincode: "440013",
    country: "India",
  },
  hours: {
    weekdays: "10:00 AM – 9:00 PM",
    sunday: "11:00 AM – 8:00 PM",
  },
  instagram: "https://instagram.com/bombaycollection.nagpur",
  googleMaps: "https://maps.google.com/?q=Jaffar+Nagar+Nagpur+Maharashtra",
  openingHoursSchema: ["Mo-Sa 10:00-21:00", "Su 11:00-20:00"],
};

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function buildProductWhatsAppLink(productName: string, size?: string): string {
  const msg = `Hi Bombay Collection! I want to order: ${productName}${size ? ` (Size: ${size})` : ""}. Please share price and delivery options.`;
  return buildWhatsAppLink(msg);
}
