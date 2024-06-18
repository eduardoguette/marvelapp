import heart from '@/assets/heart-black.svg'
import heartRed from '@/assets/heart.svg'
import { ContextAppProvider } from '@/context'
import { FC, useContext } from 'react'
import styles from '../characters.module.css'
interface IActionProps {
  idCharacter: number
}
export const Action: FC<IActionProps> = ({ idCharacter }) => {
  const { favorites, addFavorites } = useContext(ContextAppProvider)
  return (
    <button
      className={styles.button}
      onClick={() => {
        addFavorites(idCharacter)
      }}
    >
      {favorites.find((id) => id === idCharacter) ? (
        <img src={heartRed} alt="heart icon" height={14} width={14} />
      ) : (
        <img src={heart} alt="heart icon" height={14} width={14} />
      )}
    </button>
  )
}