import { characters } from '@/api'
import { CommicsCard } from '@/components'
import Carrousel from '@/components/Carrousel'
import { Characters } from '@/types'
import { CommicsData } from '@/types/CharactersCommics'
import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { useParams } from 'react-router-dom'
import styles from './character.module.css'

export const Character = () => {
  const { id } = useParams()
  const { isLoading, data, isError } = useQuery<AxiosResponse<Characters>>({
    queryFn: () => characters.getById(id as string),
    queryKey: ['character', id],
    staleTime: Infinity
  })
  const { data: dataCommics } = useQuery<AxiosResponse<CommicsData>>({
    queryFn: () => characters.getCommics(id as string),
    queryKey: ['character/commics', id],
    staleTime: Infinity
  })

  if (isLoading) return <div>Loading...</div>
  if (!data) return <div>Not found</div>
  if (isError) return <div>Error</div>

  const character = data.data?.data?.results?.[0]
  console.log(character)
  if (!character) return <div>No character found</div>

  return (
    <>
      <section className={styles.characterHero}>
        <article className={styles.characterCard}>
          <img
            className={styles.characterImage}
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
          />

          <div className={styles.characterInfo}>
            <h2 className={styles.characterTitle}>{character.name}</h2>
            <p>{character.description}</p>
          </div>
        </article>
      </section>
      <section className={styles.characterContainer}>
        <article className={styles.characterCommics}>
          <h2 className={styles.characterTitle}>Commics</h2>
          <Carrousel>
            {dataCommics?.data.data.results.map((commic) => (
              <Carrousel.Item key={commic.id}>
                <CommicsCard commic={commic} />
              </Carrousel.Item>
            ))}
          </Carrousel>
        </article>
      </section>
    </>
  )
}
