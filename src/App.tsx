import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageModal from './components/ImageModal/ImageModal';
import Loader from './components/Loader/Loader';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import { fetchImages } from './components/Api/api';
import type { ApiImage } from './components/types/api';

const App: React.FC = () => {
  const [images, setImages] = useState<ApiImage[]>([]);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [selectedImage, setSelectedImage] = useState<ApiImage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    if (!query) return;

    const loadImages = async () => {
      try {
        setIsLoading(true);
        const { results, totalPages } = await fetchImages(query, page);
        setImages(prev => (page === 1 ? results : [...prev, ...results]));
        setTotalPages(totalPages);
      } catch {
        setError('Failed to fetch images. Try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    loadImages();
  }, [query, page]);

  const handleSearch = (newQuery: string) => {
    if (newQuery === query) return;
    setQuery(newQuery);
    setPage(1);
    setImages([]);
    setError('');
  };

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  const openModal = (image: ApiImage) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={openModal} />
      )}
      {isLoading && <Loader />}
      {images.length > 0 && page < totalPages && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {isModalOpen && selectedImage && (
        <ImageModal isOpen={isModalOpen} image={selectedImage} onClose={closeModal} />
      )}
    </div>
  );
};

export default App;
