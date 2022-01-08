/**
 * Get all app employees
 * @return {*|Promise<T>}
 */
import { restClient } from "../core/api/restClient";
import { mockyPath as path } from "../core/api/path";

export const fetchMockies = filters => {
	const route = path.fetchMockies(filters);
	return restClient(route, "GET")
		.then(function (response) {
			return Promise.resolve(response);
		})
		.catch(error => {
			return Promise.reject(error);
		});
};

export const deleteMockies = filters => {
	const route = path.deleteMock(filters);
	return restClient(route, "DELETE")
		.then(function (response) {
			return Promise.resolve(response);
		})
		.catch(error => {
			return Promise.reject(error);
		});
};

export const createMocky = filters => {
	const route = path.createMock(filters);
	return restClient(route, "POST", filters)
		.then(function (response) {
			return Promise.resolve(response);
		})
		.catch(error => {
			console.error(error);
			return Promise.reject(error);
		});
};
