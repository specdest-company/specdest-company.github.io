import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

export const FadeInWhenVisible = ({
  children,
  className,
  initialStyle,
  transition = { delay: 0, duration: 0.5 },
}: PropsWithChildren<{
  className?: string;
  initialStyle: {
    opacity?: number;
    scale?: number;
    x?: number;
    y?: number;
  };
  transition?: {
    delay?: number;
    duration?: number;
  };
}>) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      className={className}
      viewport={{ once: true }}
      transition={transition}
      variants={{
        onscreen: {
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
        },
        offscreen: initialStyle,
      }}>
      {children}
    </motion.div>
  );
};
