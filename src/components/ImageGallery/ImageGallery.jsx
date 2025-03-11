import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ photos, openModal }) => {
  return (
    <ul className={css.list}>
      {photos.map((photo) => (
        <ImageCard key={photo.id} photo={photo} openModal={openModal} />
      ))}
    </ul>
  );
};

export default ImageGallery;
