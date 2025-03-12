import css from "../src/App.module.css";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";

import { useState } from "react";
import { useEffect } from "react";
import fetchPhotos from "./services/api";

interface Photo {
  id: number;
  alt_description: string;
  small: string;
  regular: string;
}

function App() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [perPage] = useState<number>(12);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  useEffect(() => {
    if (!query) return;
    const getPhoto = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await fetchPhotos(query, page, perPage);

        const { total_pages, results } = data;

        const formattedPhotos: Photo[] = results.map(
          ({ id, alt_description, urls: { small, regular } }: any) => ({
            id,
            alt_description,
            small,
            regular,
          })
        );
        setPhotos((prev) => [...prev, ...formattedPhotos]);
        setTotalPages(total_pages);
        setIsVisible(page < total_pages - 1);
      } catch {
        setIsError(true);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };
    getPhoto();
  }, [query, page, perPage, setTotalPages]);

  const handleSetQuery = (newQuery: string) => {
    console.log(newQuery);
    setQuery(newQuery);
    setPhotos([]);
    setPage(0);
    setIsVisible(false);
    setIsError(false);
  };
  const handleChangePage = () => setPage((prev) => prev + 1);

  const openModal = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className={css.wrapper}>
      <SearchBar handleSetQuery={handleSetQuery} />
      {!isLoading && !isError && photos.length === 0 && query && (
        <h2>No results found!</h2>
      )}
      {isLoading && <Loader isLoading={isLoading} />}
      {isError && query && <ErrorMessage />}
      {photos.length > 0 && (
        <ImageGallery openModal={openModal} photos={photos} />
      )}
      {isVisible && photos.length > 0 && !isLoading && (
        <LoadMoreBtn handleChangePage={handleChangePage} />
      )}
      {selectedPhoto && (
        <ImageModal
          modalIsOpen={!!selectedPhoto}
          closeModal={closeModal}
          src={selectedPhoto.regular}
          alt={selectedPhoto.alt_description}
        />
      )}
    </div>
  );
}

export default App;
