import React from "react";
import { withTranslation } from "react-i18next";
import PropTypes from "prop-types";
// Route for mocks `${appConfig.apiHost}/mock/${mocky.id}`
// import { appConfig } from "../config/global";
import ModalButton from "../../core/components/ModalButton/ModalButton";

const MockyTableComponent = ({ t, mockies, onDelete }) => {
	return (
		<>
			<div className="card m-5 p-4">
				<div className="card-body">
					<div className="row">
						<div className="col">
							<div className="card-title text-center">
								<h4>{t("manageMocks")}</h4>
							</div>
						</div>
					</div>
					<br />
					<div className="row">
						<div className="col">
							<table className="table table-striped table-bordered text-center">
								<thead className="table-dark border-light">
									<tr>
										<th scope="col">{t("tableHeaderID")}</th>
										<th scope="col">{t("tableHeaderName")}</th>
										<th scope="col">{t("tableHeaderDescription")}</th>
										<th scope="col">{t("tableHeaderDate")}</th>
										<th scope="col">{t("tableHeaderAction")}</th>
									</tr>
								</thead>
								<tbody>
									{mockies.map(mocky => {
										return (
											<tr key={mocky.id}>
												<th scope="row">{mocky.id}</th>
												<td>{mocky.endpointName}</td>
												<td>
													<span className="badge bg-black">{mocky.statusCode}</span>&nbsp;
													<span className="badge bg-info">{mocky.contentType}</span>
													&nbsp;<span className="badge bg-warning">{mocky.charset}</span>
													<br />
													{mocky.content === "" ? (
														<span className="badge text-black">{t("tableNoContent")}</span>
													) : (
														<pre>
															<code className="d-inline-block">{mocky.body}</code>
														</pre>
													)}
												</td>
												<td>
													<span>
														Created on
														<br />
														<time dateTime="1633925428469" title="2021-10-11T00:10:28-04:00">
															{mocky.creationDate}
														</time>
													</span>
												</td>
												<td>
													<span>
														{" "}
														<a href={mocky.route} target="_blank" rel="noreferrer">
															<i className="text-primary bi-box-arrow-up-right" />
														</a>
													</span>
													<span>
														{" "}
														<ModalButton
															idForModal={mocky.id}
															contentButton={<i className="text-danger bi-trash-fill" />}
															classesButton={"btn"}
															classesCloseButton={"btn btn-secondary"}
															classesActionButton={"btn btn-danger"}
															styleButton={{ backgroundColor: "transparent" }}
															textModalTitle={t("logOutModalTitle")}
															textModalBody={`${t("tableDeleteModalBody")} ${mocky.id}`}
															textCloseButton={t("tableDeleteModalClose")}
															textActionButton={t("tableDeleteModalAction")}
															onSave={() => {
																onDelete(mocky.id);
															}}
														/>
													</span>
												</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<div className="alert alert-primary" role="alert">
								{t("tableAlertStorage")}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

MockyTableComponent.propTypes = {
	t: PropTypes.any,
	mockies: PropTypes.array,
	onDelete: PropTypes.func
};

export default withTranslation()(MockyTableComponent);
