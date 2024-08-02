import { Commics } from '@/types/CharactersCommics'
import { FC } from 'react'
import style from './commics.module.css'
interface ICommicsCardProps {
  commic: Commics
}

export const CommicsCard: FC<ICommicsCardProps> = ({ commic }) => {
  if (!commic) return <></>

  const date = commic?.modified?.split('-').shift()

  return (
    <article>
      <img
        className={style.commicImage}
        src={`${commic.thumbnail.path}.${commic.thumbnail.extension}`}
        alt={commic.title}
        height={252.79}
        width={168.53}
      />
      <p className={style.commicTitle}>{commic.title}</p>

      <span className={style.commicCaptionDate}>{date}</span>
    </article>
  )
}
