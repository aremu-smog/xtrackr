const ONE_THOUSAND = 1000
const ONE_MILLION = 1000000
const ONE_BILLION = 1000000000
export const formatNumber = (amount: number) => {
	let _number = amount

	if (_number < ONE_THOUSAND) {
		return _number
	} else if (_number < ONE_MILLION) {
		return (_number / ONE_THOUSAND).toFixed(2) + "K"
	} else if (_number < ONE_BILLION) {
		return (_number / ONE_MILLION).toFixed(2) + "M"
	} else {
		// We don't expect number ranges up to billions but if that's the case please be our guest
		return _number
	}
}
