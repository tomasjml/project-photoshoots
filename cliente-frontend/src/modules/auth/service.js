import { authPath as path } from "../core/api/path";
import { restClient } from "../core/api/restClient";

/**
 * @description Service function for authentication
 * @param {object} data - data for authentication
 * @returns {Promise<any>}
 */
export const authUser = data => {
	const route = path.authUser();
	return restClient(route, "POST", JSON.stringify(data))
		.then(function (response) {
			return Promise.resolve(response);
		})
		.catch(error => {
			return Promise.reject(error);
		});
};

/**
 * @description Function to get username information from local browser storage
 * @returns {string}
 */
export const getUsername = () => {
	return localStorage.getItem("username");
};

// Function to register username and token to the local browser storage
/**
 * @param {string} username
 * @param {string} token
 * @param {string} role
 */
export const setAuthInformation = (username, token, role = "") => {
	localStorage.setItem("username", username);
	localStorage.setItem("token", token);
	localStorage.setItem("role", role);
};

// Function logout to delete username and token information from the local browser storage
/**
 * @param {string} username
 * @param {string} token
 */
export const logOut = () => {
	localStorage.removeItem("username");
	localStorage.removeItem("token");
	localStorage.removeItem("role");
};
