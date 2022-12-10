import { motion } from "framer-motion";
import { menu } from "../../constType";
import { MenuItem } from "./MenuItem"

export function Navigation() {
  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    }
  }

  return (
    <div>
      <motion.ul className="top-24 left-8 fixed z-50" variants={variants}>
        {menu.map(i => (
          <MenuItem i={i} key={i.name} />
        ))}
      </motion.ul>
    </div>
  )
}
