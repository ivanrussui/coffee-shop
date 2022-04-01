import './App.css';
import MainPage from '../pages/main-page/main-page';
import CoffeePage from '../pages/coffee-page/coffee-page';
import {Routes, Route} from 'react-router-dom';
import Header from '../pages/main-page/header/header';
import Footer from '../footer/footer';

// debugger;

const App = (props) => {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/main' element={<MainPage cards={props.cards}/>} />
        <Route path='/coffee' element={<CoffeePage/>} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
