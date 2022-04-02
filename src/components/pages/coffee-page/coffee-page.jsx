import './coffee-page.css';
import Menu2 from './menu2/menu2';
import Header from '../../header/header';
import AboutOurBeans from './about-our-beans/about-our-beans';

const CoffeePage = () => {
  return (
    <div className="coffeePage">
      <Header/>
      <Menu2/>
      <div className="container">
        <AboutOurBeans/>
        <div className="divider"></div>
      </div>
    </div>
  );
};

export default CoffeePage;
