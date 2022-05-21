import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2 text-white">
          <FaGithub className="text-4xl inline pr-2" />
          <Link to='/' className='text-lg font-bold align-middle' >
              Github Finder
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
            <div className="flex justify-end">
                <Link to='/' className="btn btn-ghost btn-sm btn-rounded" >Home</Link>
                <Link to='/about' className="btn btn-ghost btn-sm btn-rounded" >About</Link>
               
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
