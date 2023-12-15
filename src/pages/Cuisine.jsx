import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();
  let pageTitle = params.type[0].toUpperCase() + params.type.slice(1);

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  const getCuisine = async (name) => {
    const check = localStorage.getItem(`${name}`);

    if (check) {
      const data = JSON.parse(check);
      setCuisine(data);
      return;
    } else {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
          import.meta.env.VITE_FOURK_APP_API_KEY
        }&number=12&cuisine=${name}`
      );

      const data = await response.json();

      // set in local storage so we don't have to fetch every time
      localStorage.setItem(`${name}`, JSON.stringify(data.results));
      setCuisine(data.results);
    }
  };

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid gap-4 mt-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cuisine.map((recipe) => {
          return (
            <Link
              to={`/recipe/${recipe.id}`}
              className="group w-full"
              key={recipe.id}
            >
              <img
                className="rounded-xl w-full relative z-0 group-hover:opacity-80 transition-all"
                src={recipe.image}
                alt={recipe.title}
              />
              <h4 className="mt-4 mb-8 text-base text-center group-hover:text-orange-500">
                {recipe.title}
              </h4>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
}

export default Cuisine;
