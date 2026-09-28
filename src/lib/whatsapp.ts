export const WHATSAPP_NUMBER = "919667641294";
export const PHONE_DISPLAY = "+91-9667641294";
export const PHONE_TEL = "+919667641294";

export const buildWhatsAppUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const WHATSAPP_MESSAGES = {
  general:
    "Hello A Square Studio, I'm interested in discussing an architecture/interior design project.",
  farmhouse:
    "Hello A Square Studio, I'm interested in discussing a farmhouse architecture project.",
  corporateOffice:
    "Hello A Square Studio, I'm interested in discussing a corporate office architecture/interior project.",
  showroom:
    "Hello A Square Studio, I'm interested in discussing a showroom design project.",
  restaurantCafe:
    "Hello A Square Studio, I'm interested in discussing a restaurant/cafe architecture or interior project.",
  commercial:
    "Hello A Square Studio, I'm interested in discussing a commercial architecture/interior project.",
  turnkey:
    "Hello A Square Studio, I'm interested in discussing a turnkey architecture, interior design and execution project.",
  interiorDesign:
    "Hello A Square Studio, I'm interested in discussing an interior design project.",
  architecturalDesign:
    "Hello A Square Studio, I'm interested in discussing an architectural design project.",
  renovation:
    "Hi A Square Studio, I'm interested in discussing a renovation and remodeling project.",
  Visualization3D:
    "Hi A Square Studio, I'm interested in discussing 3D architectural visualization for my project.",
  // Ready for when the Educational page is unlocked
  educational:
    "Hello A Square Studio, I'm interested in discussing an educational/institutional architecture project.",
} as const;
