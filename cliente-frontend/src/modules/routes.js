import { Redirect, Route, Switch } from "react-router-dom";
import AuthenticationContainer from "./auth/container/AuthenticationContainer";
import NoMatchRoute from "./core/components/NoMatchRoute/NoMatchRoute";
import NavBarContainer from "./NavBar/NavBarContainer";
import UserManagementContainer from "./user/container/UserManagementContainer";
import SalesContainer from "./sales/container/SalesContainer";

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/auth">
				<AuthenticationContainer />
			</Route>
			<Route exact path="/">
				<Redirect to="/auth" />
			</Route>
			<Route path="/user">
				<NavBarContainer />
				<UserManagementContainer />
			</Route>
			<Route path="/sales">
				<NavBarContainer />
				<SalesContainer />
			</Route>
			<Route path="*">
				<NoMatchRoute />
			</Route>
		</Switch>
	);
};

export default Routes;
