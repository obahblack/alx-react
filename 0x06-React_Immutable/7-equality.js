import { is } from "./node_modules/immutable/dist/immutable";

export default function areMapsEqual(map1, map2) {
  if (is(map1, map2)) {
    return true;
  } else {
    return false;
  }
}
