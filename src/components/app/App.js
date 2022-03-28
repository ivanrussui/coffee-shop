import './App.css';
import MainPage from '../main-page/main-page';

// let state = {
//   mainPage: {
//     cards: [
//       {id: 1, img: '../../img/bestItem.jpg', title: 'Solimo Coffee Beans 2 kg', price: '10.73$'},
//       {id: 2, img: '../../img/bestItem2.jpg', title: 'Presto Coffee Beans 1 kg', price: '15.99$'},
//       {id: 3, img: '../../img/bestItem3.jpg', title: 'AROMISTICO Coffee 1 kg', price: '6.99$'}
//     ]
//   }
// }

// debugger;

const App = (props) => {
  return (
    <div className="App">
			<MainPage	/>
    </div>
  );
}

export default App;
