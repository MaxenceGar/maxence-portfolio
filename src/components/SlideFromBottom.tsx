import { motion } from "framer-motion";

export default function SlideFromBottom({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}       // 👈 part du bas
      whileInView={{ opacity: 1, y: 0 }}    // 👈 remonte vers sa position
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
