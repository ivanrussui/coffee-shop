import './App.css';
import MainPage from '../pages/main-page/main-page';
import CoffeePage from '../pages/coffee-page/coffee-page';
import Header from '../header/header';
import Footer from '../footer/footer';

// debugger;

const App = (props) => {
  return (
    <div className="App">
      <Header/>
			<MainPage cards={props.cards}	/>
      <CoffeePage/>
      <Footer/>
    </div>
  );
}

export default App;
