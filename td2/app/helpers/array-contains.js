import { helper } from '@ember/component/helper';

export function arrayContains([array, elem]/*, hash*/) {
  return array.includes(elem);
}

export default helper(arrayContains);
