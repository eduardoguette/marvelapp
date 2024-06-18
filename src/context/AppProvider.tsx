import { CharactersResult } from '@/types'

import { ReactNode, createContext, useState } from 'react'

interface IProvider {
  data: null | CharactersResult[]
  filter: string
  setFiler: (filter: string) => void
  favorites: number[]
  addFavorites: (id: number) => void
  setData: (data: CharactersResult[]) => void
}

export const ContextAppProvider = createContext<IProvider>({
  data: null,
  filter: '',
  setFiler: () => {},
  setData: () => {},
  favorites: [],
  addFavorites: () => {}
})

interface AppProvider {
  children: ReactNode
}
export const AppProvider: React.FC<AppProvider> = ({ children }) => {
  const [filter, setFiler] = useState('')
  const [favorites, setFavorites] = useState<number[]>([])
  const [data, setData] = useState<CharactersResult[] | null>(null)

  const addFavorites = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favorite) => favorite !== id))
      return
    }
    setFavorites([...favorites, id])
  }

  return (
    <ContextAppProvider.Provider
      value={{
        favorites,
        data,
        setData,
        filter,
        setFiler,
        addFavorites
      }}
    >
      {children}
    </ContextAppProvider.Provider>
  )
}
