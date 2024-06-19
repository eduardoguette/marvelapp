import { ContextAppProvider } from '@/context/AppProvider'
import { useContext } from 'react'
import { Card } from '../Card'

import { AnimatePresence, motion } from 'framer-motion'
import styles from '../characters.module.css'

export const CharactersList = () => {
  const { data } = useContext(ContextAppProvider)

  return (
    <section className={styles.container}>
      <AnimatePresence>
        {data && data?.length > 0 && (
          <motion.ul className={styles.list}>
            {data.map((character, index) => (
              <motion.li
                key={character.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card key={character.id} character={character} />
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
      {data && data.length <= 0 && <p>No results found</p>}
    </section>
  )
}
