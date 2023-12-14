import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  const getCuisine = async (name) => {
    const check = localStorage.getItem(`${params.type}`);

    if (check) {
      const data = JSON.parse(check);
      setCuisine(data);
      return;
    } else {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${
          import.meta.env.VITE_FOURK_APP_API_KEY
        }&cuisine=${name}`
      );
      const data = await response.json();

      // set in local storage so we don't have to fetch every time
      localStorage.setItem(`${params.type}`, JSON.stringify(data.recipes));
      setCuisine(response.results);
    }
  };

  return <div>Cuisine</div>;
}

export default Cuisine;
