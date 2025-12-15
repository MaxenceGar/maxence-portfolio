import React from "react";
import { motion } from "framer-motion";

// ---
// 1. VARIANTES D'ANIMATION RÉUTILISABLES
// ---

/**
 * Crée une variante d'animation de fondu en entrée (Fade In) avec un léger déplacement.
 */
export const fadeIn = (direction, delay = 0) => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? -40 : direction === "right" ? 40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.8,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

/**
 * Crée une variante d'animation de zoom et fondu en entrée.
 */
export const zoomIn = (delay = 0, scale = 0.85) => {
  return {
    hidden: {
      scale,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay,
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

/**
 * Crée une variante d'animation de glissement complet (Slide In).
 */
export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
};

/**
 * Variantes pour animer une liste d'enfants avec un décalage (Stagger effect).
 */
export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => {
    return {
        hidden: {},
        show: {
            transition: {
                staggerChildren: staggerChildren,
                delayChildren: delayChildren,
            },
        },
    };
};

/**
 * Variante simple pour les enfants dans un container Stagger.
 */
export const textFadeIn = () => {
    return {
        hidden: { y: 20, opacity: 0 },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 0.8,
            },
        },
    };
};

// ---
// 2. COMPOSANT WRAPPER REACT
// ---

const AnimatedSection = ({
  children,
  className = "",
  variants,
  initial = "hidden",
  animate,
  whileInView = "show",
  whileHover,
  // Configuration viewport : Déclenchement à 25% de visibilité, une seule fois.
  viewport = { once: true, amount: 0.25 }, 
  transition,
  id,
  // Rendu par défaut en tant que div
  as = "div", 
  ...props
}) => {
  return (
    // Utilisation de motion.div pour la balise animée
    <motion.div
      id={id}
      // Le composant 'as' permet de spécifier la balise HTML (div, section, h1, etc.)
      as={as} 
      className={className}
      variants={variants}
      initial={initial}
      animate={animate}
      // Si 'animate' est spécifié, on ignore whileInView (animation au scroll)
      whileInView={animate ? undefined : whileInView} 
      whileHover={whileHover}
      viewport={viewport}
      transition={transition}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;