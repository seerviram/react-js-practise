import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// const Modal = ({ isOpen, onClose, children }) => {
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'auto';
//     }
//   }, [isOpen]);

//   if (!isOpen) return null;

//   return ReactDOM.createPortal(
//     <div className="modal-overlay" onClick={onClose}>

//  <div className="modal-content" onClick={e => e.stopPropagation()}>
//         <button className="modal-close" onClick={onClose}>Close</button>
//         {children}
//       </div>
//     </div>,
//     document.body
//   );
// };


const ModelApp = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button onClick={onClose} style={styles.closeButton}>
          &times;
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

const CustomModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div style={styles.container}>
      <button onClick={() => setIsModalOpen(true)} style={styles.openButton}>Open Modal</button>
      <ModelApp isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 style={styles.title}>This is a Modal</h2>
        <p style={styles.content}>You can put any content here.</p>
        <button onClick={() => setIsModalOpen(false)} style={styles.closeButton}>Close</button>
      </ModelApp>
    </div>
  );
};

const styles = {
  container: {
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f0f0'
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
  },
  modal: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    position: 'relative',
    width: '300px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'none',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer'
  },
  openButton: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  title: {
    fontSize: '24px',
    marginBottom: '10px'
  },
  content: {
    marginBottom: '20px'
  }
};

export default CustomModal;

// const ModelApp = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
//       <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
//         <h1>Modal Content</h1>
//         <p>This is the content inside the modal</p>
//       </Modal>
//     </div>
//   );
// };

// export default ModelApp;