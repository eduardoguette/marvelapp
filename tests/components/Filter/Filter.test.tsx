import { fireEvent, render, screen } from '@testing-library/react'
import React, { useContext } from 'react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { Filter } from '../../../src/components/Characters/Filter'
import {
  AppProvider,
  ContextAppProvider
} from '../../../src/context/AppProvider'

// Mockear saveInLocal
vi.mock('../../../src/utils/saveInLocal', () => ({
  saveInLocal: {
    get: vi.fn().mockReturnValue([1, 2, 3]),
    set: vi.fn()
  }
}))

describe('Filter Component', () => {
  beforeEach(() => {
    // Asegúrate de limpiar los mocks antes de cada prueba
    vi.clearAllMocks()
  })

  const renderWithProvider = (ui: React.ReactElement) => {
    return render(<AppProvider>{ui}</AppProvider>)
  }

  const mockFilter = 'A-BOMB (HAS)'
  const TestComponent = () => {
    const { filter } = useContext(ContextAppProvider)
    return (
      <div>
        <div data-testid="filter">{filter}</div>
        <Filter />
      </div>
    )
  }
  it('Debe actualizar correctamente el estado de filter', () => {
    renderWithProvider(<TestComponent />)

    const input = screen.getByPlaceholderText('SEARCH CHARTACTER...')

    fireEvent.change(input, { target: { value: mockFilter } })

    const value = (input as HTMLInputElement).value

    expect(value).toBe(mockFilter)
  })

  it('Debe setear el filtro a mockFilter', () => {
    renderWithProvider(<TestComponent />)
    const input = screen.getByPlaceholderText('SEARCH CHARTACTER...')
    fireEvent.change(input, { target: { value: mockFilter } })

    expect(screen.getByTestId('filter').textContent).toBe(mockFilter);
      
  })
})
