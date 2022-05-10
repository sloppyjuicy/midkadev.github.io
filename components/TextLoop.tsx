import { createStyles, Text, TextProps } from '@mantine/core';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type Props = {
  texts: string[];
  delay?: number;
  textProps?: TextProps<'span'>;
};

const useStyles = createStyles((theme) => ({
  inner: {
    position: 'absolute',
    width: '100%',
  },
  outer: {
    position: 'relative',
    marginBottom: theme.spacing.xl * 3.7,
  },
}));

const variants = {
  enter: () => {
    return {
      y: -20,
      opacity: 0,
    };
  },

  center: {
    zIndex: 1,
    y: 0,
    opacity: 1,
  },

  exit: () => {
    return {
      zIndex: 0,
      opacity: 0,
    };
  },
};

const TextLoop = ({ texts, delay = 3000, textProps }: Props) => {
  const [textIndex, setTextIndex] = useState(0);
  const { classes } = useStyles();

  useEffect(() => {
    setTimeout(() => {
      let next = textIndex + 1;

      if (next === texts.length) {
        next = 0;
      }
      setTextIndex(next);
    }, delay);
  }, [textIndex, setTextIndex, delay, texts.length]);

  return (
    <div className={classes.outer}>
      <div className={classes.inner}>
        <AnimatePresence>
          <motion.span
            style={{ position: 'absolute' }}
            variants={variants}
            key={textIndex}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              y: { type: 'spring' },
              opacity: { duration: 0.5 },
            }}
          >
            <Text<'span'> {...textProps}>{texts[textIndex]}</Text>
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TextLoop;
