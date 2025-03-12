import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface Photo {
  id: number;
  description: string;
  small: string;
  regular: string;
}

interface ImageGalleryProps {
  photos: Photo[];
  openModal: (photo: Photo) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ photos, openModal }) => {
  return (
    <ul className={css.list}>
      {photos.map((photo) => (
        <ImageCard key={photo.id} photo={photo} openModal={openModal} />
      ))}
    </ul>
  );
};

export default ImageGallery;
