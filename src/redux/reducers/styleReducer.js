const styleReducer = (state = { styles: {
  loadingBar: true

}}, action) => {
	switch (action.type) {
		case "SET_LOADING_BAR": {
			console.log('Hit Reducer')
		  return Object.assign({}, state, { styles: {loadingBar:action.value}})
		}
		default:
		return state;
	}
 
}

export default styleReducer 