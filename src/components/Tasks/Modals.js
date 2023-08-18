import React from 'react';
import ReactDOM from 'react-dom';

function Modal({ open, children }) {
  if (!open) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal">
        {children}
      </div>
    </div>,
    document.getElementById('portal')
  );
}

export default Modal;




// const MODAL_STYLES = {
//     position: '',
//     top: '50%',
//     left: '50%',
//     transform: 'translateX(-50%)',
//     backgroundColor: '#FFF',
//     padding: '50px',
//     zIndex: 1000
// }

// const OVERLAY_STYLES = {
//     position: 'fixed',
//     top: '0',
//     backgroundColor: 'rgba(255, 255, 255, 0.5)',
//     width: '100%',
//     height: '100vh',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     zIndex: '90000'

// }