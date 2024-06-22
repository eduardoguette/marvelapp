import { fireEvent, render, screen } from '@testing-library/react'
import React, { useState } from 'react'
import { describe, expect, it } from 'vitest'
import { Action } from '../../../src/components/Characters/Action'
import { ContextAppProvider } from '../../../src/context/AppProvider'
import { updateFavorites } from '../../../src/utils'

const MockContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState<number[]>([])

  const addFavorites = (id: number) => {
    const newFavorites = updateFavorites(favorites, id)
    setFavorites(newFavorites)
  }

  return (
    <ContextAppProvider.Provider
      value={{
        favorites,
        addFavorites,
        data: null,
        filter: '',
        setFiler: () => {},
        setData: () => {}
      }}
    >
      {children}
    </ContextAppProvider.Provider>
  )
}

describe('Pruebas en <Action/>', () => {
  const mockCharacterId = 1234
  const renderComponent = (idCharacter: number, characterDetails?: boolean) => {
    render(
      <MockContextProvider>
        <Action idCharacter={idCharacter} characterDetails={characterDetails} />
      </MockContextProvider>
    )
  }
  it('Debe cambiar el ícono cuando el usuario añada a favoritos el character', () => {
    renderComponent(mockCharacterId)
    

    const button = screen.getByTestId('action-component')

    expect(button.innerHTML).toContain('heart-black.svg')

    fireEvent.click(button)

    expect(button.innerHTML).toContain('heart.svg')
  })

  it('Debe cambiar el ícono cuando el usuario quite de favoritos el character', () => {
    renderComponent(mockCharacterId)

    const button = screen.getByTestId('action-component')
    fireEvent.click(button) // Agregar a favoritos
    fireEvent.click(button) // Quitar de favoritos

    expect(button.innerHTML).toContain('heart-black.svg')
  })

  it('Debe ajustar el tamaño del ícono según la propiedad characterDetails', () => {
    renderComponent(mockCharacterId, true)

    const buttonWithDetails = screen.getByTestId('action-component')
    const imgWithDetails = buttonWithDetails.querySelector('img')

    expect(imgWithDetails?.height).toBe(24)
    expect(imgWithDetails?.width).toBe(24)
  })

  it('Debe mantener el tamaño del ícono cuando characterDetails es false', () => {
    renderComponent(mockCharacterId, false);

    const buttonWithoutDetails = screen.getByTestId('action-component');
    const imgWithoutDetails = buttonWithoutDetails.querySelector('img');

    expect(imgWithoutDetails?.height).toBe(12);
    expect(imgWithoutDetails?.width).toBe(12);
  });
})
