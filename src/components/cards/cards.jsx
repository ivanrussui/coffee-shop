import './cards.css';
import img from './../../img/bestItem.jpg';
import img2 from './../../img/bestItem2.jpg';
import img3 from './../../img/bestItem3.jpg';
import Card from './card/card';


const Cards = (props) => {


  // debugger
  let cardsElements = props.cards.map(c => <Card key={c.id} title={c.title} price={c.price}/>)

  return (
    <div className="cards row mt-4 justify-content-md-evenly">
      {cardsElements}
      {/*<div className="col-md-3 offset-md-1">*/}
        {/*<div className="wrap">*/}
        {/*  <img src={img} alt="card" className="mx-auto d-block" />*/}
        {/*  <h6 className="text-center mt-3">Solimo Coffee Beans 2 kg</h6>*/}
        {/*  <div className="price text-end">10.73$</div>*/}
        {/*</div>*/}
        {/*<div className="wrap">*/}
        {/*</div>*/}
      {/*</div>*/}
      {/*<div className="col-md-3">*/}
        {/*<div className="wrap">*/}
        {/*  <img src={img2} alt="card" className="mx-auto d-block" />*/}
        {/*  <h6 className="text-center mt-3 h6-2">Presto Coffee Beans 1 kg</h6>*/}
        {/*  <div className="price text-end">15.99$</div>*/}
        {/*</div>*/}
      {/*</div>*/}
      {/*<div className="cards3 col-md-3 offset-md-1">*/}
        {/*<div className="wrap">*/}
        {/*  <img src={img3} alt="card" className="mx-auto d-block img3" />*/}
        {/*  <h6 className="text-center mt-3">AROMISTICO Coffee 1 kg</h6>*/}
        {/*  <h5 className="price text-end">6.99$</h5>*/}
        {/*</div>*/}
      {/*</div>*/}
    </div>
  );
};

export default Cards;
