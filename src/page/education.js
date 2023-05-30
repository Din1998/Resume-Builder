import LiveBoard from "../components/liveBoard";
import { Link } from "react-router-dom";

export default function Education({addEducation}){


  const handleChange = (e) => {
    addEducation((prev) => ({...prev,[e.target.name]:e.target.value}))
  }

  return(
    <div className="container-md py-5">
    <div className="row">
      <div className="col-md-6">
        <div>
          <h1>Add your education.</h1>
          <p>Please fill out .</p>
        </div>
        <div>
        <form className="py-2">
            <div class="row mb-3">
              <div className="col-6">
                <label for="exampleInputEmail1" class="form-label">School Name</label>
                <input 
                  name="SchoolName"
                  type="text" 
                  required="true" 
                  className="form-control" 
               
                  aria-describedby="emailHelp" 
                  onChange={handleChange}
              
                />
              </div>
              <div className="col-6">
                <label for="exampleInputEmail1" class="form-label">School Location</label>
                <input 
                  name="SchoolLocation"
                  type="text" 
                  required="true" 
                  className="form-control" 
                 
                  aria-describedby="emailHelp" 
                  onChange={handleChange}
                />
              </div>
            </div>

            {/*  */}

            <div class="row mb-3">
              <div className="col-6">
                <label for="exampleInputEmail1" class="form-label">Subject</label>
                <input 
                  name="Subject"
                  type="text" 
                  required="true" 
                  className="form-control" 
                  
                  aria-describedby="emailHelp" 
                  onChange={handleChange}
                />
              </div>
              <div className="col-6">
                <label for="exampleInputEmail1" class="form-label">Result</label>
                <input 
                  name="Result"
                  type="text" 
                  required="true" 
                  className="form-control" 
                  
                  aria-describedby="emailHelp" 
                  onChange={handleChange}
                />
              </div>
            </div>

            {/*  */}

            <div class="row mb-3">
              <div className="col-6">
                <label for="exampleInputEmail1" class="form-label">Start Date</label>
                <input 
                  name="StartDate"
                  type="date" 
                  required="true" 
                  className="form-control" 
                  
                  aria-describedby="emailHelp" 
                  onChange={handleChange}
                />
              </div>
              <div className="col-6">
                <label for="exampleInputEmail1" class="form-label">End Date</label>
                <input 
                  name="EndDate"
                  type="date" 
                  required="true" 
                  className="form-control" 
                  
                  aria-describedby="emailHelp" 
                  onChange={handleChange}
                />
              </div>
            </div>
            {/*  */}

            <div class="row mb-3">
              <div className="col-6">
              <div class="form-check py-3">
                <input
                  name="Chacker" 
                  className="form-check-input" 
                  type="checkbox" 
                  value="Continue" 
                  
                  onChange={handleChange}
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Continue
                </label>
              </div>
              </div>
              <div className="col-6">
               
              </div>
            </div>

        </form>
        <div class="row mb-3">
              <div className="col-6">
              <Link className="link" to='/yourExpriance'><button className="mt-5 actn__btn">Back</button></Link>
              </div>
              <div className="col-6">
              <Link className="link" to='/yourSkill'><button className="mt-5 actn__btn">Next</button></Link>
              </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 live__section">
        <LiveBoard />
      </div>
    </div>
  </div>
  )
}