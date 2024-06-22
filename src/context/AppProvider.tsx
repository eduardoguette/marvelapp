import { CharactersResult } from '@/types'
import { saveInLocal, updateFavorites } from '@/utils'

import { ReactNode, createContext, useEffect, useState } from 'react'

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

  useEffect(() => {
    setFavorites(saveInLocal.get('heroes') || [])
  }, [])

  const [data, setData] = useState<CharactersResult[] | null>(null)

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
        setFiler,
        addFavorites
      }}
    >
      {children}
    </ContextAppProvider.Provider>
  )
}
