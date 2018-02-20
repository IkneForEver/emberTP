import { helper } from '@ember/component/helper';

export function plural([count, zero, one, more]/*, hash*/) {
	if(count <= 0) {
		return zero
	} else if(count === 1) {
		return one
	} else {
		return more
	}
}

export default helper(plural);
