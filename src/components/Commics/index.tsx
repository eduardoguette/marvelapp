import { Commics } from '@/types/CharactersCommics'
import { FC } from 'react'
import style from './commics.module.css'
interface ICommicsCardProps {
  commic: Commics
}

export const CommicsCard: FC<ICommicsCardProps> = ({ commic }) => {
  return (
    <article>
      <img
        src={`${commic.thumbnail.path}.${commic.thumbnail.extension}`}
        alt=""
        height={252.79}
        width={168.53}
      />
      <p className={style.commicTitle}>{commic.title}</p>
      <span className={style.commicCaptionDate}>{new Date(commic.modified).getFullYear()}</span>
    </article>
  )
}
