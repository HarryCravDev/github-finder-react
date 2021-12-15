import { useEffect, useState } from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";

function UserResults() {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		fetchUsers();
	}, []);

	const fetchUsers = async () => {
		setLoading(true);
		const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
			headers: {
				Authorization: `${process.env.REACT_APP_GITHUB_TOKEN}`,
			},
		});

		const data = await res.json();

		setLoading(false);
		setUsers(data);

		console.log("Users: ", data);
	};

	if (!loading) {
		return (
			<div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols3 md:grid-cols-2">
				{users.map((user) => (
					<UserItem user={user} />
				))}
			</div>
		);
	} else {
		return <Spinner />;
	}
}

export default UserResults;
