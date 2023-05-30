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
import Skill from "./page/skills";
import Summary from "./page/summary";
import Download from "./page/download";

function App() {

  const [info,addInfo] = useState({
    FirstName: "",
    LastName: "",
    Addresss: "",
    ZipCode: "",
    Email:"",
    Phone:""
  })

  const [expriance,addExpriance] = useState({
    CompanyName: "",
    JobTitle: "",
    City: "",
    Country: "",
    StartDate:"",
    EndDate:"",
    Chacker:"",
  })

  const [education,addEducation] = useState({
    SchoolName: "",
    SchoolLocation: "",
    Subject: "",
    Result: "",
    StartDate:"",
    EndDate:"",
    Chacker:"",
  })

  const [summary,addSummary] = useState({
    Summary: "",
    
  })


  const [input,setInput] = useState("");
  const [skills,setSkills] = useState([]);


  console.log(info)
  console.log(expriance)
  console.log(education)
  console.log(skills)
  console.log(summary)

  return (
    <div className="App">
      
      <Router>
      <NavBar />
        <Routes>
          <Route path='/' element={< Hero />}/>
          <Route path='/instrution' element={< Instruction />}/>
          <Route path='/personalInfo' element={< PersonalInfo info={info} addinfo={addInfo} />}/>
          <Route path='/yourExpriance' element={< Expriance addExpriance={addExpriance}/>}/>
          <Route path='/yourEducation' element={< Education addEducation={addEducation}/>}/>
          <Route path='/yourSkill' element={< Skill input={input} setInput={setInput} skills={skills} setSkills={setSkills}/>}/>
          <Route path='/yourSummary' element={< Summary addSummary={addSummary}/>}/>
          <Route path='/download' element={< Download />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
