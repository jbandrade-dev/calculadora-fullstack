import { motion } from "framer-motion";

interface MenuToggleProps {
  toggle: () => void

}

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="black"
    strokeLinecap="round"
    {...props}
  />
);

export function MenuToggle({ toggle }: MenuToggleProps) {
  function handleCLick() {
    toggle()
  }

  return (
    <button className="fixed outline-none border-none cursor-pointer top-[30px] left-[20px] bg-transparent rounded-full ml-3 pb-1 z-50" onClick={handleCLick}>
      <svg width="21" height="21" viewBox="0 0 21 21">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" }
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" }
          }}
        />
      </svg>
    </button>

  )
}