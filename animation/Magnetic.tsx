'use client'

import React from 'react'
import { motion, useMotionValue, animate } from 'framer-motion'

const Magnetic: React.FC<{
  children: React.ReactNode
  className?: string
  strength?: number
  maxMove?: number
  scale?: number
  transitionDuration?: number
  resetDuration?: number
}> = ({
  children,
  className = '',
  strength = 0.2,
  maxMove = 20,
  scale = 1.05,
  resetDuration = 400,
}) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const currentScale = useMotionValue(1)

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = (event.target as HTMLDivElement).getBoundingClientRect()
    const elementCenterX = rect.left + rect.width / 2
    const elementCenterY = rect.top + rect.height / 2

    let moveX = (event.clientX - elementCenterX) * strength
    let moveY = (event.clientY - elementCenterY) * strength

    moveX = Math.max(-maxMove, Math.min(maxMove, moveX))
    moveY = Math.max(-maxMove, Math.min(maxMove, moveY))

    animate(x, moveX, { type: 'spring', stiffness: 300, damping: 30 })
    animate(y, moveY, { type: 'spring', stiffness: 300, damping: 30 })
    animate(currentScale, scale, {
      type: 'spring',
      stiffness: 300,
      damping: 30,
    })
  }

  const handleMouseLeave = () => {
    animate(x, 0, {
      type: 'spring',
      stiffness: 300,
      damping: 30,
      duration: resetDuration / 1000,
    })
    animate(y, 0, {
      type: 'spring',
      stiffness: 300,
      damping: 30,
      duration: resetDuration / 1000,
    })
    animate(currentScale, 1, {
      type: 'spring',
      stiffness: 300,
      damping: 30,
      duration: resetDuration / 1000,
    })
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y, scale: currentScale }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
        duration: resetDuration / 1000,
      }}
      className={`${className} inline-block`}
    >
      {children}
    </motion.div>
  )
}

export default Magnetic
