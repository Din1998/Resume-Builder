
import './css/index.css';
import NavBar from './components/navBar';
import Home from './page/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import Instruction from './page/instruction';

function App() {
  return (
    <div className="App">
      
      <Router>
      <NavBar />
        <Routes>
          <Route path='/' element={< Home />}/>
          <Route path='/instrution' element={< Instruction />}/>
          <Route path='/personalInfo' element={< Instruction />}/>
          <Route path='/yourExpriance' element={< Instruction />}/>
          <Route path='/yourEducation' element={< Instruction />}/>
          <Route path='/yourSkill' element={< Instruction />}/>
          <Route path='/yourSummary' element={< Instruction />}/>
          <Route path='/download' element={< Instruction />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
