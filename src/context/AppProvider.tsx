import { CharactersResult } from '@/types'
import { saveInLocal, updateFavorites } from '@/utils'

import { ReactNode, createContext, useEffect, useState } from 'react'

interface IProvider {
  data: null | CharactersResult[]
  filter: string
  setFilter: (filter: string) => void
  favorites: number[]
  addFavorites: (id: number) => void
  setData: (data: CharactersResult[]) => void
  loading: boolean
  setLoading: (loading: boolean) => void
}

export const ContextAppProvider = createContext<IProvider>({
  data: null,
  filter: '',
  setFilter: () => {},
  setData: () => {},
  favorites: [],
  addFavorites: () => {},
  loading: true,
  setLoading: () => {},
})

interface AppProvider {
  children: ReactNode
}

export const AppProvider: React.FC<AppProvider> = ({ children }) => {
  const [filter, setFilter] = useState('')
  const [favorites, setFavorites] = useState<number[]>([])

  useEffect(() => {
    setFavorites(saveInLocal.get('heroes') || [])
  }, [])

  const [data, setData] = useState<CharactersResult[] | null>(null)

  const [loading, setLoading] = useState(true)

  const onSetLoading = (loading: boolean) => {
    setLoading(loading)
  }

  const addFavorites = (id: number) => {
    const newFavorites = updateFavorites(favorites, id)
    setFavorites(newFavorites)
    saveInLocal.set('heroes', newFavorites)
  }
  return (
    <ContextAppProvider.Provider
      value={{
        favorites,
        data,
        setData,
        filter,
        setFilter,
        addFavorites,
        loading,
        setLoading: onSetLoading,
      }}
    >
      {children}
    </ContextAppProvider.Provider>
  )
}
