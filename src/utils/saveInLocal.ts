export const saveInLocal = {
  set: <T>(key: string, content: T): void => {
    localStorage.setItem(key, JSON.stringify(content))
  },
  get: <T>(key: string): T | null => {
    const data = localStorage.getItem(key)
    if (!data) return null

    const parsedData = JSON.parse(data) as T

    return parsedData
  },
}
