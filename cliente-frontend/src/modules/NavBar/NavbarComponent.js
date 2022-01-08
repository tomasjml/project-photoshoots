import Logo from "../../logo-dark.png";
// the hoc
import { withTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { getUsername, logOut } from "../auth/service";
import ModalButton from "../core/components/ModalButton/ModalButton";

const NavbarComponent = ({ t }) => {
	const location = useLocation();
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
			<div className="navbar-brand" href="#">
				<img src={Logo} className="d-inline-block align-top" alt="Mocky logo" height="38px" width="150.86px" />
			</div>
			<button
				className="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="responsive-navbar-nav">
				<ul className="navbar-nav me-auto mb-lg-0">
					<li className="nav-item">
						<a className="nav-link active" aria-current="page" href="/table">
							{t("anyRequest")}
						</a>
					</li>
				</ul>
				<ul className="navbar-nav">
					<li className="nav-item me-2">
						{location.pathname === "/form" ? (
							<a className="btn btn-secondary" href="/table">
								{t("manageMocks")}
							</a>
						) : (
							<button className="btn btn-secondary" disabled>
								{t("manageMocks")}
							</button>
						)}
					</li>
					<li className="nav-item me-2">
						{location.pathname === "/table" ? (
							<a className="btn btn-primary" href="/form">
								{t("newMock")}
							</a>
						) : (
							<button className="btn btn-primary" disabled>
								{t("newMock")}
							</button>
						)}
					</li>
					<li className="nav-item me-2">
						<div className="input-group mb-3">
							<input
								type="text"
								className="form-control"
								value={getUsername()}
								placeholder="Recipient's username"
								aria-label="Recipient's username"
								aria-describedby="button-addon2"
								disabled
							/>
							<ModalButton
								idForModal={`logoutModal`}
								contentButton={<i className="text-danger bi-eject-fill" />}
								classesButton={"btn"}
								classesCloseButton={"btn btn-secondary"}
								classesActionButton={"btn btn-danger"}
								styleButton={{}}
								textModalTitle={t("logOutModalTitle")}
								textModalBody={`${t("logOutModalBody")}` + getUsername()}
								textCloseButton={t("logOutModalCloseButton")}
								textActionButton={t("logOutModalLogoutButton")}
								onSave={() => {
									logOut();
									//Redirect to auth page
									window.location.href = "/auth";
								}}
							/>
						</div>
					</li>
				</ul>
			</div>
		</nav>
	);
};

NavbarComponent.propTypes = {
	t: PropTypes.any
};

export default withTranslation()(NavbarComponent);
