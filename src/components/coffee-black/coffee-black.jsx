import './coffee-black.css';
import img from './../../img/coffee-black.png';

const CoffeeBlack = () => {
	return (
		<div className="coffeeBlack mx-auto d-flex align-items-center justify-content-between">
			<span className='mb-1'></span>
			<img src={img} alt="coffee" />
			<span className='mb-1'></span>
		</div>
	)
}

export default CoffeeBlack;