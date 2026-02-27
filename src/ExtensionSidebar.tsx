import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  faLink,
  faCircle,
  faXmark,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const navLinks = [
  { label: "Product", href: "#hero" },
  { label: "Features", href: "#features" },
  { label: "Waitlist", href: "#waitlist" },
];

interface ExtensionSidebarProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
<<<<<<< HEAD
  onNavLinkClick: (
    e:
      | React.MouseEvent<HTMLAnchorElement>
      | React.MouseEvent<HTMLButtonElement>,
    id: string,
  ) => void;
=======
  onNavLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
>>>>>>> cb295ad88048f69d28aabb7f9a4f99e7060fa61d
}

export default function ExtensionSidebar({
  isOpen,
  setIsOpen,
  onNavLinkClick,
}: ExtensionSidebarProps) {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            exit={{ x: 300 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-screen w-72 bg-white border-l border-slate-200 shadow-2xl z-[999] flex flex-col"
          >
            {/* 1. BRANDING & CLOSE */}
            <div className="p-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#8b5cf6] flex items-center justify-center text-white text-xs">
                  <FontAwesomeIcon icon={faLink} />
                </div>
                <span className="font-bold text-slate-900 tracking-tight">
                  Caldrn
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-slate-600 transition-colors"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>

            {/* 2. NAVIGATION LINKS - Main focus */}
            <nav className="flex-1 px-4 py-4">
              <p className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">
                Menu
              </p>
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    onClick={(e) => onNavLinkClick(e, link.href)}
                    className="group flex items-center justify-between px-4 py-3 rounded-xl hover:bg-slate-50 transition-all"
                  >
                    <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900">
                      {link.label}
                    </span>
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="text-[10px] text-slate-300 opacity-0 group-hover:opacity-100 transition-all"
                    />
                  </a>
                ))}
              </div>
            </nav>

            {/* 3. SIMPLIFIED STATUS - Visual proof it works */}
<<<<<<< HEAD
            <div className="p-6 w-full mt-auto border-t border-slate-100 bg-slate-50/50">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">
                Extension Status
              </p>
              <div className="flex items-center gap-2">
                <div className="bg-white border rounded-full w-4 h-4" />
                <div className="flex items-center gap-3">Unreleased</div>
              </div>

              <button
                onClick={(e) => onNavLinkClick(e, "#waitlist")}
                className="cursor-pointer relative mt-6 w-full py-3 px-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-black transition-all shadow-lg shadow-slate-200"
              >
                Join Waitlist
=======
            <div className="p-6 mt-auto border-t border-slate-100 bg-slate-50/50">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">
                Extension Status
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                  </div>
                  <span className="text-xs font-medium text-slate-700 uppercase tracking-wide">
                    Monitoring Active
                  </span>
                </div>

                {/* Visual indicator of simplicity: just three icons in a line */}
                <div className="flex gap-2 pt-1 opacity-60">
                  <div className="w-5 h-5 rounded-md bg-white border border-slate-200 flex items-center justify-center text-[10px] text-red-500">
                    G
                  </div>
                  <div className="w-5 h-5 rounded-md bg-white border border-slate-200 flex items-center justify-center text-[10px] text-blue-500">
                    D
                  </div>
                  <div className="w-5 h-5 rounded-md bg-white border border-slate-200 flex items-center justify-center text-[10px] text-amber-500">
                    L
                  </div>
                </div>
              </div>

              <button className="mt-6 w-full py-3 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-black transition-all shadow-lg shadow-slate-200">
                Install Extension
>>>>>>> cb295ad88048f69d28aabb7f9a4f99e7060fa61d
              </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* RE-OPEN TRIGGER - A small floating tab */}
      {!isOpen && (
        <motion.button
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          onClick={() => setIsOpen(true)}
          className="fixed right-0 top-1/2 -translate-y-1/2 bg-white border border-r-0 border-slate-200 p-3 rounded-l-2xl shadow-xl z-[999] hover:pl-5 transition-all group"
        >
          <div className="w-6 h-6 rounded bg-[#8b5cf6] flex items-center justify-center text-white text-[10px]">
            <FontAwesomeIcon icon={faLink} />
          </div>
        </motion.button>
      )}
    </>
  );
}
