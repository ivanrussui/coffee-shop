import Menu2 from '../../components/menu2/menu2';
import AboutOurBeans from '../../components/about-our-beans/about-our-beans';
import Search from '../../components/search/search';
import Filter from '../../components/filter/filter';
import Cards2 from "../../components/cards2/cards2";
import Divider from "../../components/divider/divider";

const CoffeePage = (props) => {
  // debugger;
  return (
    <div className="coffeePage">
      <Menu2/>
      <div className="container">
        <AboutOurBeans/>
        <Divider/>
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
