import LiveBoard from "../components/liveBoard";
import { Link } from "react-router-dom";


export default function Summary({addSummary,info,expriance}){


  const handleChange = (e) => {
    addSummary((prev) => ({...prev,[e.target.name]:e.target.value}))
  }


  return(
    <div className="container-md py-5">
    <div className="row">
      <div className="col-md-6">
        <div>
          <h1>Add your summary.</h1>
          <p>Please fill out .</p>
        </div>
        <div>
        <form className="py-2">
            <div class="row mb-3">
              <div className="col-12">
                <label for="exampleInputEmail1" class="form-label">Write Your Summary</label>
                <textarea 
                  name="Summary"
                  className="form-control" 
                  id="exampleFormControlTextarea1" 
                  rows="7"
                  required="true"
                  onChange={handleChange}
                />

               
              </div>
              <div className="mt-5 col-3">
              <button className="actn__btn">Add</button>
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
              <Link className="link" to='/download'><button className="mt-5 actn__btn">Next</button></Link>
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