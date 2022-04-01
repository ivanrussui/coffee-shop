import './footer.css';
// import img from './../../img/coffee-beans-black.png';
import CoffeeBlack from '../coffee-black/coffee-black';
import Navbar2 from '../navbar2/navbar2';

const Footer = () => {
  return (
    <div className="footer mt-4 mb-3 mx-auto">
      <Navbar2/>
      <CoffeeBlack/>
    </div>
  );
};

export default Footer;