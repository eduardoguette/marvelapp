import { CharactersResult } from '@/types'
import { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Action } from '../Action'
import styles from '../characters.module.css'
interface ICharacterCard {
  character: CharactersResult
}

export const Card: FC<ICharacterCard> = ({ character }) => {
  useEffect(() => {
    if ('caches' in window) {
      caches.open('character-images').then((cache) => {
        cache.add(
          `${character.thumbnail.path}.${character.thumbnail.extension}`
        )
      })
    }
  }, [character])
  return (
    <li key={character.id} className={styles.card}>
      <Link to={`character/${character.id}`} className={styles.cardLink}>
        <header>
          <img
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.description}
            className={styles.cardImage}
          />
        </header>
      </Link>
      <footer className={styles.cardFooter}>
        <p className="">{character.name}</p>
        <Action idCharacter={character.id} />
      </footer>
    </li>
  )
}
