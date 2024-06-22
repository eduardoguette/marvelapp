import { describe, expect, it } from 'vitest'
import { updateFavorites } from '../../src/utils/updateFavorites'
describe('Pruebas en updateFavorites', () => {
  const initIds = [123123, 12398, 12323]
  it('Debe agregar los id a la lista que le pasamos', () => {
    const result = updateFavorites(initIds, 1232)
    expect(result).toEqual([...initIds, 1232])
  })

  it('Debe filtrar si el id que le hemos pasado ya existe', () => {
    const result = updateFavorites(initIds, 123123)
    expect(result).toEqual([12398, 12323])
  })
})
