import Footer from '../../footer/footer';
import AboutUs from './about-us/about-us';
import './main-page.css';
import Header from './header/header';
import OurBest from './our-best/our-best';

// debugger

const MainPage = (props) => {
	return(
		<div className='mainPage'>
			<Header/>
			<div className="container">
				<AboutUs/>
				<OurBest cards={props.cards} />
				<Footer/>
			</div>
		</div>
	)
}

export default MainPage;