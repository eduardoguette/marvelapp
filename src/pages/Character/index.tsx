import { characters } from '@/api'
import { CommicsCard, Skeleton } from '@/components'
import Carrousel from '@/components/Carrousel'
import { Action } from '@/components/Characters'
import { Loader } from '@/components/commons/Loader'
import { Characters } from '@/types'
import { CommicsData } from '@/types/CharactersCommics'
import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { AnimatePresence, motion } from 'framer-motion'
import { useParams } from 'react-router-dom'
import styles from './character.module.css'

export const Character = () => {
  const { id } = useParams()
  const { isLoading, data, isError } = useQuery<AxiosResponse<Characters>>({
    queryFn: () => characters.getById(id as string),
    queryKey: ['character', id],
    staleTime: Infinity,
  })
  const { data: dataCommics, isLoading: isLoadingCommics } = useQuery<
    AxiosResponse<CommicsData>
  >({
    queryFn: () => characters.getCommics(id as string),
    queryKey: ['character/commics', id],
    staleTime: Infinity,
  })

  if (isLoading || isLoadingCommics)
    return (
      <>
        <Skeleton
          style={{
            width: '100%',
            height: '320px',
          }}
        />
      </>
    )

  if (!data) return <div>Not found</div>
  if (isError) return <div>Error</div>

  const character = data.data?.data?.results?.[0]

  if (!character) return <div>No character found</div>

  return (
    <div>
      <section className={styles.characterHero}>
        <motion.article
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            x: 50,
          }}
          className={styles.characterCard}
        >
          <img
            className={styles.characterImage}
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
          />
          <div className={styles.characterInfo}>
            <header className={styles.characterCardHeader}>
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                className={styles.characterTitle}
              >
                {character.name}
              </motion.h2>
              <Action idCharacter={Number(id)} characterDetails />
            </header>
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
            >
              {character.description}
            </motion.p>
          </div>
        </motion.article>
      </section>
      {dataCommics && (
        <section className={styles.characterContainer}>
          <article className={styles.characterCommics}>
            <h2 className={styles.characterTitle}>Commics</h2>
            {dataCommics?.data.data.results.length > 0 && (
              <AnimatePresence>
                <Carrousel>
                  {dataCommics?.data.data.results.map((commic, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.3 }}
                    >
                      <Carrousel.Item>
                        <CommicsCard commic={commic} />
                      </Carrousel.Item>
                    </motion.div>
                  ))}
                </Carrousel>
              </AnimatePresence>
            )}
            {!isLoadingCommics &&
              dataCommics?.data.data.results.length === 0 && (
                <p>No commics found</p>
              )}
            {isLoadingCommics && <Loader />}
          </article>
        </section>
      )}
    </div>
  )
}
