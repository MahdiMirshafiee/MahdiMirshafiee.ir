'use client';

import { motion } from 'framer-motion';
import type { ComponentPropsWithoutRef } from 'react';

type MotionDivProps = ComponentPropsWithoutRef<typeof motion.div>;

export function MotionDiv(props: MotionDivProps) {
  return <motion.div {...props} />;
}
