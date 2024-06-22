import { render, screen } from '@testing-library/react'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { describe, expect, it, vi } from 'vitest'
 
import { Header } from '../../../src/layout/Header/index'

 
vi.mock('@/components/Characters', () => ({
  LikeCounter: () => <div data-testid="like-counter" />
}))

describe('Header Component', () => {
  it('debería renderizar correctamente', () => {
    const { container } = render(
      <Router>
        <Header />
      </Router>
    )
    expect(container).toMatchSnapshot()
  })

  it('debería contener un enlace a la ruta "/"', () => {
    render(
      <Router>
        <Header />
      </Router>
    )

    const linkElement = screen.getByRole('link')
    expect(linkElement.getAttribute('href')).toBe('/')
  })

  it('debería renderizar el logo con las propiedades adecuadas', () => {
    render(
      <Router>
        <Header />
      </Router>
    )

    const logoElement = screen.getByAltText('Logo Marvelapp')
    expect(logoElement).not.toBeNull()
    expect(logoElement.getAttribute('src')).toBe('/src/assets/logo.svg')
    expect(logoElement.getAttribute('width')).toBe('130')
    expect(logoElement.getAttribute('height')).toBe('52')
 
  })

  it('debería renderizar el componente LikeCounter', () => {
    render(
      <Router>
        <Header />
      </Router>
    )

    const likeCounterElement = screen.getByTestId('like-counter')
    expect(likeCounterElement).not.toBeNull()

  })
})
