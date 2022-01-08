// React
import PropTypes from "prop-types";

//Libraries
// the hoc
import { withTranslation } from "react-i18next";

import { useForm } from "react-hook-form";

const MockyFormComponent = ({ t, onSave }) => {
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm();

	return (
		<>
			<div className="card border-primary m-5 p-4">
				<div className="card-body">
					<div className="row">
						<div className="col">
							<div className="card-title text-center">
								<h3>{t("designMocks")}</h3>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<div className="card-subtitle mb-2 text-center text-muted">{t("anyRequest")}</div>
						</div>
					</div>
					<form onSubmit={handleSubmit(onSave)}>
						<div className="row g-2">
							<div className="col col-md-6">
								<div className="mb-3">
									<label htmlFor="textName" className="form-label">
										{t("formName")}
									</label>
									<input
										id="textName"
										type="text"
										className="form-control"
										aria-describedby="textNameHelp"
										{...register("name", {
											required: true,
											maxLength: 32
										})}
									/>
									<div id="textNameHelp" className="form-text text-primary">
										{t("formNameHelp")}
									</div>
								</div>
							</div>
							<div className="col col-md-6">
								<div className="mb-3">
									<label htmlFor="textDescription" className="form-label">
										{t("formDescription")}
									</label>
									<input
										id="textDescription"
										type="text"
										className="form-control"
										aria-describedby="textDescriptionHelp"
										{...register("description", {
											required: true,
											maxLength: 32
										})}
									/>
									<div id="textDescriptionHelp" className="form-text text-primary">
										{t("formDescriptionHelp")}
									</div>
								</div>
							</div>
						</div>
						<div className="row g-2">
							<div className="col col-md-6 mb-3">
								<label className="form-label" htmlFor="selectStatus">
									{t("formHTTPStatus")}
								</label>
								<select
									id="selectStatus"
									className="form-select"
									defaultValue="200"
									{...register("status", {
										required: true,
										valueAsNumber: true
									})}
									aria-label="Method for HTTP request"
								>
									<option disabled value>
										{" "}
										1xx Informational Response
									</option>
									<option value="100">100 - Continue</option>
									<option disabled value>
										{" "}
										2xx Success
									</option>
									<option value="200">200 - Ok</option>
									<option disabled value>
										{" "}
										4xx Client Errors
									</option>
									<option value="404">404 - Not Found</option>
									<option disabled value>
										{" "}
										5xx Server Errors
									</option>
									<option value="500">500 - Internal Server Error</option>
								</select>
								{errors.status && errors.status.message}
								<div className="form-text text-primary">{t("formHTTPStatusHelp")}</div>
							</div>
							<div className="col col-md-6 mb-3">
								<label className="form-label" htmlFor="selectMethod">
									{t("formMethod")}
								</label>
								<select
									id="selectMethod"
									className="form-select"
									aria-label="Default select example"
									{...register("method", {
										required: true
									})}
								>
									<option value="GET">GET</option>
									<option value="POST">POST</option>
									<option value="PUT">PUT</option>
									<option value="DELETE">DELETE</option>
									<option value="OPTIONS">OPTIONS</option>
								</select>
								<div className="form-text text-primary">{t("formMethodHelp")}</div>
							</div>
						</div>
						<div className="row g-2">
							<div className="col col-md-6">
								<div className="mb-3">
									<label htmlFor="selectContentType">{t("formContentType")}</label>
									<select
										id="selectContentType"
										className="form-select"
										aria-label="Default select example"
										{...register("contentType", {
											required: true
										})}
									>
										<option value="application/json">application/json</option>
										<option value="text/html">text/html</option>
										<option value="text/js">text/js</option>
										<option value="text/css">text/css</option>
										<option value="text/json">text/json</option>
										<option value="text/plain">text/plain</option>
									</select>
									<div className="form-text text-primary">{t("formContentTypeHelp")}</div>
								</div>
							</div>
							<div className="col col-md-6">
								<div className="mb-3">
									<label htmlFor="selectCharset">{t("formCharset")}</label>
									<select
										id="selectCharset"
										className="form-select"
										aria-label="Default select example"
										{...register("charset", {
											required: true
										})}
									>
										<option value="UTF-8">UTF-8</option>
										<option value="ISO-8859-1">ISO-8859-1</option>
										<option value="UTF-16">UTF-16</option>
									</select>
									<div className="form-text text-primary">{t("formCharsetHelp")}</div>
								</div>
							</div>
						</div>
						<div className="row g-2">
							<div className="col col-md-12">
								<div className="mb-3">
									<label htmlFor="textAreaHeaders">{t("formHeaders")}</label>
									<textarea
										id="textAreaHeaders"
										className="form-control"
										rows={4}
										placeholder={'"{\n' + '  "X-Foo-Bar": "Hello World"\n' + '}"'}
										{...register("headers", {
											required: true
										})}
									/>
									<div className="form-text text-primary">{t("formHeadersHelp")}</div>
								</div>
							</div>
						</div>
						<div className="row g-2">
							<div className="col col-md-12">
								<div className="mb-3">
									<label htmlFor="textAreaResponseBody">{t("formResponseBody")}</label>
									<textarea
										id="textAreaResponseBody"
										className="form-control"
										rows={12}
										placeholder={
											'"{\n' +
											'  "identity": {\n' +
											'    "id": "b06cd03f-75d0-413a-b94b-35e155444d70",\n' +
											'    "login": "John Doe"\n' +
											"  },\n" +
											'  "permissions": {\n' +
											'    "roles": [\n' +
											'      "moderator"\n' +
											"    ]\n" +
											"  }\n" +
											'}"'
										}
										{...register("body", {
											required: true
										})}
									/>
									<div className="form-text text-primary">{t("formHTTPStatusHelp")}</div>
								</div>
							</div>
						</div>
						<div className="row justify-content-md-center">
							<div className="col col-lg-3 col-xl-3">
								<button className="btn btn-primary" type="submit">
									{t("formSubmit")}
								</button>
							</div>
							<div className="col col-lg-3 col-xl-3">
								<select
									className="form-select"
									aria-label="Default select example"
									{...register("time", {
										required: true
									})}
								>
									<option value="1">Never expire</option>
									<option value="2">Expire in 1 year</option>
									<option value="3">Expire in 1 Month</option>
									<option value="4">Expire in 1 week</option>
									<option value="5">Expire in 1 day</option>
									<option value="6">Expire in 1 hour</option>
									<option value="7">Expire in 1 minute</option>
								</select>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

MockyFormComponent.propTypes = {
	t: PropTypes.any,
	onSave: PropTypes.func
};

export default withTranslation()(MockyFormComponent);
