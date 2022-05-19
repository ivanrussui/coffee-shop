import './navbar.css';
import img from '../../img/coffee-beans-white.png';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar d-flex justify-content-between align-items-end">
      {/*<NavLink to='/'>*/}
      {/*  <img src={img} alt="coffee-beans" />*/}
      {/*</NavLink>*/}
      <NavLink to='/' className='text-light d-flex align-items-end'>
        <img src={img} alt="coffee-beans" />
        Coffee house</NavLink>
      <NavLink to='/our-coffee' className='text-light'>Our coffee</NavLink>
      <NavLink to='/for-your-pleasure' className='text-light'>For your pleasure</NavLink>
    </nav>
  );
};

export default Navbar;