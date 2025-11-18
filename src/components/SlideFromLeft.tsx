import { motion } from "framer-motion";

export default function SlideFromLeft({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }} // amount = % visible avant déclenchement
    >
      {children}
    </motion.div>
  );
}