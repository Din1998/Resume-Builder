
import { Link } from "react-router-dom";

export default function Hero(){
  return(
    <div className="container-md home">
      <div className="row">
        <div className="col-md-4 py-5">
          <h1 className="hero__text">The resume that gets the job.</h1>
          <Link className="link" to='/instrution'><button className="mt-5 actn__btn">Create resume</button></Link>
          
        </div>
        
      </div>
    </div>
  )
}