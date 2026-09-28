import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "../lib/whatsapp";

interface WhatsAppCTAProps {
  message: string;
  label?: string;
  variant?: "green" | "dark";
}

const BASE =
  "inline-flex items-center justify-center gap-3 px-10 py-4 text-xs uppercase tracking-widest font-bold";

const VARIANTS = {
  green: "bg-[#25D366] text-white hover:opacity-90 transition-opacity",
  dark: "bg-primary text-secondary hover:bg-secondary hover:text-primary transition-all duration-500",
};

const WhatsAppCTA = ({
  message,
  label = "WhatsApp Us",
  variant = "green",
}: WhatsAppCTAProps) => (
  <a
    href={buildWhatsAppUrl(message)}
    target="_blank"
    rel="noopener noreferrer"
    className={`${BASE} ${VARIANTS[variant]}`}
  >
    <MessageCircle size={16} />
    {label}
  </a>
);

export default WhatsAppCTA;