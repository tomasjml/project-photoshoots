import React from "react";
import photo from "../../core/assets/img/first-logo.png";

const SalesComponent = () => {
	return (
		<>
			<div className="card m-5 p-4 bg-dark text-white">
				<div className="card-body">
					<div className="row">
						<div className="col">
							<div className="card-img text-center">
								<img src={photo} alt="photo" />
							</div>
						</div>
					</div>
					<br />
					<div className="row">
						<div className="col">
							<div className="card-body text-black">
								<div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
									<div className="col">
										<div className="card mb-4 rounded-3 shadow-sm">
											<div className="card-header py-3">
												<h4 className="my-0 fw-normal">Pre Wedding</h4>
											</div>
											<div className="card-body">
												<h1 className="card-title pricing-card-title">
													<small className="text-muted">RD</small>$1,000
												</h1>
												<button type="button" className="w-100 btn btn-lg btn-outline-primary">
													Let&apos;s prepare!
												</button>
											</div>
										</div>
									</div>
									<div className="col">
										<div className="card mb-4 rounded-3 shadow-sm">
											<div className="card-header py-3">
												<h4 className="my-0 fw-normal">Wedding</h4>
											</div>
											<div className="card-body">
												<h1 className="card-title pricing-card-title">
													<small className="text-muted">RD</small>$5,000
												</h1>
												<button type="button" className="w-100 btn btn-lg btn-primary">
													Let&apos;s get you married
												</button>
											</div>
										</div>
									</div>
									<div className="col">
										<div className="card mb-4 rounded-3 shadow-sm border-primary">
											<div className="card-header py-3 text-white bg-primary border-primary">
												<h4 className="my-0 fw-normal">Enterprise</h4>
											</div>
											<div className="card-body">
												<h1 className="card-title pricing-card-title">
													<small className="text-muted">RD</small>$3,000
												</h1>
												<button type="button" className="w-100 btn btn-lg btn-primary">
													Let&apos;s celebrate together!
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

SalesComponent.propTypes = {};

export default SalesComponent;
