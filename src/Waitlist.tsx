import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://sheetdb.io/api/v1/ez820su2jh1em", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            {
              email: email,
              date: new Date().toLocaleString(),
            },
          ],
        }),
      });

      if (response.ok) {
        // Adding a slight delay for "satisfying" feel so the loading isn't too instant
        setTimeout(() => {
          setStatus("success");
          setEmail("");
        }, 600);
      }
    } catch (error) {
      console.error("Error adding to spreadsheet:", error);
      alert("Something went wrong. Please try again.");
      setStatus("idle");
    }
  };

  return (
    <section id="waitlist">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center">
            <img src="/assets/logo.png" className="w-32 h-32" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-10 tracking-tight">
            Join the waitlist.
          </h2>

          <div className="min-h-[64px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {status !== "success" ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-lg mx-auto"
                >
                  <input
                    type="email"
                    required
                    disabled={status === "loading"}
                    placeholder="Enter your email..."
                    className="w-full sm:w-80 px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 transition-all disabled:opacity-50"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full sm:w-auto bg-black hover:bg-slate-800 text-white px-8 py-3 rounded-lg font-bold transition-all active:scale-95 disabled:bg-slate-400 flex items-center justify-center min-w-[140px]"
                  >
                    {status === "loading" ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          repeat: Infinity,
                          duration: 1,
                          ease: "linear",
                        }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                    ) : (
                      "Join Waitlist"
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", damping: 12 }}
                  className="flex flex-col items-center"
                >
                  <div className="text-slate-900 font-bold text-xl flex items-center gap-2">
                    You're on the list!
                  </div>
                  <p className="text-slate-500 mt-2">
                    We'll reach out to you soon.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
      <div className="mt-20 text-center w-full bg-gray-300 py-6 text-xs text-slate-800">
        Copyright © {new Date().getFullYear()} Caldrn. All rights reserved.
      </div>
    </section>
  );
}
