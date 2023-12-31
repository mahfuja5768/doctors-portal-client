import React from "react";

const ConfirmationModal = ({ title, message, successAction, modalData, successActionBtnName }) => {
  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="confirmation-modal" className="btn">
        open modal
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <button
              onClick={() => successAction(modalData)}
              className="btn btn-sm text-white  btn-error"
            >
              {successActionBtnName}
            </button>
            <label
              htmlFor="confirmation-modal"
              className="btn  btn-sm text-white btn-primary"
            >
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
