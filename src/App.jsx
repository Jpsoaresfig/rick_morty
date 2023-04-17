import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Galeria from './pages/galeria';
import Episodios from './pages/episodios';


function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/galeria' element={<Galeria/>}></Route>
        <Route path='/episodios' element={<Episodios/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
