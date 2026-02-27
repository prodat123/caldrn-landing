import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEnvelope,
  faHardDrive,
  faChartLine,
  faAddressCard,
  faShieldHalved,
  faLink,
  faArrowPointer,
  faNetworkWired,
} from "@fortawesome/free-solid-svg-icons";

const apps = [
  {
    id: 1,
    label: "Gmail",
    icon: faEnvelope,
    color: "text-red-500",
    bg: "bg-red-50",
    border: "border-red-100",
    startX: -220,
    startY: 120,
    targetX: -110,
    targetY: -70,
  },

  {
    id: 2,

    label: "Drive",

    icon: faHardDrive,

    color: "text-blue-500",

    bg: "bg-blue-50",

    border: "border-blue-100",

    startX: 220,

    startY: 120,

    targetX: 110,

    targetY: -70,
  },

  {
    id: 3,

    label: "LenderPrice",

    icon: faChartLine,

    color: "text-amber-500",

    bg: "bg-amber-50",

    border: "border-amber-100",

    startX: -220,

    startY: -120,

    targetX: -110,

    targetY: 70,
  },

  {
    id: 4,

    label: "CRM",

    icon: faAddressCard,

    color: "text-emerald-500",

    bg: "bg-emerald-50",

    border: "border-emerald-100",

    startX: 220,

    startY: -120,

    targetX: 110,

    targetY: 70,
  },
];

export default function AutomationFeature() {
  const CYCLE_DURATION = 8; // Longer cycle to allow for the sequence

  return (
    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 py-16">
      <div className="flex-1 space-y-6 max-w-md">
        <h3 className="text-3xl text-slate-900">
          Zero-Code Setup. By consolidating your software suite into the Caldrn
          portal, you transform fragmented tools into a synchronized operational
          ecosystem.
        </h3>
      </div>

      <div className="flex-1 w-full max-w-full">
        <div className="rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden aspect-video relative w-full border-t-[30px] border-t-slate-100">
          {/* Browser Controls */}

          <div className="absolute -top-[22px] left-4 flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />

            <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />

            <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          </div>

          <div className="h-full bg-slate-50 flex items-center justify-center relative overflow-hidden">
            {/* SVG Connecting Ring - Draws after all icons "spit out" */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
              <motion.ellipse
                cx="50%"
                cy="50%"
                rx="110"
                ry="70"
                fill="none"
                stroke="#8b5cf6"
                strokeWidth="1.5"
                strokeDasharray="4,4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: [0, 0, 1, 1, 0], // Holds at 1 while icons are visible
                  opacity: [0, 0, 0.4, 0.4, 0],
                }}
                transition={{
                  duration: CYCLE_DURATION,

                  repeat: Infinity,

                  times: [0, 0.6, 0.7, 0.9, 1], // Starts drawing after the last icon is out

                  ease: "easeInOut",
                }}
              />
            </svg>

            {/* Central Hub - Pulses during "Processing" */}
            <motion.div
              className="z-[99] w-20 h-20 rounded-2xl bg-white border border-slate-200 shadow-xl flex items-center justify-center"
              animate={{
                scale: [1, 1.1, 1, 1.05, 1],

                borderColor: [
                  "#e2e8f0", // Slate-200 (Neutral)

                  "#8b5cf6", // Signature Purple (Processing)

                  "#e2e8f0",

                  "#8b5cf6",

                  "#e2e8f0",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white text-xl shadow-lg shadow-primary/20">
                <FontAwesomeIcon icon={faLink} />
              </div>
            </motion.div>

            {/* THE ICONS */}
            <div className="absolute inset-0 pointer-events-none">
              {apps.map((app, i) => (
                <motion.div
                  key={app.id}
                  initial={{
                    opacity: 0,

                    scale: 0,

                    x: app.startX,

                    y: app.startY,
                  }}
                  animate={{
                    // 1. Gather at center

                    // 2. Stay in center (Processing)

                    // 3. Spit out (Staggered)

                    // 4. Stay at target

                    // 5. Fade out

                    opacity: [0, 1, 1, 1, 1, 0],

                    scale: [0.5, 1, 0.8, 1.1, 1, 0],

                    x: [
                      app.startX,

                      0,

                      0,

                      app.targetX,

                      app.targetX,

                      app.targetX,
                    ],

                    y: [
                      app.startY,

                      0,

                      0,

                      app.targetY,

                      app.targetY,

                      app.targetY,
                    ],
                  }}
                  transition={{
                    duration: CYCLE_DURATION,

                    repeat: Infinity,

                    // Unique times per icon to handle the "Spit out one by one"

                    times: [
                      0, // Start

                      0.15, // All reach center

                      0.35, // End of "Processing" pause

                      0.45 + i * 0.1, // Staggered spit out (0.45, 0.55, 0.65, 0.75)

                      0.9, // Hold at target

                      1, // Exit
                    ],

                    ease: "easeInOut",
                  }}
                  className={`absolute top-1/2 left-1/2 -ml-10 -mt-10 w-20 h-20 rounded-2xl border-2 ${app.bg} ${app.border} flex flex-col items-center justify-center shadow-lg z-20`}
                >
                  <FontAwesomeIcon
                    icon={app.icon}
                    className={`${app.color} text-2xl mb-1`}
                  />
                  <p className="text-[8px] font-black text-slate-500 uppercase">
                    {app.label}
                  </p>

                  {/* Selection Cursor - only appears at start */}
                  <motion.div
                    animate={{ opacity: [0, 1, 0, 0] }}
                    transition={{
                      duration: CYCLE_DURATION,

                      repeat: Infinity,

                      times: [0, 0.05, 0.15, 1],
                    }}
                    className="absolute -right-3 -bottom-3 text-slate-900"
                  >
                    <FontAwesomeIcon
                      icon={faArrowPointer}
                      className="text-lg"
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[length:30px_30px] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]" />
          </div>
        </div>
      </div>
    </div>
  );
}
