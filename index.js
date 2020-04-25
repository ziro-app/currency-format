'use strict' // throws if octal literals are passed as parameters to the function
// this function receives a value in cents and returns it in R$1.000,00 format
// does not format values above R$999.999,99
const currencyFormat = receivedValue => {
	const value = receivedValue === 0 ? '00' : receivedValue
	if (value) {
		const valueString = `${value}`
		// checks if string is in integer format and if it only has 2 digits if starts with leading 0
		if (valueString.match(/^0[0-9]{0,1}$|^[1-9]([0-9]?)+$/g)) {
			const noFormat = (parseInt(value, 10)/100).toFixed(2)
			if (noFormat.length <= '6')
				return `R$${noFormat.replace('.',',')}`
			else {
				const [integer, decimal] = noFormat.split('.')
				const indexToSlice = integer.length - 3
				const format = [integer.slice(0, indexToSlice), integer.slice(indexToSlice)].join('.')
				return `R$${[format,decimal].join(',')}`
			}
		}
	}
	return ''
}

module.exports = currencyFormat