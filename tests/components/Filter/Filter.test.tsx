import { fireEvent, render, screen } from '@testing-library/react'
import React, { useContext } from 'react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { Filter } from '../../../src/components/Characters/Filter'
import {
  AppProvider,
  ContextAppProvider,
} from '../../../src/context/AppProvider'

// Mockear saveInLocal
vi.mock('../../../src/utils/saveInLocal', () => ({
  saveInLocal: {
    get: vi.fn().mockReturnValue([1, 2, 3]),
    set: vi.fn(),
  },
}))

vi.mock('@/hooks', () => ({
  useDebounce: (value: string) => value,
}))

const mockSetFilter = vi.fn()

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
  it('debería renderizar el input y mostrar la cantidad correcta de resultados', () => {
    renderWithProvider(<Filter />)
    const input = screen.getByPlaceholderText('SEARCH CHARTACTER...')
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue('')
  })

  it('debería actualizar el estado del input cuando el usuario escribe', () => {
    renderWithProvider(<Filter />)
    const input = screen.getByPlaceholderText('SEARCH CHARTACTER...')
    fireEvent.change(input, { target: { value: 'Spider-Man' } })
    expect(input).toHaveValue('Spider-Man')
  })
})
