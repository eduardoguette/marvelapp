import MarvelApp from '@/MarvelApp'
import { Character, Favorites, Home } from '@/pages'
import { Navigate, createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MarvelApp />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'character/:id',
        element: <Character />
      },
      {
        path: 'favorites',
        element: <Favorites />
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to={'/'} />
  }
])
