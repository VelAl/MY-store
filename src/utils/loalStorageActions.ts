export const setLocalStorageItem = <T>(key: string, value: T): void => {
  try {
    const stringified = JSON.stringify(value);
    localStorage.setItem(key, stringified);
  } catch (e) {
    console.error(`Failed to stringify value for key "${key}":`, e);
  }
};

export const getLocalStorageItem = <T>(key: string): T | undefined => {
  const saved = localStorage.getItem(key);
  if (saved === null || saved.trim() === "") return;

  try {
    const res = JSON.parse(saved);
    return res as T;
  } catch {
    return;
  }
};
