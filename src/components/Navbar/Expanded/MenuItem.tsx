import * as React from "react";
import { motion } from "framer-motion";
import { Text } from "../../Text";
import Link from "next/link";

export const MenuItem = ({ i }: any) => {
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
      display: "flex",
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >

      <Link href={i.link}>
        <Text className="flex items-center decoration-transparent cursor-pointer mb-6 text-3xl text-gray-900 font-extrabold">
          {i.name}
        </Text>
      </Link>
    </motion.li>
  );
};
