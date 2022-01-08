import AuthenticationComponent from "../component/AuthenticationComponent";
import { authUser as authenticateUser, setAuthInformation } from "../service";
/**
 * @function AuthenticationContainer
 * @description Container for Authentication Component
 * @returns {object} Authentication Component
 */
const AuthenticationContainer = () => {
	/**
	 * @function onSave
	 * @description Authenticate user using the data coming from react-hook-form
	 * @param {object} data data from react-hook-form
	 */
	const onSave = async data => {
		try {
			const response = await authenticateUser({ username: data.username, password: data.password });
			await setAuthInformation(response.username, response.token);
			window.location.href = "/form";
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<AuthenticationComponent onSave={onSave} />
		</>
	);
};

export default AuthenticationContainer;
