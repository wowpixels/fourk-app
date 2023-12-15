import { NavLink } from 'react-router-dom';
import fourkIcon from '../assets/fourk-icon.svg';
import Wave from '../assets/wave.svg';

function Header() {
  return (
    <>
      <div className="mt-8 mb-10">
        <img
          className="absolute top-0 -mt-10 left-0 z-0 opacity-5"
          src={Wave}
          alt="fourk icon"
        />
        <NavLink
          to={'/'}
          className={
            'group relative z-10 font-bold text-4xl inline-flex items-center gap-2 font-urbanist text-orange-500 transition-all'
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
