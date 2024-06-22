import { Mock, describe, expect, it, vi } from 'vitest'
import { defaults } from '../../src/api'
import { characters } from '../../src/api/characters'
import { marvelappApi } from '../../src/api/config'

// Mockear marvelappApi
vi.mock('../../src/api/config.ts', () => ({
  marvelappApi: {
    get: vi.fn()
  }
}))

describe('characters API', () => {
  it('getAll debería llamar a marvelappApi.get con la URL correcta y coincidir con el snapshot', async () => {
    const mockResponse = { data: { results: [] } }

    ;(marvelappApi.get as unknown as Mock).mockResolvedValue(mockResponse)

    const response = await characters.getAll()
    expect(marvelappApi.get).toHaveBeenCalledWith(defaults.getAllCharacters)
    expect(response).toMatchSnapshot()
  })
  it('getById debería llamar a marvelappApi.get con la URL correcta y coincidir con el snapshot', async () => {
    const mockResponse = {
      data: { results: [{ id: '1', name: 'Spider-Man' }] }
    }

    ;(marvelappApi.get as unknown as Mock).mockResolvedValue(mockResponse)

    const id = '1'
    const response = await characters.getById(id)

    expect(marvelappApi.get).toHaveBeenCalledWith(
      `${defaults.getAllCharacters}/${id}`
    )
    expect(response.data.results[0].id).toBe('1')
    expect(Array.isArray(response.data.results)).toBe(true)
    expect(response).toMatchSnapshot()
  })

  it('getCommics debería llamar a marvelappApi.get con la URL correcta y coincidir con el snapshot', async () => {
    const mockResponse = { data: { results: [] } }

    ;(marvelappApi.get as unknown as Mock).mockResolvedValue(mockResponse)

    const id = '1'
    const response = await characters.getCommics(id)
    expect(marvelappApi.get).toHaveBeenCalledWith(
      `${defaults.getAllCharacters}/${id}/comics`
    )
    expect(Array.isArray(response.data.results)).toBe(true)
    expect(response).toMatchSnapshot()
  })
})
