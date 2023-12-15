import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiTacos, GiCroissant, GiFlatfish } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

function Category() {
  return (
    <>
      <h2 className="font-bold mb-4">Lookup by category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 justify-center items-center">
        <NavLink to={'/cuisine/american'} className={'category-btn'}>
          <FaHamburger size={24} />
          <p>American</p>
        </NavLink>
        <NavLink to={'/cuisine/asian'} className={'category-btn'}>
          <GiNoodles size={24} />
          <p>Asian</p>
        </NavLink>
        <NavLink to={'/cuisine/italian'} className={'category-btn'}>
          <FaPizzaSlice size={24} />
          <p>Italian</p>
        </NavLink>
        <NavLink to={'/cuisine/french'} className={'category-btn'}>
          <GiCroissant size={24} />
          <p>French</p>
        </NavLink>
        <NavLink to={'/cuisine/mexican'} className={'category-btn'}>
          <GiTacos size={24} />
          <p>Mexican</p>
        </NavLink>
        <NavLink to={'/cuisine/spanish'} className={'category-btn'}>
          <GiFlatfish size={24} />
          <p>Spanish</p>
        </NavLink>
      </div>
    </>
  );
}

export default Category;
