import { useEffect, useState } from 'react';

import './App.css';
import SearchBar from './SearchBar/SearchBar';
import Images from './Images/Images';
import { fetchImages } from '../servises/API.JS';
import Loader from './Loader/Loader';

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await fetchImages({ page, query });

        setImages(prev => [...prev, ...response.results]);
        setTotalItems(response.total);
        console.log(response.total);
      } catch (error) {
        console.log(error);
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
  return (
    <>
      <SearchBar setQuery={handleChangeQuery} />
      <Images images={images} />
      {loading && <Loader />}
      {!loading && images.length < totalItems && (
        <button onClick={handleLoadMore}>Load more</button>
      )}
    </>
  );
}

export default App;
