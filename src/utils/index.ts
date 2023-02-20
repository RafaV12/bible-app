export function capitalizeFirstLetter(string: string) {
  return string.replace(/\w/, (c) => c.toUpperCase());
}

export function replaceDashesWithSpaces(string: string) {
  return string.replaceAll('-', ' ');
}

export function isObjInArray(array: object[], object: object) {
  return array.some((item) => Object.keys(item).every((key) => item[key as keyof object] === object[key as keyof object]));
}
