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
    <>
      <h1 className="mt-8">{pageTitle}</h1>
      <div className="grid grid-cols-4 gap-4 my-8">
        {cuisine.map((item) => {
          return (
            <div key={item.id}>
              <img className="rounded-xl" src={item.image} alt={item.title} />
              <h4 className="mt-4 mb-8 text-base text-center">{item.title}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Cuisine;
