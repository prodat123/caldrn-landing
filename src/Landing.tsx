import { useState } from "react";
import { motion } from "framer-motion";
import AgenticDemo from "./AgenticDemo";
import ExtensionFeature from "./ExtensionFeature";
import AutomationFeature from "./AutomationFeature";
import Hero from "./Hero";
import ExtensionSidebar from "./ExtensionSidebar";
import Waitlist from "./Waitlist";

function Landing() {
  const [isOpen, setIsOpen] = useState(false);

  // Smooth Scroll Handler
  const scrollToSection = (
    e:
      | React.MouseEvent<HTMLAnchorElement>
      | React.MouseEvent<HTMLButtonElement>,
    id: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(id.replace("#", ""));
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      // Optionally update URL without jump
      window.history.pushState(null, "", id);
    }
  };

  return (
    <div className="font-brand min-h-screen w-full bg-[#F9F9F8] flex overflow-x-hidden">
      {/* MAIN CONTENT AREA */}
      <motion.div
        layout // This is the magic prop for smooth size changes
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="flex-1 w-full"
        id="hero"
      >
        <Hero onNavLinkClick={scrollToSection} />

        <section className="py-24 backdrop-blur-sm" id="features">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                Extension for the Modern Broker
              </h2>
              <p className="mt-4 text-slate-600">
                Everything you need to automate your brokerage, right in your
                browser.
              </p>
            </div>

            <div className="space-y-12">
              <ExtensionFeature />
              <AgenticDemo />
              <AutomationFeature />
            </div>
          </div>
        </section>

        <Waitlist />
      </motion.div>

      {/* SIDEBAR AREA */}
      <motion.div
        layout
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        style={{ width: isOpen ? "300px" : "0px" }}
        className="relative z-[999]"
      >
        <ExtensionSidebar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          onNavLinkClick={scrollToSection} // Pass the scroll function down
        />
      </motion.div>
    </div>
  );
}

export default Landing;
