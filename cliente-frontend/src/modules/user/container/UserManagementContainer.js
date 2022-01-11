import React, { useEffect } from "react";
import UserManagementComponent from "../component/UserManagementComponent";
import { addUser, deleteUser, fetchUsers } from "../service";

/**
 * UserManagementContainer
 * @desc Container for UserManagementComponent
 * @param {Object} props
 * @returns {Object} UserManagementContainer
 */
const UserManagementContainer = () => {
	const [users, setUsers] = React.useState([]);

	useEffect(async () => {
		const data = await fetchUsers();
		setUsers(data);
	}, []);

	const onSave = async data => {
		const user = {
			email: data.email,
			password: data.password,
			name: data.name,
			roles: [data.role],
			administrator: false
		};
		await addUser(user);
		setUsers(await fetchUsers());
	};

	const onDelete = async email => {
		await deleteUser(email);
		setUsers(await fetchUsers());
	};

	return (
		<>
			<UserManagementComponent users={users} onSave={onSave} onDelete={onDelete} />
		</>
	);
};

UserManagementContainer.propTypes = {};

export default UserManagementContainer;
