import { RiWhatsappLine } from 'react-icons/ri';

const WhatsAppButton = () => (
  <a
    className="whatsapp-button"
    href="https://wa.me/27637533950?text=Hello%20Sci-Com%20Academy%2C%20I%20would%20like%20to%20learn%20more."
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with Sci-Com Academy on WhatsApp"
  >
    <RiWhatsappLine aria-hidden="true" />
    <span>Chat on WhatsApp</span>
  </a>
);

export default WhatsAppButton;
