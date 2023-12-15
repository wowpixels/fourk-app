import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

function Recipe() {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState('overview');
  let params = useParams();

  const fetchDetails = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${
        import.meta.env.VITE_FOURK_APP_API_KEY
      }`
    );
    const detailData = await response.json();
    setDetails(detailData);
    console.log(detailData);
  };

  useEffect(() => {
    fetchDetails(params.name);
  }, [params.name]);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="mt-8">
          <img
            className="rounded-xl w-full"
            src={details.image}
            alt={details.title}
          />
        </div>
        <div className="mt-0 md:mt-8">
          <h1 className="mb-6">{details.title}</h1>

          <div className="flex gap-4">
            <span
              onClick={() => setActiveTab('overview')}
              className={
                activeTab === 'overview' ? 'recipe-tab active' : 'recipe-tab'
              }
            >
              Overview
            </span>
            <span
              onClick={() => setActiveTab('instructions')}
              className={
                activeTab === 'instructions'
                  ? 'recipe-tab active'
                  : 'recipe-tab'
              }
            >
              Instructions
            </span>
            <span
              onClick={() => setActiveTab('ingredients')}
              className={
                activeTab === 'ingredients' ? 'recipe-tab active' : 'recipe-tab'
              }
            >
              Ingredients
            </span>
          </div>

          {activeTab === 'overview' && (
            <>
              <h3 className="mt-6 mb-2 font-bold">Good to know</h3>
              <p>Time to cook: {details.readyInMinutes} minutes</p>
              <p>Servings: {details.servings}</p>
              <h3 className="mt-4 mb-2 font-bold">Summary</h3>
              <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
            </>
          )}

          {activeTab === 'instructions' && (
            <>
              <p
                className="mt-6"
                dangerouslySetInnerHTML={{ __html: details.instructions }}
              ></p>
            </>
          )}

          {activeTab === 'ingredients' && (
            <>
              <ul>
                {details.extendedIngredients?.map((ingredient) => {
                  return <li key={ingredient.id}>{ingredient.original}</li>;
                })}
              </ul>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default Recipe;
