export const cache = {
  set: <T>(content: T, key: string): void => {
    localStorage.setItem(
      key,
      JSON.stringify({ ...content, lastUpdate: new Date().getTime() })
    );
  },
  get: <T>(key: string): T | null => {
    const data = localStorage.getItem(key);
    if (!data) return null;

    const parsedData = JSON.parse(data) as T & { lastUpdate: number };
    const actualDate = new Date().getTime();
    const lastUpdate = parsedData.lastUpdate;
    const diff = actualDate - lastUpdate;

    if (diff > 1000 * 60 * 60 * 24) return null;

    return parsedData;
  }
};
