import { motion } from 'framer-motion'
import React, { FC } from 'react'
interface SkeletonProps {
  style?: React.CSSProperties
}
export const Skeleton: FC<SkeletonProps> = ({ style }) => {
  return (
    <motion.div
      data-testid="skeleton"
      initial={{ opacity: 0.5 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatType: 'loop'
      }}
      style={{
        backgroundColor: '#e0e0e0',
        borderRadius: '4px',
        ...style
      }}
    ></motion.div>
  )
}
