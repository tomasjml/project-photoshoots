// Get package values
const package_json = require("../../../package.json");

/* Use this format date like is going from system API */
const appConfig = {
	apiHost: `${window.RUNTIME_API_HOST ? window.RUNTIME_API_HOST : process.env.REACT_APP_API_HOST}`,
	appVersion: `${package_json.version}`
};

export { appConfig };
