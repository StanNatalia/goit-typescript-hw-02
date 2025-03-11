import css from "./ImageCard.module.css";
const ImageGallery = ({ photo, openModal }) => {
  return (
    <li className={css.item} onClick={() => openModal(photo)}>
      <img src={photo.small} alt={photo.alt_description} />
    </li>
  );
};
export default ImageGallery;
