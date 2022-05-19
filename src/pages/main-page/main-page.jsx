import AboutUs from '../../components/about-us/about-us';
import OurBest from '../../components/our-best/our-best';
import Menu from '../../components/menu/menu';

// debugger

const MainPage = (props) => {
	return(
		<div className='mainPage'>
			<Menu/>
			<div className="container">
				<AboutUs/>
			</div>
			<OurBest cards={props.cards} />
		</div>
	)
}

export default MainPage;