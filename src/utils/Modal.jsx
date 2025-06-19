// src/components/Modal.jsx
import React from 'react';
import '../modal.css';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className='row w-100'>
        <div className="col-12 mx-auto col-md-6 col-lg-6 bg-light p-2 rounded-1 modal-div position-relative" onClick={(e) => e.stopPropagation()}>
          <button className="btn-close text-light position-absolute end-0 top-0" onClick={onClose} style={{ marginTop:'10px', marginRight:'20px'}}></button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
