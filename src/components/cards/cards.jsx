import './cards.css';
import img from './../../img/bestItem.jpg';
import img2 from './../../img/bestItem2.jpg';
import img3 from './../../img/bestItem3.jpg';
import Card from './card/card';

const Cards = (props) => {
  // debugger
  let cardsElements = props.cards.map(c => <Card key={c.id} title={c.title} price={c.price}/>)

  return (
    <div className="cards row mt-4 justify-content-md-between">
      {cardsElements}
    </div>
  );
};

export default Cards;
