import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SlideFromRight({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  // 👉 Sur mobile : aucun effet, juste un wrapper
  if (isMobile) {
    return <div>{children}</div>;
  }

  // 👉 Desktop : animation slide depuis la droite
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
