import AboutUs from '../../components/about-us/about-us';
import './main-page.css';
import OurBest from '../../components/our-best/our-best';
import Menu from '../../components/menu/menu';
// import Header from '../../components/header/header';

// debugger

const MainPage = (props) => {
	return(
		<div className='mainPage'>
			{/*/!*<Header/>*!/ не уверен что тут хэдэр нужен и без него все норм */}
			<Menu/>
			<div className="container">
				<AboutUs/>
			</div>
			<OurBest cards={props.cards} />
		</div>
	)
}

export default MainPage;