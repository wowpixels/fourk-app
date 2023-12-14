import { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

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
      <h2 className="font-bold mb-8">Pick your vegetarian recipe</h2>
      <div className="">
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: 'free',
            gap: '2rem',
          }}
        >
          {veggies.map((veggie) => {
            return (
              <SplideSlide key={veggie.id}>
                <div>
                  <h4 className="absolute bottom-0 left-0 text-white bg-gradient-to-t from-black to-transparent p-4 w-full rounded-b-lg">
                    {veggie.title}
                  </h4>
                  <img
                    className="rounded-lg shadow"
                    src={veggie.image}
                    alt={veggie.title}
                  />
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
}

export default Veggies;
