import heart from '@/assets/heart.svg'
import { ContextAppProvider } from '@/context'
import { FC, useContext } from 'react'
import { Link } from 'react-router-dom'
import styles from '../characters.module.css'
export const LikeCounter: FC = () => {
  const { favorites } = useContext(ContextAppProvider)
  if (favorites.length === 0) return
  return (
    <Link className={styles.likeCounter} to="/favorites">
      <img src={heart} height={24} width={24} alt="Image favorites" />
      <span>{favorites.length}</span>
    </Link>
  )
}
