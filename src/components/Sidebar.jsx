import './Sidebar.css'
import { NavLink } from "react-router-dom";
import { RiMenuFoldFill } from "react-icons/ri";

function Sidebar({ isOpen, toggle, setIsOpen }) {
  return (
    <div className={isOpen ? 'sidebar open' : 'sidebar'}>
      <button onClick={toggle}><RiMenuFoldFill className='click-back' /> </button>
      <div className='nav'>
        <NavLink className="link" onClick={()=>{setIsOpen(false)}} to="/">Home</NavLink>
        <NavLink className="link" onClick={()=>{setIsOpen(false)}} to="/Courses">Courses</NavLink>
        <NavLink className="link" onClick={()=>{setIsOpen(false)}} to="/About">About</NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
