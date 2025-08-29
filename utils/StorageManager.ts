import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV();

export function saveStorageValue(key: string, value: unknown) {
  storage.set(key, JSON.stringify(value));
}

export function loadStorageValue<T>(key: string, fallback: T): T {
  const str = storage.getString(key);
  return str ? (JSON.parse(str) as T) : fallback;
}

export function deleteStorageValue(key: string) {
  storage.delete(key);
}

//isAppleHealthConneted
