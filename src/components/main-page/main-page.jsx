import Footer from '../footer/footer';
import AboutUs from './about-us/about-us';
import './main-page.css';
import Menu from './menu/menu';
import OurBest from './our-best/our-best';

// debugger

const MainPage = (props) => {
	return(
		<div className='mainPage'>
			<Menu/>
			<div className="container">
				<AboutUs/>
				<OurBest cards={props.cards} />
				<Footer/>
			</div>
		</div>
	)
}

export default MainPage;