import { FC } from 'react'
import style from './main.module.css'
interface IMainProps {
  children: React.ReactNode
}
export const Main: FC<IMainProps> = ({ children }) => {
  return <main className={style.main}>{children}</main>
}
