import Footer from '../footer/footer';
import AboutUs from './about-us/about-us';
import './home-page.css';
import Menu from './menu/menu';
import OurBest from './our-best/our-best';

const HomePage = () => {
	return(
		<div className='homePage'>
			<Menu/>
			<div className="container">
				<AboutUs/>
				<OurBest/>
				<Footer/>
			</div>
		</div>
	)
}

export default HomePage;