import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Zap, ShieldCheck } from "lucide-react";
import Tab1 from "../components/Tab1";
import Tab2 from "../components/Tab2";
import Tab3 from "../components/Tab3";

type TabId = "tab1" | "tab2" | "tab3";

interface Tab {
  id: TabId;
  label: string;
  icon: React.ElementType;
}

const tabs: Tab[] = [
  { id: "tab1", label: "Expertise", icon: BookOpen },
  { id: "tab2", label: "Speed", icon: Zap },
  { id: "tab3", label: "Security", icon: ShieldCheck },
];

const Slider = () => {
  const [activeTab, setActiveTab] = useState<TabId>("tab1");

  const handleTabClick = (id: TabId) => {
    setActiveTab(id);
  };

  return (
    <section className="w-full py-16">
      <div className="max-w-5xl mx-auto px-4 flex flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h4 className="text-sm tracking-widest font-semibold text-[#103e91]/70">
            MORE ABOUT US
          </h4>
          <h2 className="text-3xl font-bold text-[#103e91] mt-2">
            Why Choose Us
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="flex p-1 rounded-xl bg-white border border-gray-200 shadow-sm">
            {tabs.map(({ id, label, icon: Icon }) => {
              const isActive = activeTab === id;

              return (
                <motion.button
                  key={id}
                  onClick={() => handleTabClick(id)}
                  className={`cursor-pointer relative flex items-center gap-2 px-6 py-3 rounded-lg
                    text-sm font-semibold transition-colors duration-200
                    ${
                      isActive
                        ? "text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }
                  `}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  layout
                >
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-[#103e91] rounded-lg"
                      layoutId="activeTab"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                    />
                  )}
                  <Icon
                    size={18}
                    className={`relative z-10 ${
                      isActive ? "text-white" : "text-[#103e91]"
                    }`}
                  />
                  <span className="relative z-10">{label}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="relative min-h-100"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              // className="absolute inset-0"
            >
              {activeTab === "tab1" && <Tab1 />}
              {activeTab === "tab2" && <Tab2 />}
              {activeTab === "tab3" && <Tab3 />}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Slider;
