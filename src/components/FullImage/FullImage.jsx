import { FaTimes } from "react-icons/fa"; 
import "./FullImage.scss";

const FullImage = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="fullImage" onClick={onClose}>
      <div className="fullImage-content" onClick={(e) => e.stopPropagation()}>
        <img src={imageSrc} alt="Full view" className="fullImage-image" />

          <FaTimes  onClick={onClose} className="close-btn"/> 
      </div>
    </div>
  );
};

export default FullImage;
