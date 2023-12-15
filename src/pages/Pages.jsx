import Home from './Home';
import Cuisine from './Cuisine';
import SearchResult from './SearchResult';
import Recipe from './Recipe';
import { Route, Routes } from 'react-router-dom';

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/search-result/:search" element={<SearchResult />} />
      <Route path="/recipe/:name" element={<Recipe />} />
    </Routes>
  );
}

export default Pages;
