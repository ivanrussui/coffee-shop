// import './about-our-goods.css';
import img from '../../img/aboutOurGoodsBg.jpg'
import CoffeeBlack from '../coffee-black/coffee-black';

const AboutOurGoods = () => {
  return (
    <section className="aboutOurGoods aboutOurBeans d-flex justify-content-center align-items-center">
      <img src={img} alt="img"/>
      <div className="text text-center">
        <h2 className="title">About our goods</h2>
        <CoffeeBlack/>
        <p className="description mt-3">
            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
          <br/>
          <br/>
            Afraid at highly months do things on at. Situation recommend objection do intention<br/>so questions.
          <br/>
            As greatly removed calling pleased improve an. Last ask him cold feel <br/> met spot shy want. Children me laughing we prospect answered followed. At it went <br/> is song that held help face.
        </p>
      </div>
    </section>
  );
};

export default AboutOurGoods;