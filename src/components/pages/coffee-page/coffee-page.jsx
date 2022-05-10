import './coffee-page.css';
import Menu2 from './menu2/menu2';
import Header from '../../header/header';
import AboutOurBeans from './about-our-beans/about-our-beans';
import Search from './search/search';
import Filter from './filter/filter';

const CoffeePage = () => {
  return (
    <div className="coffeePage">
      {/*/!*<Header/>*!/ не уверен что тут хэдэр нужен и без него все норм */}
      <Menu2/>
      <div className="container">
        <AboutOurBeans/>
        <div className="divider"></div>
        <section className="searchFilter d-flex justify-content-center">
          <Search/>
          <Filter/>
        </section>
      </div>
    </div>
  );
};

export default CoffeePage;
