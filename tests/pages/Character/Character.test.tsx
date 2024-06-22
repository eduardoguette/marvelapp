import { useQuery } from '@tanstack/react-query'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import { Mock, describe, expect, it, vi } from 'vitest'
import { Character } from '../../../src/pages/Character'

const mockCharacterData = {
  data: {
    data: {
      results: [
        {
          id: '1',
          name: 'John Doe',
          description: 'Test description',
          thumbnail: {
            path: 'https://example.com/image',
            extension: 'jpg'
          }
        }
      ]
    }
  }
}
const mockCommicsData = {
  data: {
    data: {
      results: [
        {
          id: '1',
          title: 'Amazing Spider-Man',
          thumbnail: {
            path: 'https://example.com/commic-image',
            extension: 'jpg'
          },
          modified: '2021-04-2'
        }
      ]
    }
  }
}

vi.mock('react-router-dom', () => ({
  useParams: vi.fn()
}))

vi.mock('@tanstack/react-query', () => ({
  useQuery: vi.fn()
}))

describe('Character Component', () => {
  const mockUseParams = useParams as Mock
  const mockUseQuery = useQuery as Mock

  it('Debe mostrar el Skeleton mientras está cargando', () => {
    mockUseParams.mockReturnValue({ id: '1' })
    mockUseQuery.mockReturnValue({
      isLoading: true,
      data: null,
      isError: false
    })

    render(<Character />)

    const loader = screen.getByTestId('skeleton')

    expect(loader).not.toBeNull()
  })

  it('Debe mostrar el personaje si se ha cargado correctamente', () => {


 
    mockUseParams.mockReturnValue({ id: '1' })
    mockUseQuery.mockReturnValue({
      isLoading: false,
      data: mockCharacterData,
      isError: false
    })

 

    const { container } = render(<Character />);
    

    expect(container).toMatchSnapshot()

    const name = screen.getByText('John Doe')
    const description = screen.getByText('Test description')
    const image = screen.getByAltText('John Doe')

    expect(name).not.toBeNull()
    expect(description).not.toBeNull()
    expect(image).not.toBeNull()
    expect(image.getAttribute('src')).toBe('https://example.com/image.jpg')




  })

  it("Debe renderizar el commic correctamente ", () => {


    mockUseParams.mockReturnValue({ id: '1' })
    mockUseQuery.mockReturnValue({
      isLoading: false,
      data: mockCommicsData,
      isError: false
    })
    const { container } = render(<Character />);
    

    expect(container).toMatchSnapshot()

    expect(screen.findByText('Amazing Spider-Man')).not.toBeNull()
    expect(screen.getByAltText('Amazing Spider-Man')).not.toBeNull()
    expect(screen.getByAltText('Amazing Spider-Man').getAttribute('src')).toBe('https://example.com/commic-image.jpg')

  })
})
