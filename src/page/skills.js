import LiveBoard from "../components/liveBoard";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

export default function Skill({input,setInput,skills,setSkills,info}){

  const onInputChange = (event) => {
    setInput(event.target.value)
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    setSkills([...skills,{
      id: uuidv4(),
      skills:input
    }]);
    setInput("")
  }



  return(
    <div className="container-md py-5">
    <div className="row">
      <div className="col-md-6">
        <div>
          <h1>Add your skills.</h1>
          <p>Please fill out .</p>
        </div>
        <div>
        <form className="py-2" onSubmit={onFormSubmit}>
            <div class="row mb-3">
              <div className="col-6">
                <label for="exampleInputEmail1" class="form-label">Add Skills</label>
                <input 
                  name="SchoolName"
                  type="text" 
                  required={true}  
                  className="form-control" 
                  id="exampleInputEmail1" 
                  aria-describedby="emailHelp" 
                  onChange={onInputChange}
                />
              </div>
              <div className="col-6 d-flex justify-content-center align-items-center ">
                <button className="mt-3 actn__btn">Add</button>
              </div>
            </div>

           {/*  */}

            <div class="row mb-3">
              <div className="col-6 py-3">
             
              </div>
              <div className="col-6">
               
              </div>
            </div>

        </form>
        <div class="row mb-3">
              <div className="col-6 text-center">
              <Link className="link" to='/yourEducation'><button className="mt-5 actn__btn">Back</button></Link>
              </div>
              <div className="col-6 text-center">
              <Link className="link" to='/yourSummary'><button className="mt-5 actn__btn">Next</button></Link>
              </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 live__section">
        <LiveBoard personalInfo={info}/>
      </div>
    </div>
  </div>
  )
}