import { fromJS } from "./node_modules/immutable/dist/immutable";

export default function accessImmutableObject(object, array) {
  const getImmutableObject = fromJS(object);
  return getImmutableObject.getIn(array);
}
