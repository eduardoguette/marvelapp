import { characters } from '@/api'
import { CharactersList } from '@/components/Characters'
import { Filter } from '@/components/Characters/Filter'
import { ContextAppProvider } from '@/context'

import { Loader } from '@/components/commons/Loader'
import { Characters } from '@/types'
import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { useContext, useEffect } from 'react'
import styles from './favorites.module.css'
export const Favorites = () => {
  const { setData, filter, favorites } = useContext(ContextAppProvider)

  const { isLoading, data: dataResult } = useQuery<AxiosResponse<Characters>>({
    queryFn: characters.getAll,
    queryKey: ['characters']
  })

  useEffect(() => {
    if (dataResult)
      setData(
        dataResult.data.data.results
          .filter((item) =>
            favorites.find((itemCharacter) => itemCharacter === item.id)
          )
          .filter((item) =>
            item.name.toLowerCase().includes(filter.toLowerCase())
          )
      )
  }, [dataResult, filter, setData, favorites])

  if (isLoading) return <Loader />
  return (
    <section className={styles.container}>
      <h2 className={styles.h2}>Favorites</h2>
      <Filter />
      <CharactersList />
    </section>
  )
}
