import './App.css';
import MainPage from '../pages/main-page/main-page';
import CoffeePage from '../pages/coffee-page/coffee-page';

// debugger;

const App = (props) => {
  return (
    <div className="App">
			<MainPage cards={props.cards}	/>
      <CoffeePage/>
    </div>
  );
}

export default App;
