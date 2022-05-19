import Cards from '../cards/cards';
import './our-best.css';

const OurBest = (props) => {
  return (
    <div className="ourBest">
      {/* <div className="container"> */}
        <h2 className="text-center">Our best</h2>
        <Cards cards={props.cards} />
      {/* </div> */}
    </div>
  );
};

export default OurBest;
