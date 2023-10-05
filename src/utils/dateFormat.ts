export const dateFormat = (date: Date)=> {
	const year = date.getFullYear()
	const month = date.toLocaleString('pt-BR', { month: 'short' })
	const day =  date.getDay()

	return `${day < 10 ? '0' + day : day} de ${month.replace('.','')}, ${year}`
}