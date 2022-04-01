import './navbar2.css';
import img from '../../img/coffee-beans-black.png';
import {NavLink} from 'react-router-dom';

const Navbar2 = () => {
  return (
    <nav className="navbar2 mb-4 d-flex justify-content-between align-items-end">
      {/*<NavLink to='/'>*/}
      {/*  <img src={img} alt="coffee-beans" />*/}
      {/*</NavLink>*/}
      <NavLink to='/' className='text-dark d-flex align-items-end'>
        <img src={img} alt="coffee-beans" />
        Coffee house</NavLink>
      <NavLink to='/our-coffee' className='text-dark'>Our coffee</NavLink>
      <NavLink to='/' className='text-dark'>For your pleasure</NavLink>
    </nav>
  );
};

export default Navbar2;