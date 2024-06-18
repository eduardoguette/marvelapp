import { ContextAppProvider } from '@/context/AppProvider'
import { useContext } from 'react'
import { Card } from '../Card'

import styles from '../characters.module.css'

export const CharactersList = () => {
  const { data } = useContext(ContextAppProvider)


  return (
    <section className={styles.container}>
      {data && data?.length > 0 && (
        <ul className={styles.list}>
          {data.map((character) => (
            <Card key={character.id} character={character} />
          ))}
        </ul>
      )}
      {data && data.length <= 0 && <p>No results found</p>}
    </section>
  )
}
