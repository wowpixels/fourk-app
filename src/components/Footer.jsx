import { FaReact } from 'react-icons/fa6';
import { AiFillHeart } from 'react-icons/ai';

function Footer() {
  const date = new Date().getFullYear();
  return (
    <div className="my-16 flex items-center justify-center">
      Copyright {date} &copy; Fourk &middot; Developed with
      <AiFillHeart className="mx-1 text-red-500" />
      <span className="mr-1">in</span>
      <span className="font-bold">React.js</span>
    </div>
  );
}

export default Footer;
