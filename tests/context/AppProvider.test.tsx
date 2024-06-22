import { fireEvent, render, screen } from '@testing-library/react'
import React, { useContext } from 'react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { AppProvider, ContextAppProvider } from '../../src/context/AppProvider'

// Mockear saveInLocal
vi.mock('../../src/utils/saveInLocal', () => ({
  saveInLocal: {
    get: vi.fn().mockReturnValue([1, 2, 3]),
    set: vi.fn()
  }
}))

describe('AppProvider', () => {
  beforeEach(() => {
    // Asegúrate de limpiar los mocks antes de cada prueba
    vi.clearAllMocks()
  })

  const renderWithProvider = (ui: React.ReactElement) => {
    return render(<AppProvider>{ui}</AppProvider>)
  }

  it('Debe inicializar correctamente el estado de favoritos desde el almacenamiento local', () => {
    const TestComponent = () => {
      const { favorites } = useContext(ContextAppProvider)
      return <div data-testid="favorites">{favorites.length}</div>
    }

    renderWithProvider(<TestComponent />)
    expect(screen.getByTestId('favorites').textContent).toBe('3')
  })

  it('Debe actualizar correctamente el estado de data', () => {
    const mockData = [
      { id: 1, name: 'Hero 1' },
      { id: 2, name: 'Hero 2' }
    ]

    const TestComponent = () => {
      const { data, setData } = useContext(ContextAppProvider)
      return (
        <div>
          <div data-testid="data">
            {data?.map((item) => item.name).join(', ')}
          </div>
          <button onClick={() => setData(mockData)} data-testid="set-data">
            Set Data
          </button>
        </div>
      )
    }

    renderWithProvider(<TestComponent />)

    fireEvent.click(screen.getByTestId('set-data'))
    expect(screen.getByTestId('data').textContent).toBe('Hero 1, Hero 2')
  })
})
