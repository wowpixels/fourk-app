import Veggies from '../components/Veggies';
import PopularRecipes from '../components/PopularRecipes';

function Home() {
  return (
    <div className="mx-4">
      <Veggies />
      <PopularRecipes />
    </div>
  );
}

export default Home;
