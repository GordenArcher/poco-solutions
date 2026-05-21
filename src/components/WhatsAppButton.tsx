import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp";

const WHATSAPP_URL = "https://wa.me/233275697715";
const INITIAL_MESSAGE = "Hi Poco Solutions, I need help.";

const WhatsAppButton = () => {
  return (
    <a
      href={`${WHATSAPP_URL}?text=${encodeURIComponent(INITIAL_MESSAGE)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-4 z-50 inline-flex max-w-[calc(100vw-2rem)] items-center gap-2 rounded-full bg-green-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-green-500/30 transition duration-200 hover:bg-green-600 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-green-200 sm:right-6 sm:px-5"
    >
      <FaWhatsapp className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span>Chat on WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
