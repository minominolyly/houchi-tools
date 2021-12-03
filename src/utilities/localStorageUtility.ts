export function setItem<T>(key: string, data: T): boolean {
  try {
    const value = JSON.stringify(data);
    window.localStorage.setItem(key, value);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export function getItem<T>(key: string): T | undefined {
  try {
    const value = window.localStorage.getItem(key);

    if (!value) {
      return undefined;
    }

    return JSON.parse(value) as T;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
