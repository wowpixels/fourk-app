import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

function Category() {
  return (
    <div className="flex gap-4 justify-center items-center">
      <NavLink>
        <FaPizzaSlice to={'/cuisine/italian'} />
        <p>Italian</p>
      </NavLink>
      <NavLink>
        <FaHamburger to={'/cuisine/american'} />
        <p>American</p>
      </NavLink>
      <NavLink>
        <GiNoodles to={'/cuisine/chinese'} />
        <p>Chinese</p>
      </NavLink>
      <NavLink>
        <GiChopsticks to={'/cuisine/japanese'} />
        <p>Japanese</p>
      </NavLink>
    </div>
  );
}

export default Category;
