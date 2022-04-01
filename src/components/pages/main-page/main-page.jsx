import AboutUs from './about-us/about-us';
import './main-page.css';
import OurBest from './our-best/our-best';
import Menu from './menu/menu';
import Header from '../../header/header';

// debugger

const MainPage = (props) => {
	return(
		<div className='mainPage'>
			<Header/>
			<Menu/>
			<div className="container">

				<AboutUs/>

			</div>
			<OurBest cards={props.cards} />
		</div>
	)
}

export default MainPage;