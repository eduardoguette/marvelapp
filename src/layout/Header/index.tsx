import logo from '@/assets/logo.svg'
import { LikeCounter } from '@/components/Characters'
import { Link } from 'react-router-dom'
import styles from './header.module.css'
export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to={'/'}>
        <img src={logo} alt="Logo Marvelapp" />
      </Link>
      <LikeCounter />
    </header>
  )
}
