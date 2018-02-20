import { helper } from '@ember/component/helper';

export function formatCurrency([value]/*, hash*/) {
	value *= 100
	let sign = '€'
	let cents = value%100
	let round = Math.floor(value/100)
	return `${round},${cents}${sign}`
}

export default helper(formatCurrency);
