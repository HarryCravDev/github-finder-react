const githubReducer = (state, action) => {
	switch (action.type) {
		case "GET_USERS":
			return {
				...state,
				users: action.data,
				loading: false,
			};
		case "GET_USER":
			return {
				...state,
				user: action.data,
				loading: false,
			};
		case "GET_USER_REPOS":
			return {
				...state,
				repos: action.data,
				loading: false,
			};
		case "SET_LOADING":
			return {
				...state,
				loading: true,
			};
		case "CLEAR_USERS":
			return {
				...state,
				users: [],
				loading: false,
			};
		default:
			return state;
	}
};

export default githubReducer;
