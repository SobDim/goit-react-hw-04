import { useEffect, useState } from 'react';

import SearchBar from './SearchBar/SearchBar';
import Images from './Images/Images';
import { fetchImages } from '../services/API.JS';
import Loader from './Loader/Loader';
import ReactModal from 'react-modal';
import ImageModal from './ImageModal/ImageModal';
import toast, { Toaster } from 'react-hot-toast';
import './App.css';
import { ErrorMessage } from 'formik';
let totalPages;

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(false);
  const [imgObject, setImgObject] = useState({ url: '', alt: '' });

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        setLoading(true);
        const response = await fetchImages({ page, query });

        setImages(prev => [...prev, ...response.data.results]);
        totalPages = response.data.total_pages;

        if (totalPages === page) toast('Last page!');
        if (totalPages === 0) toast('No result!');
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [page, query]);

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  const handleChangeQuery = queryStr => {
    setQuery(queryStr);
    setPage(1);
    setImages([]);
  };

  const openModal = data => {
    setImgObject(data);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return (
    <>
      <SearchBar setQuery={handleChangeQuery} />
      
      {error && <ErrorMessage />}

      {images.length > 0 && <Images images={images} openModal={openModal} />}

      {loading && <Loader />}

      {images.length > 0 && totalPages !== page && (
        <button onClick={handleLoadMore}>Load more</button>
      )}

      <ImageModal
        closeModal={closeModal}
        imgObject={imgObject}
        isOpen={isOpen}
      />
      {error && <ErrorMessage />}

      <ReactModal />
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          },

          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />
    </>
  );
}

export default App;
