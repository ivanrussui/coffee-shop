import './coffee.css';
import img from './../../img/coffee.png';

const Coffee = () => {
	return (
		<div className="coffee mx-auto d-flex align-items-center justify-content-between">
			<span className='mb-2'></span>
			<img src={img} alt="coffee" />
			<span className='mb-2'></span>
		</div>
	)
}

export default Coffee;