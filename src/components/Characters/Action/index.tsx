import { ContextAppProvider } from '@/context'
import { FC, useContext } from 'react'
import styles from '../characters.module.css'
interface IActionProps {
  idCharacter: number
  characterDetails?: boolean
}
export const Action: FC<IActionProps> = ({ idCharacter, characterDetails }) => {
  const { favorites, addFavorites } = useContext(ContextAppProvider)
  return (
    <button
      className={styles.button}
      onClick={() => {
        addFavorites(idCharacter)
      }}
      data-testid="action-component"
    >
      {favorites.find((id) => id === idCharacter) ? (
        <svg
          width={characterDetails ? 24 : 14}
          height={characterDetails ? 24 : 14}
          viewBox="0 0 24 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.buttonFav}
          data-testid="favorite-icon"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 3.86354L6 0.221924L0 3.86354V11.667L12 21.8982L24 11.667V3.86354L18 0.221924L12 3.86354Z"
            fill="currentColor"
          />
        </svg>
      ) : (
        <svg
          width={characterDetails ? 24 : 14}
          height={characterDetails ? 24 : 14}
          viewBox="0 0 26 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 1.72192L7.51885 0.867058L7 0.55215L6.48115 0.867058L7 1.72192ZM13 5.36354L12.4812 6.21841L13 6.53332L13.5188 6.21841L13 5.36354ZM1 5.36354L0.481151 4.50868L0 4.8007V5.36354H1ZM1 13.167H0V13.6285L0.351203 13.928L1 13.167ZM13 23.3982L12.3512 24.1592L13 24.7123L13.6488 24.1592L13 23.3982ZM25 13.167L25.6488 13.928L26 13.6285V13.167H25ZM25 5.36354H26V4.8007L25.5188 4.50868L25 5.36354ZM19 1.72192L19.5189 0.867058L19 0.55215L18.4812 0.867058L19 1.72192ZM6.48115 2.57679L12.4812 6.21841L13.5188 4.50868L7.51885 0.867058L6.48115 2.57679ZM1.51885 6.21841L7.51885 2.57679L6.48115 0.867058L0.481151 4.50868L1.51885 6.21841ZM2 13.167V5.36354H0V13.167H2ZM13.6488 22.6373L1.6488 12.406L0.351203 13.928L12.3512 24.1592L13.6488 22.6373ZM13.6488 24.1592L25.6488 13.928L24.3512 12.406L12.3512 22.6373L13.6488 24.1592ZM26 13.167V5.36354H24V13.167H26ZM25.5188 4.50868L19.5189 0.867058L18.4812 2.57679L24.4812 6.21841L25.5188 4.50868ZM18.4812 0.867058L12.4812 4.50868L13.5188 6.21841L19.5189 2.57679L18.4812 0.867058Z"
            fill="currentColor"
          />
        </svg>
      )}
    </button>
  )
}
