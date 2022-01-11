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
			const response = await authenticateUser({ email: data.username, password: data.password, roles: data.roles });
			console.log(response);
			await setAuthInformation(response.email, response.token, JSON.parse(response.roles)[0]);
			window.location.href = "/sales";
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
