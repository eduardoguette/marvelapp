export const updateFavorites = (favorites: number[], id: number): number[] => {
  if (favorites.includes(id)) {
    return favorites.filter((favorite) => favorite !== id)
  }
  return [...favorites, id]
}
