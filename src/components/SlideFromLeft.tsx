import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SlideFromLeft({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {  // breakpoint Tailwind md
      setIsMobile(true);
    }
  }, []);

  // 👉 Sur mobile : pas d’animation, juste un wrapper normal
  if (isMobile) {
    return <div>{children}</div>;
  }

  // 👉 Desktop : animation normale
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
