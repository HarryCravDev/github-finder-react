const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const searchUsers = async (text) => {
	const params = new URLSearchParams({
		q: text,
	});

	const res = await fetch(`${GITHUB_URL}/search/users?${params}`, {
		headers: {
			Authorization: `${GITHUB_TOKEN}`,
		},
	});

	const { items } = await res.json();

	return items;
};

export const getUser = async (login) => {
	const res = await fetch(`${GITHUB_URL}/users/${login}`, {
		headers: {
			Authorization: `${GITHUB_TOKEN}`,
		},
	});

	if (res.state === 404) {
		return (window.location = "/notfound");
	}

	const data = await res.json();

	return data;
};

export const getUserRepos = async (login) => {
	const res = await fetch(`${GITHUB_URL}/users/${login}/repos`, {
		headers: {
			Authorization: `${GITHUB_TOKEN}`,
		},
	});

	if (res.state === 404) {
		return (window.location = "/notfound");
	}

	const data = await res.json();

	return data;
};
