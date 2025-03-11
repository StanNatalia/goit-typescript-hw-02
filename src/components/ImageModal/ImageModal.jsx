import Modal from "react-modal";
import { IoIosCloseCircleOutline } from "react-icons/io";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
    minHeight: "400px",
  },
  overlay: { backgroundColor: "rgba(0,0,0, 0.9) " },
};

Modal.setAppElement("#root");

export default function ImageModal({ modalIsOpen, closeModal, src, alt }) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <button
        onClick={closeModal}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          background: "transparent",
          border: "none",
          color: "#fff",
          fontSize: "30px",
          cursor: "pointer",
        }}
      >
        <IoIosCloseCircleOutline />
      </button>
      <img
        src={src}
        alt={alt}
        style={{
          maxWidth: "100%",
          maxHeight: "80vh",
          display: "block",
          margin: "0 auto",
        }}
      />
    </Modal>
  );
}
