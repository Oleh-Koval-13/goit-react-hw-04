import { useEffect, useState } from 'react';
import './App.css';
import ImageGallery from './components/ImageGallery/ImageGallery';
import SearchBar from './components/SearchBar/SearchBar';
import { Toaster } from 'react-hot-toast';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import getImages from './images-api';
import ImageModal from './components/ImageModal/ImageModal';
import Modal from "react-modal";

Modal.setAppElement('#root');


function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function getData() {
      try {
        setLoading(true);
        setError(false);
        const data = await getImages(query, page);
        setImages((prevImages) => [...prevImages, ...data]);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    
    getData();
  }, [query, page]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsOpenModal(false);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      <Toaster />
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery items={images} onImageClick={handleImageClick} />
      )}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {loading && <Loader />}
      <ImageModal
        isOpen={isOpenModal}
        closeModal={closeModal}
        imageUrl={selectedImage}
      />
    </div>
  );
}

export default App;