import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Modal } from "bootstrap";

const ModalButton = ({
	idForModal,
	contentButton,
	classesButton,
	classesCloseButton,
	classesActionButton,
	styleButton,
	textModalTitle,
	textModalBody,
	textCloseButton,
	textActionButton,
	onSave
}) => {
	const [modal, setModal] = useState({});

	useEffect(() => {
		setModal(new Modal(document.querySelector(`#modalForButton${idForModal}`), {}));
	}, []);

	return (
		<>
			<button type="button" className={classesButton} onClick={() => modal.show()} style={styleButton}>
				{contentButton}
			</button>

			<div
				className="modal fade"
				id={`modalForButton${idForModal}`}
				tabIndex="-1"
				aria-labelledby={`modalForButton${idForModal}Label`}
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id={`modalForButton${idForModal}Label`}>
								{textModalTitle}
							</h5>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
						</div>
						<div className="modal-body">{textModalBody}</div>
						<div className="modal-footer">
							<button type="button" className={classesCloseButton} onClick={() => modal.hide()}>
								{textCloseButton}
							</button>
							<button
								type="button"
								className={classesActionButton}
								onClick={() => {
									onSave();
									modal.hide();
								}}
							>
								{textActionButton}
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

ModalButton.propTypes = {
	idForModal: PropTypes.string,
	contentButton: PropTypes.any,
	classesButton: PropTypes.string,
	classesCloseButton: PropTypes.string,
	classesActionButton: PropTypes.string,
	styleButton: PropTypes.object,
	textModalTitle: PropTypes.string,
	textModalBody: PropTypes.any,
	textCloseButton: PropTypes.string,
	textActionButton: PropTypes.string,
	onSave: PropTypes.func
};

export default ModalButton;
