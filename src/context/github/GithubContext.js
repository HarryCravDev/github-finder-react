import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
	const initialState = {
		users: [],
		user: {},
		repos: [],
		loading: false,
	};

	const [state, dispatch] = useReducer(githubReducer, initialState);

	const searchUsers = async (text) => {
		setLoading();

		const params = new URLSearchParams({
			q: text,
		});

		const res = await fetch(`${GITHUB_URL}/search/users?${params}`, {
			headers: {
				Authorization: `${GITHUB_TOKEN}`,
			},
		});

		const { items } = await res.json();

		dispatch({
			type: "GET_USERS",
			data: items,
		});
	};

	const getUser = async (login) => {
		setLoading();

		const res = await fetch(`${GITHUB_URL}/users/${login}`, {
			headers: {
				Authorization: `${GITHUB_TOKEN}`,
			},
		});

		if (res.state === 404) {
			return (window.location = "/notfound");
		}

		const data = await res.json();

		dispatch({
			type: "GET_USER",
			data: data,
		});
	};

	const getUserRepos = async (login) => {
		setLoading();

		const res = await fetch(`${GITHUB_URL}/users/${login}/repos`, {
			headers: {
				Authorization: `${GITHUB_TOKEN}`,
			},
		});

		if (res.state === 404) {
			return (window.location = "/notfound");
		}

		const data = await res.json();

		console.log("Repors context: ", data);

		dispatch({
			type: "GET_USER_REPOS",
			data: data,
		});
	};

	const setLoading = () => dispatch({ type: "SET_LOADING" });

	const clearUsers = () => dispatch({ type: "CLEAR_USERS" });

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				loading: state.loading,
				user: state.user,
				repos: state.repos,
				searchUsers,
				clearUsers,
				getUser,
				getUserRepos,
			}}
		>
			{children}
		</GithubContext.Provider>
	);
};

export default GithubContext;
