import MockyFormComponent from "./MockyFormComponent";
import { createMocky } from "../service";
import NavBarContainer from "../../NavBar/NavBarContainer";
import { getUsername } from "../../auth/service";

const MockyFormContainer = () => {
	/**
	 * @type {object} data from react-hook-form
	 */
	const onSave = async data => {
		const mocky = {
			id: "",
			route: "",
			method: data.method,
			headers: data.headers,
			statusCode: data.status,
			contentType: data.contentType,
			body: data.body,
			endpointName: data.name,
			endpointDescription: data.description,
			expirationTime: "Day",
			creationDate: new Date().toISOString(),
			expirationDate: new Date().toISOString(),
			user: {
				username: getUsername()
			}
		};
		const response = await createMocky(mocky);
		if (response.statusCode >= 200 || response.statusCode < 300) {
			await alert("Mocky created successfully");
			window.location.href = "/table";
		} else {
			alert("Error creating mocky");
			console.error(response);
		}
	};

	return (
		<>
			<NavBarContainer />
			<MockyFormComponent onSave={onSave} />
			<br />
		</>
	);
};

export default MockyFormContainer;
