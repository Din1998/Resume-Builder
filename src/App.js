import { useState } from "react"
import './css/index.css';
import NavBar from './components/navBar';
import Hero from'./page/hero'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Instruction from './page/instruction';
import PersonalInfo from './page/personalInfo';
import Expriance from './page/expriance';
import Education from "./page/education";

function App() {

  const [info,addInfo] = useState({
    FirstName: "",
    LastName: "",
    Addresss: "",
    ZipCode: "",
    Phone:"",
    Email:"",
  })

  const [expriance,addExpriance] = useState({
    FirstName: "",
    LastName: "",
    Addresss: "",
    ZipCode: "",
    Phone:"",
    Email:"",
    Chacke:"",
  })

  const [education,addEducation] = useState({
    FirstName: "",
    LastName: "",
    Addresss: "",
    ZipCode: "",
    Phone:"",
    Email:"",
    Chacke:"",
  })

  console.log(info)
  console.log(expriance)
  console.log(education)

  return (
    <div className="App">
      
      <Router>
      <NavBar />
        <Routes>
          <Route path='/' element={< Hero />}/>
          <Route path='/instrution' element={< Instruction />}/>
          <Route path='/personalInfo' element={< PersonalInfo addinfo={addInfo} />}/>
          <Route path='/yourExpriance' element={< Expriance addExpriance={addExpriance}/>}/>
          <Route path='/yourEducation' element={< Education addEducation={addEducation}/>}/>
          <Route path='/yourSkill' element={< Instruction />}/>
          <Route path='/yourSummary' element={< Instruction />}/>
          <Route path='/download' element={< Instruction />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
