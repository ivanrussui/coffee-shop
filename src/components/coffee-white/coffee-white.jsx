import './coffee-white.css';
import img from './../../img/coffee-white.png';

const CoffeeWhite = () => {
	return (
		<div className="CoffeeWhite mx-auto d-flex align-items-center justify-content-between">
			<span className='mb-2'></span>
			<img src={img} alt="coffee" />
			<span className='mb-2'></span>
		</div>
	)
}

export default CoffeeWhite;