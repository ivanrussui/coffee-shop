import './header.css';
import Navbar from '../../../navbar/navbar';
import CoffeeWhite from '../../../coffee-white/coffee-white';

const Header = () => {
  return (
    <div className="menu">
        <div className="container">
          <Navbar />
					<h1 className='text-center'>Everything You Love About Coffee</h1>
					<CoffeeWhite/>
					<h4 className="menu-subtitle text-center mt-4 text-light">We makes every day full of energy and taste</h4>
					<h4 className="menu-subtitle2 text-center text-white">Want to try our beans?</h4>
					<button className='bg-transparent text-white mx-auto mt-3' type='button'>More</button>
        </div>
    </div>
  );
};

export default Header;
