import {useState} from 'react'
import backgroundImage from './background.jpg';
import img1 from './coding2.jpg'
import Sidebar from './Sidebar';
import { TiThMenu } from "react-icons/ti";


import './Header copy.css'

function Header() {
    const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',  
    backgroundRepeat: 'no-repeat',
    height: 'auto',   
          
  };

// const Register =()=> {
//  return(
//   <form>
//     <input type="text" />
//     <input type="text" />
//     <input type="text" />
//     <input type="text" />
//   </form>
//  )
// }

  return (
    <>
   
       <div className="header" style={backgroundStyle}>
        {/* <Register /> */}
        <header>
         <div className='sidebar-click' onClick={toggleSidebar}>
            <TiThMenu className='click-icon' />
          </div>
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggleSidebar} />

        <div className='company-register'>
          <div className="company-names">
            <h1 className="company-name1">EMPIRE-WISDOM</h1>
            <p className="company-name2">ACADEMY</p>
          </div>
       </div>
            <button className="register">REGISTER</button>
        </header>

<div className='wrap'>

       <nav className='quote-group'>
          <p  className='tech-quote'>Technology will never replace great teachers, but technology in the hands of great teachers is transformational</p>
          <p className='offer'>Helping you break into the world of Software Engineering.</p>
       <button className="register2">REGISTER</button>
       </nav>
      <div className='img-wrap'>
          <img src={img1} className='coding' alt="" />
      </div>

</div>
       </div>
      


     
    </>
  )
}

export default Header
