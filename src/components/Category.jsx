import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

function Category() {
  return (
    <div className="flex gap-4 justify-center items-center">
      <NavLink
        to={'/cuisine/italian'}
        className={
          'flex flex-col items-center justify-center border-2 border-gray-300 p-4 rounded-xl w-1/2'
        }
      >
        <FaPizzaSlice />
        <p>Italian</p>
      </NavLink>
      <NavLink
        to={'/cuisine/american'}
        className={
          'flex flex-col items-center justify-center border-2 border-gray-300 p-4 rounded-xl w-1/2'
        }
      >
        <FaHamburger />
        <p>American</p>
      </NavLink>
      <NavLink
        to={'/cuisine/chinese'}
        className={
          'flex flex-col items-center justify-center border-2 border-gray-300 p-4 rounded-xl w-1/2'
        }
      >
        <GiNoodles />
        <p>Chinese</p>
      </NavLink>
      <NavLink
        to={'/cuisine/japanese'}
        className={
          'flex flex-col items-center justify-center border-2 border-gray-300 p-4 rounded-xl w-1/2'
        }
      >
        <GiChopsticks />
        <p>Japanese</p>
      </NavLink>
    </div>
  );
}

export default Category;
