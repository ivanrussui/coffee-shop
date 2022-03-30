import './App.css';
import MainPage from '../main-page/main-page';

// debugger;

const App = (props) => {
  return (
    <div className="App">
			<MainPage cards={props.cards}	/>
    </div>
  );
}

export default App;
