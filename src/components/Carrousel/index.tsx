import { FC, ReactNode } from 'react'
import styles from './carrousel.module.css'
interface CarrouselProps {
  children: ReactNode
}

const Carrousel: FC<CarrouselProps> & { Item: FC<CarrouselItemProps> } = ({
  children
}) => {
  return <ul className={styles.carrouselList}>{children}</ul>
}

interface CarrouselItemProps {
  children: ReactNode
}

const CarrouselItem: FC<CarrouselItemProps> = ({ children }) => {
  
  return <li className={styles.carrouselItem}>{children}</li>
}

Carrousel.Item = CarrouselItem

export default Carrousel
