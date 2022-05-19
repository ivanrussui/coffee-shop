import './App.css';
import MainPage from '../../pages/main-page/main-page';
import CoffeePage from '../../pages/coffee-page/coffee-page';
import PleasurePage from "../../pages/pleasure-page/pleasure-page";
import Header from '../header/header';
import Footer from '../footer/footer';
import {Routes, Route, BrowserRouter} from 'react-router-dom';

const App = (props) => {
  // debugger;
  return (
      <div className="App">
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<MainPage cards={props.cards}/>}/>
            <Route path="/our-coffee/*" element={<CoffeePage cards2={props.cards2}/>}/>
            <Route path="/for-your-pleasure/*" element={<PleasurePage cards2={props.cards2} />}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
  );
};

export default App;
