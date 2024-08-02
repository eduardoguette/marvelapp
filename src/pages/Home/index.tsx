import { CharactersList } from '@/components/Characters'
import { Filter } from '@/components/Characters/Filter'
import { motion } from 'framer-motion'
import styles from './home.module.css'

export const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.container}
    >
      <Filter />
      <CharactersList />
    </motion.div>
  )
}
