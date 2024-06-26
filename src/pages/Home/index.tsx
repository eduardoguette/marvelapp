import { characters } from '@/api'
import { CharactersList } from '@/components/Characters'
import { Filter } from '@/components/Characters/Filter'
import { Loader } from '@/components/commons/Loader'
import { ContextAppProvider } from '@/context'
import { Characters } from '@/types'
import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { motion } from 'framer-motion'
import { useContext, useEffect } from 'react'
import styles from './home.module.css'

export const Home: React.FC = () => {
  const { setData, filter } = useContext(ContextAppProvider)

  const { isLoading, data } = useQuery<AxiosResponse<Characters>>({
    queryFn: characters.getAll,
    queryKey: ['characters']
  })

  useEffect(() => {
    if (!isLoading && data) {
      setData(
        data.data.data.results.filter((item) =>
          item.name.toLowerCase().includes(filter.toLowerCase())
        )
      )
    }
  }, [data, filter, setData, isLoading])

  if (isLoading) return <Loader />

  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      exit={{
        opacity: 0
      }}
      className={styles.container}
    >
      <Filter />
      <CharactersList />
    </motion.div>
  )
}
