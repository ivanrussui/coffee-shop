import './cards2.css';
import Card2 from "./card2/card2";

const Cards2 = (props) => {

    let cardsElements2 = props.cards2.map(c2 => <Card2 key={c2.id} country={c2.country} title={c2.title} price={c2.price} />)
    return (
        <div className="cards2 row mt-4 justify-content-md-between">
            {cardsElements2}
        </div>
    )
}

export default Cards2;