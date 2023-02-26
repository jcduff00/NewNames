import data from './declared_data.json'

data.forEach((obj, i) => {
	obj.id = i
})

export default data