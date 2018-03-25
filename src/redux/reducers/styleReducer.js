const styleReducer = (state = { styles: {
  sideMenu: 0
}}, action) => {
	switch (action.type) {
		case "SET_SIDE_MENU": {
	     console.log('Hit Reducer')
		  return Object.assign({}, state, { styles: {sideMenu:action.value}})
		}
		default:
		return state;
	}
 
}

export default styleReducer 