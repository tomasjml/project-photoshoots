import React from "react";
import ModalButton from "../../core/components/ModalButton/ModalButton";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

/**
 * @function UserManagementComponent
 * @description User management component
 * @param {object} props
 * @returns {object} JSX template
 */
const UserManagementComponent = ({ users = [], onDelete, onSave }) => {
	const { handleSubmit, register } = useForm();

	return (
		<>
			<div className="card m-5 p-4 bg-dark text-white">
				<div className="card-body">
					<div className="row">
						<div className="col">
							<div className="card-title">
								<h4>User management</h4>
							</div>
						</div>
						<div className="col col-md-1 offset-7 text-black">
							<ModalButton
								idForModal="addUserModal"
								contentButton={<i className="text-white bi-plus">Add User</i>}
								classesButton={"btn btn-primary"}
								classesCloseButton={"btn btn-danger"}
								classesActionButton={"btn btn-success"}
								styleButton={{ backgroundColor: "transparent" }}
								textModalTitle="Create user"
								textModalBody={
									<>
										{" "}
										<div className="mb-4">
											<div className="mb-4">
												<label htmlFor="txtName" className="form-label">
													Name
												</label>
												<input type="text" className="form-control" id="txtName" {...register("name", {})} />
											</div>
											<label htmlFor="txtEmail" className="form-label">
												Email address
											</label>
											<input
												type="email"
												className="form-control"
												id="txtEmail"
												aria-describedby="emailHelp"
												{...register("email", {})}
											/>
											<div id="emailHelp" className="form-text">
												We&apos;ll never share your email with anyone else.
											</div>
										</div>
										<div className="mb-4">
											<label htmlFor="txtPassword" className="form-label">
												Password
											</label>
											<input type="password" className="form-control" id="txtPassword" {...register("password", {})} />
										</div>
										<div className="mb-4">
											<label htmlFor="selectRole">Role</label>
											<select id="selectRole" className="form-select" {...register("role", {})}>
												<option value="ROLE_USER">User</option>
												<option value="ROLE_EMPLEADO">Empleado</option>
											</select>
										</div>
									</>
								}
								textCloseButton="Close"
								textActionButton="Save"
								onSave={handleSubmit(onSave)}
							/>
						</div>
					</div>
					<br />
					<div className="row">
						<div className="col">
							<table className="table table-striped table-bordered text-center bg-light text-black">
								<thead className="table-dark border-light">
									<tr>
										<th scope="col">Email</th>
										<th scope="col">Name</th>
										<th scope="col">Roles</th>
										<th scope="col">Action</th>
									</tr>
								</thead>
								<tbody>
									{users.map(user => {
										return (
											<tr key={user.email}>
												<th scope="row">{user.email}</th>
												<td>{user.name}</td>
												<td>{user.roles}</td>
												<td>
													<span>
														{" "}
														<ModalButton
															idForModal={user.name}
															contentButton={<i className="text-danger bi-trash-fill" />}
															classesButton={"btn"}
															classesCloseButton={"btn btn-secondary"}
															classesActionButton={"btn btn-danger"}
															styleButton={{ backgroundColor: "transparent" }}
															textModalTitle="Do you want to delete this user?"
															textModalBody={`User to delete: ${user.name}`}
															textCloseButton="Close"
															textActionButton="Delete"
															onSave={() => {
																onDelete(user.name);
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
				</div>
			</div>
		</>
	);
};

UserManagementComponent.propTypes = {
	users: PropTypes.array,
	onDelete: PropTypes.func,
	onSave: PropTypes.func
};

export default UserManagementComponent;
