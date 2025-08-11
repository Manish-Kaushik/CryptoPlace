
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/coin/:coinId element={<Coin/>}' />
      </Routes>
    </div>
  );
}

export default App;
