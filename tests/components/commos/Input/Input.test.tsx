import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { describe, expect, it } from 'vitest'
import { Input } from '../../../../src/components/commons/Input/index'

describe('Input Component', () => {
  it('debería renderizar correctamente', () => {
    render(<Input id="search" placeholder="Buscar..." />)

    const inputElement = screen.getByPlaceholderText('Buscar...')
    expect(inputElement).not.toBeNull()
  })

  it('debería aplicar los props correctamente', () => {
    render(<Input id="search" placeholder="Buscar..." />)

    const inputElement = screen.getByPlaceholderText('Buscar...')
    expect(inputElement.getAttribute('id')).toBe('search')
    expect(inputElement.getAttribute('placeholder')).toBe('Buscar...')
  })

  it('debería permitir al usuario escribir en el input', () => {
    render(<Input id="search" placeholder="Buscar..." />)

    const inputElement = screen.getByPlaceholderText(
      'Buscar...'
    ) as HTMLInputElement
    fireEvent.change(inputElement, { target: { value: 'Test' } })
    expect(inputElement.value).toEqual('Test')
  })

  it('debería renderizar la imagen del icono de búsqueda correctamente', () => {
    render(<Input id="search" placeholder="Buscar..." />)

    const iconElement = screen.getByAltText('sear')
    expect(iconElement).not.toBeNull()
    expect(iconElement.getAttribute('src')).toBe('/src/assets/search.svg')
  })

  it('debería aplicar las clases CSS correctamente', () => {
    const { container } = render(<Input id="search" placeholder="Buscar..." />)

    expect(container).toMatchSnapshot()
    const inputElement = screen.getByPlaceholderText(
      'Buscar...'
    ) as HTMLInputElement
    expect(inputElement.getAttribute('placeholder')).toBe('Buscar...') 
    expect(inputElement.getAttribute('id')).toBe('search')
  })
})
