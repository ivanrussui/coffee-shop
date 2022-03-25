import './menu.css';
import Header from '../../header/header';
import CoffeeWhite from '../../coffee-white/coffee-white';

const Menu = () => {
  return (
    <div className="menu">
        <div className="container">
          <Header />
					<h1 className='text-center'>Everything You Love About Coffee</h1>
					<CoffeeWhite/>
					<h4 className="menu-subtitle text-center mt-4 text-light">We makes every day full of energy and taste</h4>
					<h4 className="menu-subtitle2 text-center text-white">Want to try our beans?</h4>
					<button className='bg-transparent text-white mx-auto mt-3' type='button'>More</button>
        </div>
    </div>
  );
};

export default Menu;
