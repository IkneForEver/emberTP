import { helper } from '@ember/component/helper';

export function concat(...params) {
  return (params).reduce((a, b) => a+b)
}

export default helper(concat);
