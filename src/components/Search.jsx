import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Search() {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/search-result/${input}`);
    setInput('');
  };

  return (
    <>
      <form className="group search relative " onSubmit={submitHandler}>
        <FaSearch className="absolute top-3.5 left-4 group-focus:text-white" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search for a recipe..."
          aria-label="Search for a recipe"
        />
      </form>
    </>
  );
}

export default Search;
