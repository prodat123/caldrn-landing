import {
  faCircleCheck,
  faMagnifyingGlass,
  faSpinner,
  faShieldHalved,
  faFileLines,
  faUserTie,
  faBuildingColumns,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function AgenticBrowserDemo() {
  const [step, setStep] = useState(1);

  const steps = [
    { id: 1, label: "Detection", url: "broker-portal.com/leads/active" },
    { id: 2, label: "Navigation", url: "compliance.portal/secure-gateway" },
    { id: 3, label: "Extraction", url: "lender-gateway.io/sarah-jenkins/docs" },
    { id: 4, label: "Validation", url: "compliance.portal/audit/results" },
    {
      id: 5,
      label: "Completion",
      url: "broker-portal.com/leads/sarah/updated",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev >= 5 ? 1 : prev + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: { opacity: 0, y: 10 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <div className="flex flex-col lg:flex-row-reverse items-center gap-12 py-12">
      {/* Copy Side */}
      <div className="flex-1 space-y-6 max-w-md">
        <h3 className="sm:text-3xl text-xl text-slate-900">
          <h4 className="font-bold sm:text-4xl text-lg mb-2">
            Acts as a virtual assistant.
          </h4>
          It identifies high-intent leads, navigates to complex portals, and
          verifies documents against compliance standards.
        </h3>
      </div>

      {/* BROWSER MOCKUP */}
      <div className="flex-1 w-full">
        <div className="rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden aspect-video relative w-full">
          {/* Fake Browser Controls */}
          <div className="flex items-center gap-4 px-4 py-2 border-b border-slate-100 bg-slate-50 relative z-20">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            </div>
            <div className="flex-1 h-6 bg-white rounded border border-slate-200 flex items-center px-3">
              <div className="w-2 h-2 rounded-full bg-emerald-400 mr-2" />
              <span className="text-[10px] text-slate-400 font-mono uppercase tracking-tighter">
                {steps.find((s) => s.id === step)?.url}
              </span>
            </div>
            <div className="w-6 h-6 rounded bg-primary flex items-center justify-center text-[10px] text-white font-bold shadow-sm">
              C
            </div>
          </div>

          <div className="relative h-full w-full flex">
            {/* MAIN CONTENT AREA */}
            <div className="flex-1 h-full bg-slate-50 relative overflow-hidden">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="p1"
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="p-6"
                  >
                    <div className="flex items-center gap-2 mb-4 border-b pb-2 border-slate-200">
                      <FontAwesomeIcon
                        icon={faUserTie}
                        className="text-slate-400 text-xs"
                      />
                      <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tight">
                        Active Client Pipeline
                      </span>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      <div className="p-3 bg-white border border-primary/20 rounded shadow-sm flex justify-between items-center">
                        <div>
                          <p className="text-[11px] font-bold text-slate-800">
                            Sarah Jenkins
                          </p>
                          <p className="text-[9px] text-slate-500">
                            Bridge Loan • $2.4M Opportunity
                          </p>
                        </div>
                        <span className="text-[8px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold animate-pulse">
                          DETECTED
                        </span>
                      </div>
                      <div className="p-3 bg-white border border-slate-100 rounded opacity-40">
                        <p className="text-[11px] font-bold text-slate-800">
                          Michael Ross
                        </p>
                        <p className="text-[9px] text-slate-500">
                          Refinance • $400k
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="p2"
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="inset-0 absolute flex flex-col items-center justify-center"
                  >
                    <FontAwesomeIcon
                      icon={faSpinner}
                      className="text-primary text-3xl animate-spin mb-3"
                    />
                    <div className="text-[10px] text-primary font-mono tracking-widest opacity-60">
                      HANDSHAKE SECURE PORTAL...
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="p3"
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="p-6"
                  >
                    <div className="bg-white border border-slate-200 rounded p-4 shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <FontAwesomeIcon
                          icon={faFileLines}
                          className="text-primary text-xs"
                        />
                        <span className="text-[10px] font-bold">
                          Document Analysis: Jenkins_Tax_2024.pdf
                        </span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-[9px] text-slate-600 border-b border-slate-50 pb-1">
                          <span>Adjusted Gross Income</span>
                          <span className="font-mono text-primary">
                            $442,500.00
                          </span>
                        </div>
                        <div className="flex justify-between text-[9px] text-slate-600 border-b border-slate-50 pb-1">
                          <span>Total Liquid Assets</span>
                          <span className="font-mono text-primary">
                            $1,120,000.00
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    key="p4"
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="p-6 flex items-center justify-center"
                  >
                    <div className="w-full max-w-xs space-y-2">
                      <p className="text-[9px] font-bold text-slate-400 mb-2 uppercase">
                        Compliance Check
                      </p>
                      {[
                        "Identity Verification",
                        "KYC Documentation",
                        "Asset Validation",
                      ].map((item, i) => (
                        <motion.div
                          key={item}
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: i * 0.2 }}
                          className="flex items-center justify-between p-2 bg-white rounded border border-slate-200"
                        >
                          <span className="text-[10px] text-slate-700">
                            {item}
                          </span>
                          <FontAwesomeIcon
                            icon={faCircleCheck}
                            className="text-emerald-500 text-[10px]"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 5 && (
                  <motion.div
                    key="p5"
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="inset-0 absolute flex items-center justify-center"
                  >
                    <div className="text-center text-slate-900 p-6">
                      <div className="w-12 h-12 text-white bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FontAwesomeIcon
                          icon={faBuildingColumns}
                          className="text-xl"
                        />
                      </div>
                      <p className="font-bold text-sm">Broker Portal Updated</p>
                      <p className="text-[10px] opacity-80 mt-1">
                        Sarah Jenkins lead moved to "Ready for Review"
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* SIDEBAR (The "Agent") */}
            <div className="w-48 border-l border-slate-200 bg-white z-40 relative flex flex-col">
              <div className="p-3 border-b border-slate-100 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-[10px] font-bold text-primary uppercase tracking-tighter">
                  Caldrn Agent
                </span>
              </div>

              <div className="p-4 flex-1 space-y-5">
                {steps.map((s) => (
                  <div key={s.id} className="relative">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center text-[8px] border transition-all duration-500 ${
                          step === s.id
                            ? "bg-primary text-white border-primary"
                            : step > s.id
                              ? "bg-emerald-100 text-emerald-600 border-emerald-200"
                              : "bg-white text-slate-300 border-slate-100"
                        }`}
                      >
                        {step > s.id ? (
                          <FontAwesomeIcon icon={faCircleCheck} />
                        ) : (
                          s.id
                        )}
                      </div>
                      <span
                        className={`text-[9px] font-bold transition-colors duration-500 ${step === s.id ? "text-slate-900" : "text-slate-300"}`}
                      >
                        {s.label}
                      </span>
                    </div>
                    {s.id < 5 && (
                      <div className="absolute left-[9px] top-5 w-[1px] h-5 bg-slate-100" />
                    )}
                  </div>
                ))}
              </div>

              {/* Status Update Box */}
              <div className="p-3 bg-slate-50 border-t border-slate-100">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-[8px] text-slate-400 leading-tight italic"
                  >
                    {step === 1 && "Found matching criteria in Jenkins lead..."}
                    {step === 2 &&
                      "Authenticating with secondary lender portal..."}
                    {step === 3 &&
                      "Extracting financial data from 2024 returns..."}
                    {step === 4 && "Checking extracted data against rules..."}
                    {step === 5 && "Task complete. Notifying broker..."}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
