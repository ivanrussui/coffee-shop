import './navbar.css';
import s from './navbar.module.css';
import img from './../../img/coffee-beans-white.png';
import {NavLink} from 'react-router-dom';


const Navbar = () => {
	return (
		<nav className="header d-flex justify-content-between align-items-end">
			{/*<a href="#">*/}
			{/*	<img src={img} alt="coffee-beans" />*/}
			{/*</a>*/}
			<NavLink to="/main" className={navData => navData.isActive ? s.active : s.item} >Coffee house</NavLink>
			<NavLink to="/coffee" className={navData => navData.isActive ? s.active : s.item} >Our coffee</NavLink>
			{/*<NavLink to="/main" className='text-light' >Coffee house</NavLink>*/}
			{/*<NavLink to="/coffee" className='text-light' >Our coffee</NavLink>*/}
			{/*<NavLink to="#" className='text-light' >For your pleasure</NavLink>*/}
		</nav>
	)
}

export default Navbar;