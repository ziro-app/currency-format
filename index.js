// receive value in cents and return in R$1.000,00 format
const currencyFormat = value => {
	if (value) {
		const valueString = `${value}`
		// checks if string is in integer format and if it starts with 0 it only has 2 digits
		if (valueString.match(/^0[0-9]{0,1}$|^[1-9]([0-9]?)+$/g)) {
			const noFormat = (parseInt(value, 10)/100).toFixed(2)
			if (noFormat.length <= '6')
				return `R$${noFormat.replace('.',',')}`
		}
	}
	return ''
}

module.exports = currencyFormat