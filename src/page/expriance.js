import LiveBoard from "../components/liveBoard";
import { Link } from "react-router-dom";

export default function Expriance({addExpriance}){

  const handleChange = (e) => {
    addExpriance((prev) => ({...prev,[e.target.name]:e.target.value}))
  }


  return(
    <div className="container-md py-5">
    <div className="row">
      <div className="col-md-6">
        <div>
          <h1>Add your expriance.</h1>
          <p>Please fill out .</p>
        </div>
        <div>
        <form>
            <div class="row mb-3">
              <div className="col-6">
                <label for="exampleInputEmail1" class="form-label">Company name</label>
                <input 
                  name="FirstName"
                  ype="email" 
                  required="true" 
                  class="form-control" 
                  id="exampleInputEmail1" 
                  aria-describedby="emailHelp" 
                  onChange={handleChange}
              
                />
              </div>
              <div className="col-6">
                <label for="exampleInputEmail1" class="form-label">Job title</label>
                <input 
                  name="LastName"
                  type="email" 
                  required="true" 
                  class="form-control" 
                  id="exampleInputEmail1" 
                  aria-describedby="emailHelp" 
                  onChange={handleChange}
                />
              </div>
            </div>

            {/*  */}

            <div class="row mb-3">
              <div className="col-6">
                <label for="exampleInputEmail1" class="form-label">City</label>
                <input 
                  name="Addresss"
                  type="email" 
                  required="true" 
                  class="form-control" 
                  id="exampleInputEmail1" 
                  aria-describedby="emailHelp" 
                  onChange={handleChange}
                />
              </div>
              <div className="col-6">
                <label for="exampleInputEmail1" class="form-label">Country</label>
                <input 
                  name="ZipCode"
                  type="email" 
                  required="true" 
                  class="form-control" 
                  id="exampleInputEmail1" 
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
                  name="Phone"
                  type="date" 
                  required="true" 
                  class="form-control" 
                  id="exampleInputEmail1" 
                  aria-describedby="emailHelp" 
                  onChange={handleChange}
                />
              </div>
              <div className="col-6">
                <label for="exampleInputEmail1" class="form-label">End Date</label>
                <input 
                  name="Email"
                  type="date" 
                  required="true" 
                  class="form-control" 
                  id="exampleInputEmail1" 
                  aria-describedby="emailHelp" 
                  onChange={handleChange}
                />
              </div>
            </div>
        </form>
        <div class="row mb-3">
              <div className="col-6">
              <Link className="link" to='/personalInfo'><button className="mt-5 actn__btn">Back</button></Link>
              </div>
              <div className="col-6">
              <Link className="link" to='/yourExpriance'><button className="mt-5 actn__btn">Next</button></Link>
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