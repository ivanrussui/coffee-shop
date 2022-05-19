import './coffee-page.css';
import Menu2 from '../../components/menu2/menu2';
// import Header from '../../components/header/header';
import AboutOurBeans from '../../components/about-our-beans/about-our-beans';
import Search from '../../components/search/search';
import Filter from '../../components/filter/filter';
import Cards2 from "../../components/cards2/cards2";

const CoffeePage = (props) => {
  // debugger;
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
      <Cards2 cards2={props.cards2} />
    </div>
  );
};

export default CoffeePage;
