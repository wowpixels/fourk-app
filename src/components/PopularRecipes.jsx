import { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { Link } from 'react-router-dom';

function PopularRecipes() {
  const [popularRecipes, setPopularRecipes] = useState([]);

  useEffect(() => {
    getPopularRecipes();
  }, []);

  // get popular recipes from api
  const getPopularRecipes = async () => {
    const check = localStorage.getItem('popularRecipes');

    if (check) {
      const data = JSON.parse(check);
      setPopularRecipes(data);
      return;
    } else {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${
          import.meta.env.VITE_FOURK_APP_API_KEY
        }&number=8`
      );

      const data = await response.json();

      // set in local storage so we don't have to fetch every time
      localStorage.setItem('popularRecipes', JSON.stringify(data.recipes));
      setPopularRecipes(data.recipes);
    }
  };

  return (
    <>
      <h2 className="font-bold">Popular Recipes</h2>
      <h4 className="mb-4">Your Daily picks</h4>
      <div>
        <Splide
          options={{
            perPage: 4,
            arrows: true,
            pagination: false,
            drag: 'free',
            gap: '2rem',
            breakpoints: {
              992: {
                perPage: 3,
              },
              640: {
                perPage: 1,
              },
            },
          }}
        >
          {popularRecipes.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Link className="group" to={`/recipe/${recipe.id}`}>
                  <h4 className="text-sm absolute z-10 bottom-0 left-0 text-white bg-gradient-to-t from-black to-transparent to-90% p-4 w-full rounded-b-xl group-hover:bg-orange-500 group-hover:to-0%">
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
    </>
  );
}

export default PopularRecipes;
