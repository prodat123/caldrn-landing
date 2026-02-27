import { motion } from "framer-motion";

export default function ExtensionFeature() {
  const LOOP_DURATION = 6; // Adjusted to your request

  return (
    <div className="flex flex-col lg:flex-row items-center gap-12 py-12">
      {/* Text Side */}
      <div className="flex-1 space-y-6 max-w-md">
        <h3 className="text-3xl text-slate-900">
          <span className="font-semibold mr-2">Lives where you work.</span>
          No more switching tabs. Our extension sits discreetly in your browser,
          ready to analyze any page or document with a single click.
        </h3>
      </div>

      {/* BROWSER MOCKUP */}
      <div className="flex-1 w-full relative">
        <div className="rounded-xl border border-slate-200 bg-white shadow-2xl overflow-hidden relative aspect-video">
          {/* Chrome Toolbar */}
          <div className="flex items-center gap-4 px-4 py-2 border-b border-slate-100 bg-slate-50 relative z-20">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            </div>
            <div className="flex-1 h-6 bg-white rounded border border-slate-200 flex items-center px-3">
              <div className="w-2 h-2 rounded-full bg-emerald-400 mr-2" />
              <span className="text-[10px] text-slate-400 font-mono uppercase tracking-tighter">
                broker-portal.com/leads/0492
              </span>
            </div>
            <div className="w-6 h-6 rounded bg-primary flex items-center justify-center text-[10px] text-white font-bold shadow-sm">
              C
            </div>
          </div>

          {/* Webpage Content (Static background - Mocking a CRM) */}
          <motion.div
            animate={{
              // Using flex shorthand: flex-grow | flex-shrink | flex-basis
              // 100% basis when full, 65% when sidebar is present
              flex: ["1 0 100%", "1 0 100%", "1 0 65%", "1 0 65%", "1 0 100%"],
            }}
            transition={{
              duration: LOOP_DURATION,
              repeat: Infinity,
              repeatDelay: 1,
              times: [0, 0.1, 0.15, 0.9, 1],
              ease: "easeInOut",
            }}
            className="p-6 space-y-6 pointer-events-none overflow-hidden"
          >
            {/* WRAPPER: This ensures content stays left-aligned and doesn't "jitter" while shrinking */}
            <div className="w-full space-y-6">
              {/* Header Area */}
              <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                <div className="space-y-1">
                  <div className="h-3 w-24 bg-slate-200 rounded" />
                  <div className="text-sm font-bold text-slate-800 whitespace-nowrap">
                    Sarah Jenkins — Lead #0492
                  </div>
                </div>
                <div className="px-2 py-1 bg-emerald-100 text-[9px] font-bold text-emerald-700 rounded uppercase">
                  Active
                </div>
              </div>

              {/* Dashboard Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 border border-slate-100 rounded-lg bg-slate-50/50">
                  <p className="text-[9px] uppercase text-slate-400 font-bold mb-1">
                    Estimated Value
                  </p>
                  <p className="text-sm font-bold text-slate-700">$2,400,000</p>
                </div>
                <div className="p-3 border border-slate-100 rounded-lg bg-slate-50/50">
                  <p className="text-[9px] uppercase text-slate-400 font-bold mb-1">
                    Asset Class
                  </p>
                  <p className="text-sm font-bold text-slate-700">
                    Multi-Family
                  </p>
                </div>
              </div>

              {/* Form Fields / Details */}
              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="h-2 w-16 bg-slate-200 rounded" />
                  <div className="h-8 w-full border border-slate-100 rounded bg-white flex items-center px-3 text-[10px] text-slate-500 overflow-hidden italic">
                    "Interested in bridge financing for a 12-unit..."
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-6 bg-slate-100 rounded" />
                  <div className="h-6 bg-slate-100 rounded" />
                  <div className="h-6 bg-slate-100 rounded" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* --- LOOPING SIDEBAR --- */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: ["100%", "100%", "0%", "0%", "100%"] }}
            transition={{
              duration: LOOP_DURATION,
              repeat: Infinity,
              repeatDelay: 1,
              // 0-10%: Waiting, 10-15%: Slide in, 15-90%: Stay, 90-100%: Slide out
              times: [0, 0.1, 0.15, 0.9, 1],
              ease: "easeInOut",
            }}
            className="absolute top-10 right-0 h-[calc(100%-40px)] w-56 bg-white border-l border-slate-200 shadow-[-10px_0_15px_rgba(0,0,0,0.05)] z-10"
          >
            <div className="p-4 border-b border-slate-100 flex items-center">
              <div className="h-2 w-2 mr-2 rounded-full bg-primary animate-pulse" />

              <span className="text-xs font-bold text-primary">
                CALDRN AGENT
              </span>
            </div>

            <div className="p-4 space-y-4">
              {/* Detected Lead Text */}
              <motion.div
                animate={{ opacity: [0, 0, 1, 1, 0] }}
                transition={{
                  duration: LOOP_DURATION,
                  repeat: Infinity,
                  // Appear after sidebar slides in
                  times: [0, 0.18, 0.2, 0.9, 1],
                }}
                className="space-y-1"
              >
                <p className="text-[10px] text-slate-400 uppercase font-bold">
                  Detected Lead
                </p>
                <p className="text-xs font-medium text-slate-800">
                  Sarah Jenkins
                </p>
              </motion.div>

              {/* Analysis Box */}
              <motion.div
                animate={{
                  opacity: [0, 0, 1, 1, 0],
                  scale: [0.95, 0.95, 1, 1, 0.95],
                }}
                transition={{
                  duration: LOOP_DURATION,
                  repeat: Infinity,
                  times: [0, 0.23, 0.25, 0.9, 1],
                }}
                className="p-2 bg-primary/5 rounded border border-primary/10"
              >
                <p className="text-[9px] text-primary leading-tight font-medium">
                  "Found <b>$2.4M Bridge Loan</b> opportunity. Drafting
                  summary..."
                </p>
              </motion.div>

              {/* Button */}
              <motion.div
                animate={{ opacity: [0, 0, 1, 1, 0] }}
                transition={{
                  duration: LOOP_DURATION,
                  repeat: Infinity,
                  times: [0, 0.28, 0.3, 0.9, 1],
                }}
              >
                <button className="w-full py-2 bg-primary text-white text-[10px] font-bold rounded shadow-lg shadow-primary/20">
                  Sync to Workflow
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
