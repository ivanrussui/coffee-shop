import Footer from '../footer/footer';
import AboutUs from './about-us/about-us';
import './main-page.css';
import Menu from './menu/menu';
import OurBest from './our-best/our-best';

const MainPage = () => {
	return(
		<div className='mainPage'>
			<Menu/>
			<div className="container">
				<AboutUs/>
				<OurBest/>
				<Footer/>
			</div>
		</div>
	)
}

export default MainPage;