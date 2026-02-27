import { motion } from "framer-motion";
import productImage from "/assets/product_image.png";

interface ExtensionSidebarProps {
  onNavLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

export default function Hero({ onNavLinkClick }: ExtensionSidebarProps) {
  return (
    <section className="relative min-h-screen bg-[#F9F9F8] px-6 pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* LEFT ALIGNED TEXT BLOCK */}
        <div className="max-w-2xl mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[30px] leading-[1.1] font-medium text-[#1E1E1E] tracking-tight sm:text-[40px] mb-8"
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
              className="inline-flex items-center gap-2 rounded-full bg-[#1E1E1E] px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-black active:scale-95 shadow-sm"
            >
              Join the Waitlist
              <svg
                width="12"
                height="12"
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
          {/* <div className="rounded-xl border border-slate-200 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden aspect-[16/10] flex flex-col">
            <div className="h-10 border-b border-slate-100 bg-[#FBFBFB] flex items-center px-4 gap-6">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
              </div>
              <div className="bg-white border border-slate-200 px-3 py-0.5 rounded text-[10px] text-slate-400 font-mono w-64">
                caldrn.ai/dashboard
              </div>
            </div>

            <div className="flex-1 flex gap-0 p-0">
              <div className="w-64 border-r border-slate-100 p-6 space-y-8">
                <div className="space-y-4">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Active Flows
                  </p>
                  <div className="h-3 w-3/4 bg-slate-100 rounded" />
                  <div className="h-3 w-1/2 bg-slate-100 rounded" />
                </div>
                <div className="space-y-4 pt-4">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Integrations
                  </p>
                  <div className="flex gap-2">
                    <div className="w-6 h-6 rounded bg-red-50" />
                    <div className="w-6 h-6 rounded bg-blue-50" />
                    <div className="w-6 h-6 rounded bg-amber-50" />
                  </div>
                </div>
              </div>

              <div className="flex-1 bg-[#FDFDFD] p-12">
                <div className="max-w-2xl">
                  <div className="h-8 w-48 bg-slate-900/5 rounded mb-4" />
                  <div className="h-4 w-full bg-slate-900/5 rounded mb-2" />
                  <div className="h-4 w-2/3 bg-slate-900/5 rounded mb-12" />

                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-32 rounded-lg border border-slate-100 bg-white" />
                    <div className="h-32 rounded-lg border border-slate-100 bg-white" />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}
