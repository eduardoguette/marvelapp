import { fireEvent, render, screen } from '@testing-library/react'
import React, { useState } from 'react'
import { describe, expect, it, vi } from 'vitest'
import { Action } from '../../../src/components/Characters/Action'
import { ContextAppProvider } from '../../../src/context/AppProvider'

const MockContextProvider = ({ children, favorites, addFavorites }) => {
  const [favState, setFavState] = useState(favorites)

  return (
    <ContextAppProvider.Provider
      value={{
        data: null,
        filter: '',
        setFilter: () => {},
        setData: () => {},
        favorites: favState,
        addFavorites,
        loading: true,
        setLoading: () => {},
      }}
    >
      {children}
    </ContextAppProvider.Provider>
  )
}

describe('Pruebas en <Action/>', () => {
  const mockAddFavorites = vi.fn()

  const renderComponent = (
    idCharacter: number,
    characterDetails?: boolean,
    favorites: number[] = []
  ) => {
    render(
      <MockContextProvider
        addFavorites={mockAddFavorites}
        favorites={favorites}
      >
        <Action idCharacter={idCharacter} characterDetails={characterDetails} />
      </MockContextProvider>
    )
  }

  it('debería mostrar el botón con el ícono correcto si el personaje es favorito', () => {
    renderComponent(1, true, [1])
    const button = screen.getByTestId('action-component')
    expect(button).toBeInTheDocument()
    const favoriteIcon = screen.getByTestId('favorite-icon')
    expect(favoriteIcon).toBeInTheDocument()
  })

  it('debería mostrar el botón con el ícono correcto si el personaje no es favorito', () => {
    renderComponent(3, false, [1, 2])
    const button = screen.getByTestId('action-component')
    expect(button).toBeInTheDocument()
    expect(button.querySelector('svg')).not.toHaveClass('buttonFav')
  })

  it('debería llamar a addFavorites cuando se hace clic en el botón', () => {
    renderComponent(3, false)
    const button = screen.getByTestId('action-component')
    fireEvent.click(button)
    expect(mockAddFavorites).toHaveBeenCalledWith(3)
  })
})
