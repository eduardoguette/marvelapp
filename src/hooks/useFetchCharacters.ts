import { characters } from '@/api'
import { ContextAppProvider } from '@/context'
import { Characters } from '@/types'
import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { useContext, useEffect } from 'react'

export const useFetchCharacters = () => {
  const { setData, filter, setLoading, loading } =
    useContext(ContextAppProvider)
  const {
    isLoading,
    data,
    refetch: refetchAll,
  } = useQuery<AxiosResponse<Characters>>({
    queryFn: characters.getAll,
    queryKey: ['characters'],
  })

  const {
    isLoading: isLoadingHeroesFiltered,
    data: heroesFiltered,
    refetch,
  } = useQuery<AxiosResponse<Characters>>({
    enabled: !!filter,
    queryFn: () => characters.getByName(filter),
    queryKey: ['charactersFiltered', filter],
  })

  useEffect(() => {
    if (!isLoading && data) {
      setData(data.data.data.results)
    }
  }, [data, setData, isLoading])

  useEffect(() => {
    if (filter.trim().length > 0) {
      refetch()
    } else if (data) {
      setData(data.data.data.results)
    } else {
      refetchAll()
    }
  }, [refetch, setData, data, filter, isLoading, refetchAll])

  useEffect(() => {
    if (!isLoadingHeroesFiltered && heroesFiltered) {
      setData(heroesFiltered.data.data.results)
    }
  }, [heroesFiltered, setData, isLoadingHeroesFiltered])

  useEffect(() => {
    setLoading(isLoading || isLoadingHeroesFiltered || false)
  }, [isLoading, isLoadingHeroesFiltered, loading, setLoading])

  return { loading }
}
