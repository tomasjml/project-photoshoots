import { userPath as path } from "../core/api/path";
import { restClient } from "../core/api/restClient";

export const fetchUsers = filters => {
	const route = path.fetchUsers(filters);
	return restClient(route, "GET")
		.then(function (response) {
			return Promise.resolve(response);
		})
		.catch(error => {
			return Promise.reject(error);
		});
};

export const addUser = user => {
	const route = path.addUser();
	return restClient(route, "POST", user)
		.then(function (response) {
			return Promise.resolve(response);
		})
		.catch(error => {
			return Promise.reject(error);
		});
};

export const deleteUser = email => {
	const route = path.deleteUser(email);
	return restClient(route, "DELETE")
		.then(function (response) {
			return Promise.resolve(response);
		})
		.catch(error => {
			return Promise.reject(error);
		});
};
