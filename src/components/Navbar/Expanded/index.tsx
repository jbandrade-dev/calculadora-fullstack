import * as React from "react"
import { useRef } from "react"
import { motion, useCycle } from "framer-motion"
import { useDimensions } from "./use-dimensions"
import { Navigation } from "./Navigation"
import { MenuToggle } from "./MenuToggle"

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(20px at 43px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
}

export function Expanded() {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div
        className="fixed inset-0 bg-white max-h-screen z-40"
        variants={sidebar}
      />

      <Navigation />

      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  )
}
