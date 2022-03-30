import img from '../../../img/bestItem.jpg';
// import img2 from './../../img/bestItem2.jpg';
// import img3 from './../../img/bestItem3.jpg';

const Card = (props) => {

  return (
    <>
      <div className="col-md-3">
        <div className="wrap">
          {/*<img src={props.img} alt="card" className="mx-auto d-block"/>*/}
          <img src={img} alt="card" className="mx-auto d-block"/>
          <h6 className="text-center mt-3">{props.title}</h6>
          <div className="price text-end">{props.price}</div>
        </div>
      </div>
    </>
  );
};

export default Card;