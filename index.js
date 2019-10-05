// receive value in cents and return in R$1.000,00 format
const currencyFormat = value => {
	if (value.match(/^0[0-9]{0,1}$|^[1-9]([0-9]?)+$/g)) {
		return (parseInt(value, 10)/100).toFixed(2)
	}
	return ''
}

module.exports = currencyFormat