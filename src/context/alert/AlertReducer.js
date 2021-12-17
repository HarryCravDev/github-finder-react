const alertReducer = (state, action) => {
	switch (action.type) {
		case "SET_ALERT":
			return action.data;
		case "CLEAR_ALERT":
			return null;
		default:
			return state;
	}
};

export default alertReducer;
