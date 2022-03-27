import './footer.css';
import img from './../../img/coffee-beans-black.png';
import CoffeeBlack from '../coffee-black/coffee-black';

const Footer = () => {
	return (
		<>
		<div className="footer d-flex justify-content-between align-items-end mt-4 mx-auto mb-4">
			<a href="#">
				<img src={img} alt="coffee-beans" />
			</a>
			<a className='text-dark' href="#">Coffee house</a>
			<a className='text-dark' href="#">Our coffee</a>
			<a className='text-dark' href="#">For your pleasure</a>		
		</div>
		<CoffeeBlack/>
		<div className='mb-4'></div>
		</>
	)
}

export default Footer;