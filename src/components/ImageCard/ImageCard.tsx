import css from "./ImageCard.module.css";

interface Photo {
  id: number;
  description: string;
  small: string;
  regular: string;
}
interface ImageCardProps {
  photo: Photo;
  openModal: (photo: Photo) => void;
}

const ImageGallery: React.FC<ImageCardProps> = ({ photo, openModal }) => {
  return (
    <li className={css.item} onClick={() => openModal(photo)}>
      <img src={photo.small} alt={photo.description} />
    </li>
  );
};
export default ImageGallery;
