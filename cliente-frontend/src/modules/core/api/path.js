import { appConfig } from "../../config/global";

const host = appConfig.apiHost;

export let serializeURL = function (obj, prefix) {
	let str = [],
		p;
	for (p in obj) {
		// eslint-disable-next-line no-prototype-builtins
		if (obj.hasOwnProperty(p)) {
			let k = prefix ? prefix + "[" + p + "]" : p,
				v = obj[p];
			str.push(
				v !== null && typeof v === "object" ? serializeURL(v, k) : encodeURIComponent(k) + "=" + encodeURIComponent(v)
			);
		}
	}
	return str.join("&");
};

export const authPath = {
	authUser: () => `${host}/auth/login`
};

export const mockyPath = {
	fetchMockies: username => `${host}/mock/all/${username}`,
	deleteMock: id => `${host}/mock/${id}`,
	createMock: () => `${host}/mock/add`
};
