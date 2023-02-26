export function replaceDashesWithSpaces(string: string) {
  return string.replaceAll('-', ' ');
}

export function isObjInArray(array: object[], object: object) {
  return array.some((item) => Object.keys(item).every((key) => item[key as keyof object] === object[key as keyof object]));
}

export function getItem(key: string) {
  return JSON.parse(localStorage.getItem(key)!);
}

export function setItem<T>(key: string, value: T) {
  return localStorage.setItem(key, JSON.stringify(value));
}
