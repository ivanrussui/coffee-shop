import Menu3 from "../../components/menu3/menu3";
import AboutOurGoods from "../../components/about-our-goods/about-our-goods";
import Cards2 from "../../components/cards2/cards2";
import Divider from "../../components/divider/divider";

const PleasurePage = (props) => {
  return (
      <div className='pleasurePage'>
        <Menu3/>
        <div className="container">
          <AboutOurGoods/>
          <Divider/>
        </div>
        <Cards2 cards2={props.cards2} />
      </div>
  );
};

export default PleasurePage;