import { NavLink } from 'react-router-dom';
import fourkIcon from '../assets/fourk-icon.svg';

function Header() {
  return (
    <>
      <div className="mt-8 mb-10">
        <NavLink
          to={'/'}
          className={
            'group font-bold text-4xl inline-flex items-center gap-2 font-urbanist text-orange-500 transition-all'
          }
        >
          <img src={fourkIcon} width={32} alt="fourk icon" />
          <span className="group-hover:underline">Fourk</span>
        </NavLink>
      </div>
    </>
  );
}

export default Header;
