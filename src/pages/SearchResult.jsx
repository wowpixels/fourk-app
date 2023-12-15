import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function SearchResult() {
  const [searchResult, setSearchResult] = useState([]);
  let params = useParams();

  const getSearchResult = async (search) => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
        import.meta.env.VITE_FOURK_APP_API_KEY
      }&query=${search}`
    );
    const data = await response.json();
    setSearchResult(data.results);
  };

  useEffect(() => {
    getSearchResult(params.search);
  }, [params.search]);

  return (
    <div>
      <h1 className="my-8">
        Your search result for:
        <span className="font-bold text-orange-500"> {params.search}</span>
      </h1>
      <div className="grid grid-cols-4 gap-4">
        {searchResult.map((recipe) => {
          return (
            <>
              <div className="w-full" key={recipe.id}>
                <Link className="group" to={`/recipe/${recipe.id}`}>
                  <img
                    className="rounded-xl w-full relative z-0 group-hover:opacity-80 transition-all"
                    src={recipe.image}
                    alt={recipe.title}
                  />
                  <h4 className="mt-4 mb-8 text-base text-center group-hover:text-orange-500">
                    {recipe.title}
                  </h4>
                </Link>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default SearchResult;
