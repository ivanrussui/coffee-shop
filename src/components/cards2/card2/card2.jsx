import img from "../../../img/bestItem3.jpg";

const Card2 = (props) => {
  return (
      <>
        <div className="col-md-4">
          <div className="wrap mt-4">
            <img src={img} alt="card" className="mx-auto d-block"/>
            <h6 className="text-center mt-3">{props.title}</h6>
            <h5 className="text-end mt-3">{props.country}</h5>
            <div className="price text-end">{props.price}</div>
          </div>
        </div>
      </>
  );
};

export default Card2;