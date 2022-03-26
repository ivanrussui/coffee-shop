import './coffee-white.css';
import img from './../../img/coffee-white.png';
// import img2 from './../../img/coffee-black.png';

const CoffeeWhite = () => {
	return (
		<div className="coffeeWhite mx-auto d-flex align-items-center justify-content-between">
			<span className='mb-1'></span>
			<img src={img} alt="coffee" />
			<span className='mb-1'></span>
		</div>
	)
}

export default CoffeeWhite;