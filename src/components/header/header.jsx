import './header.css';
import img from './../../img/coffee-beans-white.png';

const Header = () => {
	return (
		<div className="header d-flex justify-content-between align-items-end">
			<a href="#">
				<img src={img} alt="coffee-beans" />
			</a>
			<a className='text-light' href="#">Coffee house</a>
			<a className='text-light' href="#">Our coffee</a>
			<a className='text-light' href="#">For your pleasure</a>
		</div>
	)
}

export default Header;