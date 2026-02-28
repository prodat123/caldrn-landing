import { motion } from "framer-motion";
import productImage from "/assets/product_image.png";

interface ExtensionSidebarProps {
  onNavLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

export default function Hero({ onNavLinkClick }: ExtensionSidebarProps) {
  return (
    <section className="relative bg-[#F9F9F8] px-6 pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* LEFT ALIGNED TEXT BLOCK */}
        <div className="max-w-full mb-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[70px] leading-[1.1] font-extrabold text-[#1E1E1E] tracking-tight mb-3"
          >
            One Extension. Endless Application.
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="leading-[1.1] font-medium text-[#1E1E1E] tracking-tight text-[30px] mb-8"
          >
            Built to make you <span className="font-bold">8 times</span> more
            productive,
            <span className="text-primary font-normal ml-2">
              Caldrn is the best way to manage your brokerage.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <a
              onClick={(e) => onNavLinkClick(e, "#waitlist")}
              className="inline-flex items-center gap-2 rounded-full bg-[#1E1E1E] px-6 py-2.5 text-2xl font-medium text-white transition-all hover:bg-black active:scale-95 shadow-sm"
            >
              Join the Waitlist
              <svg
                width="16"
                height="16"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 11L11 1M11 1H1M11 1V11"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* LARGE PRODUCT MOCKUP - The "Visual Explainer" */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full max-w-8xl mx-auto rounded-md shadow-2xl"
        >
          <img src={productImage}></img>
        </motion.div>
      </div>
    </section>
  );
}
