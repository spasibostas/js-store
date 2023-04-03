import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/index';
import Header from './components/header/header';
import HomePage from './pages/home-page/home-page';
import GamePage from './pages/game-page/game-page';
import OrderPage from './pages/order-page/order-page';


function App() {
  return (
    <Provider store={ store }>
      <Router>
        <div className="App">
          <Header /> 
            <Routes>
              <Route path='/app/:title' element={ <GamePage /> }/>
              <Route path='/order' element={ <OrderPage /> }/>
              <Route path='/' element={ <HomePage /> }/>
            </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
