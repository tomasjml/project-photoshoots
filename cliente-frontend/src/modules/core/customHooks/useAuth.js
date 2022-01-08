import * as React from "react";
import PropTypes from "prop-types";

const authContext = React.createContext();

function useAuth() {
	const [authed, setAuthed] = React.useState(false);

	return {
		authed,
		login() {
			return new Promise(res => {
				setAuthed(true);
				res();
			});
		},
		logout() {
			return new Promise(res => {
				setAuthed(false);
				res();
			});
		}
	};
}

export function AuthProvider({ children }) {
	const auth = useAuth();

	return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

AuthProvider.propTypes = {
	children: PropTypes.any
};

export default function AuthConsumer() {
	return React.useContext(authContext);
}
