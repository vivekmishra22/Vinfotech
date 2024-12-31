import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Page Components/Footer';
import Home from './Page Components/Home';
import MyNavbar from './Page Components/MyNavbar';
import MERN from './Page Components/MERN';
import About from './Page Components/About';

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/mern' element={<MERN />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
