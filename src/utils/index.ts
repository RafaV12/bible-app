import { object } from "prop-types";
import { isUint8ClampedArray } from "util/types";

export function capitalizeFirstLetter(string: string) {
  return string.replace(/\w/, (c) => c.toUpperCase());
}

export function replaceDashesWithSpaces(string: string) {
  return string.replaceAll('-', ' ');
}

