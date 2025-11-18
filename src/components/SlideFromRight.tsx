import { motion } from "framer-motion";

export default function SlideFromRight({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}      // 👈 part de la droite
      whileInView={{ opacity: 1, x: 0 }}   // 👈 arrive à sa place
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
