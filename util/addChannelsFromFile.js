import fs from 'fs'

export default (store, filepath) => {
	const fileContent = fs.readFileSync(filepath)
	const json = JSON.parse(fileContent)
	for(var i in json) 
	{
		store.dispatch({ type: 'ADD_CHANNEL', id:json[i].id, name: json[i].name})
	}
}
