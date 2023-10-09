const date = new Date()
const lastDate = new Date().setDate(new Date().getDate() + 1)

function convertDate(date) {
	let day = date.getDate()
	let month = date.getMonth() + 1
	let year = date.getFullYear()
	if (day < 10) day = '0' + day
	if (month < 10) month = '0' + month
	const dateValues = [day, month, year]
	return dateValues.join('.')
}
export const CURRENT_DATE = convertDate(date)
export const END_DATE = convertDate(new Date(lastDate))