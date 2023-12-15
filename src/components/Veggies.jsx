import { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { Link } from 'react-router-dom';

function Veggies() {
  const [veggies, setVeggies] = useState([]);

  useEffect(() => {
    getVeggies();
  }, []);

  // get popular recipes from api
  const getVeggies = async () => {
    const check = localStorage.getItem('veggies');

    if (check) {
      const data = JSON.parse(check);
      setVeggies(data);
      return;
    } else {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${
          import.meta.env.VITE_FOURK_APP_API_KEY
        }&number=8&tags=vegetarian`
      );

      const data = await response.json();

      // set in local storage so we don't have to fetch every time
      localStorage.setItem('veggies', JSON.stringify(data.recipes));
      setVeggies(data.recipes);
    }
  };

  return (
    <div className="my-10">
      <h2 className="font-bold">Our vegetarian recipes for today</h2>
      <h4 className="mb-4">Delicious and Healthy</h4>
      <div>
        <Splide
          options={{
            perPage: 3,
            arrows: true,
            pagination: false,
            drag: 'free',
            gap: '2rem',
            breakpoints: {
              992: {
                perPage: 2,
              },
              640: {
                perPage: 1,
              },
            },
          }}
        >
          {veggies.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Link className="group" to={`/recipe/${recipe.id}`}>
                  <h4 className="absolute z-10 bottom-0 left-0 text-white bg-gradient-to-t from-black to-transparent to-90% p-4 w-full rounded-b-xl group-hover:bg-orange-500 group-hover:to-0%">
                    {recipe.title}
                  </h4>
                  <img
                    className="rounded-xl relative z-0 group-hover:opacity-80 transition-all"
                    src={recipe.image}
                    alt={recipe.title}
                  />
                </Link>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
}

export default Veggies;
