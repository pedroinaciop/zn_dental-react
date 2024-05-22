import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import NaoEncontrada from './components/NaoEncontrada';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      
      <Routes>
        <Route path="">
          <Route path="/teste" element={<h1>Teste</h1>}/>
        </Route>

        <Route path="*" element={<NaoEncontrada />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
