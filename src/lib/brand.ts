export const brand = {
  name: "andikaputradev",
  domain: "uploadplaystore.my.id",
  url: "https://uploadplaystore.my.id",
  whatsapp: {
    display: "0877-3013-9582",
    e164: "+6287730139582",
    number: "6287730139582",
  },
  instagram: "@andikaputradev",
  tiktok: "@andikaputradev",
  telegram: "@andikaputradev",
} as const;

export const socialLinks = {
  instagram: "https://instagram.com/andikaputradev",
  tiktok: "https://tiktok.com/@andikaputradev",
  telegram: "https://t.me/andikaputradev",
} as const;

export function waLink(message: string): string {
  return `https://wa.me/${brand.whatsapp.number}?text=${encodeURIComponent(message)}`;
}
