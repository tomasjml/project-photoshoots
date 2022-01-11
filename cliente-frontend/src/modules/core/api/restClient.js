import axios from "axios";

export const restClient = (route, method, data = null) => {
	return axios(route, {
		timeout: 10000,
		headers: getHeaders(data),
		method: method,
		data: data
	})
		.then(response => {
			return response.data;
		})
		.catch(error => {
			if (error.response) {
				// The request was made and the server responded with a status code
				// that falls out of the range of 2xx
				/*console.log(error.response.data);
				console.log(error.response.status);
				console.log(error.response.headers);*/
				return Promise.reject(error.response.data);
				//return error.response;
			} else if (error.request) {
				// The request was made but no response was received
				// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
				// http.ClientRequest in node.js
				//console.log(error.request);
				if (error.code === "ECONNABORTED") {
					return Promise.reject(getUnknownError());
				}
				return Promise.reject(error);
				// return error.request;
			} else {
				// Something happened in setting up the request that triggered an Error
				return error.message;
			}
			// Info about Request
			// console.log(error.config);
		});
};

const getHeaders = () => {
	//const token = localStorage.getItem("token");

	return {
		"Content-Type": "application/json"
		//"X-API-TOKEN": token
	};
	// To enable this part, credentials must be added as parameter
	// if (token !== null && token !== undefined) {
	// 	return {
	// 		"Content-Type": "application/json",
	// 		Accept: "application/json",
	// 		"X-API-AUTH-REQUEST": false,
	// 		"X-API-TOKEN": token
	// 	};
	// } else {
	// 	return {
	// 		"X-API-AUTH-REQUEST": true,
	// 		"X-API-USER": credentials ? credentials.email : "",
	// 		"X-API-PASS": credentials ? credentials.password : ""
	// 	};
	// }
};

/* Unknow error */
const getUnknownError = () => {
	return {
		has_error: true,
		additional_errors: null,
		data: null,
		code: 500,
		message: "Server cannot process the request for an unknown reason.",
		redirect: null
	};
};
