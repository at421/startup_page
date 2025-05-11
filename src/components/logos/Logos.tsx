'use client';

import { motion } from "framer-motion";

interface TranslateWrapperProps {
  children: React.ReactNode;
  reverse?: boolean;
}

const TranslateWrapper = ({
  children,
  reverse,
}: TranslateWrapperProps) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      className="flex gap-12 px-6"
    >
      {children}
    </motion.div>
  );
};

// The main Logos component remains a Server Component
// and should be in the original Logos.tsx file.
// The LogoItems and individual Logo components can also stay there.

// The TranslateWrapper component itself needs the 'use client' directive.
// This code block is for the new TranslateWrapper.tsx file.

export default TranslateWrapper;