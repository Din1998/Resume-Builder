import LiveBoard from "../components/liveBoard";
import { Link } from "react-router-dom";


export default function PersonalInfo({addinfo,info,expriance}){

  console.log(info)

  const handleChange = (e) => {
    addinfo((prev) => ({...prev,[e.target.name]:e.target.value}))
  }


  return(
    <div className="container-md py-5">
      <div className="row">
        <div className="col-md-6">
          <div>
            <h1>Let’s start with personal info.</h1>
            <p>Please fill out .</p>
          </div>
          <div>
          <form className="py-2">
              <div class="row mb-3">
                <div className="col-6">
                  <label for="exampleInputEmail1" class="form-label">First Name</label>
                  <input 
                    name="FirstName"
                    ype="email" 
                    required={true} 
                    className="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp" 
                    onChange={handleChange}
                
                  />
                </div>
                <div className="col-6">
                  <label for="exampleInputEmail1" class="form-label">Last name</label>
                  <input 
                    name="LastName"
                    type="email" 
                    required={true} 
                    className="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp" 
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/*  */}

              <div class="row mb-3">
                <div className="col-6">
                  <label for="exampleInputEmail1" class="form-label">Addresss</label>
                  <input 
                    name="Addresss"
                    type="text" 
                    required={true} 
                    className="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp" 
                    onChange={handleChange}
                  />
                </div>
                <div className="col-6">
                  <label for="exampleInputEmail1" class="form-label">Zip code</label>
                  <input 
                    name="ZipCode"
                    type="text" 
                    required={true} 
                    className="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp" 
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/*  */}

              <div class="row mb-3">
                <div className="col-6">
                  <label for="exampleInputEmail1" class="form-label">Email</label>
                  <input 
                    name="Email"
                    type="email" 
                    required={true} 
                    className="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp" 
                    onChange={handleChange}
                  />
                </div>
                <div className="col-6">
                  <label for="exampleInputEmail1" class="form-label">Phone</label>
                  <input 
                    name="Phone"
                    type="number" 
                    required={true} 
                    className="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp" 
                    onChange={handleChange}
                  />
                </div>
              </div>
          </form>
          <div class="row mb-3">
                <div className="col-6">
                <Link className="link" to='/instrution'><button className="mt-5 actn__btn">Back</button></Link>
                </div>
                <div className="col-6">
                <Link className="link" to='/yourExpriance'><button className="mt-5 actn__btn">Next</button></Link>
                </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 live__section">
          <LiveBoard personalInfo={info} expriance={expriance}/>
        </div>
      </div>
    </div>
  )
}