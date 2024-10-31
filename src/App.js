import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Professores from './Components/Professores';
import Alunos from './Components/Alunos';



function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/'                   element={<Home />} />  
        <Route path='/alunos'             element={<Alunos />} />
        <Route path='/professores'        element={<Professores />} />
      </Routes>
      
    </>

  );
}

export default App;