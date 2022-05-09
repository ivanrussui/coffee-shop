import './coffee-page.css';
import Menu2 from './menu2/menu2';
import Header from '../../header/header';
import AboutOurBeans from './about-our-beans/about-our-beans';
import Search from './search/search';

const CoffeePage = () => {
  return (
    <div className="coffeePage">
      {/*/!*<Header/>*!/ не уверен что тут хэдэр нужен и без него все норм */}
      <Menu2/>
      <div className="container">
        <AboutOurBeans/>
        <div className="divider"></div>
        <div className="searchFilter">
          <Search/>
        </div>
      </div>
    </div>
  );
};

export default CoffeePage;
