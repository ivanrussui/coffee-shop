import AboutUs from './about-us/about-us';
import './home-page.css';
import Menu from './menu/menu';

const HomePage = () => {
	return(
		<div className='HomePage'>
			<Menu/>
			<AboutUs/>
		</div>
	)
}

export default HomePage;