import { motion } from "framer-motion";
import { MouseEventHandler } from "react";

const Button = ({
  onClick,
  className,
  children,
  hover = 1.01,
}: {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  children: JSX.Element;
  hover?: number;
}) => {
  return (
    <motion.button
      className={className}
      onClick={onClick}
      whileHover={{ scale: hover }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
