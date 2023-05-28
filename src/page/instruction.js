import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil,faFilePdf,faDownload,faArrowRight,faFaceSmile} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Instruction(){
  return(
    <div className="container-md">
      <div className="row">
        <div className="col text-center py-5">
          <h1>Create a resume in munities</h1>
        </div>
        {/*  */}
        <div className="row">
          <div className="col-md-4">

            <div className='row box'>
              <div className='col'>
                <FontAwesomeIcon icon={faPencil} className='icon py-4'/>
                <p className="ins__text">Write your <br/> information</p>
              </div>
              <div className='col'>
              <FontAwesomeIcon icon={faArrowRight} className='icon '/>
              </div>
            </div>

          </div>
          <div className="col-md-4">
            <div className='row box'>
              <div className='col'>
                <FontAwesomeIcon icon={faFilePdf} className='icon py-4'/>
                <p className="ins__text">Genarate your <br/> resume</p>
              </div>
              <div className='col'>
              <FontAwesomeIcon icon={faArrowRight} className='icon'/>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className='row box'>
              <div className='col'>
                <FontAwesomeIcon icon={faDownload} className='icon py-4'/>
                <p className="ins__text">Download Your <br/> Resume</p>
              </div>
              <div className='col'>
              <FontAwesomeIcon icon={faFaceSmile} className='icon'/>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className='row '>
          <div className='col-12 d-flex justify-content-center flex-column align-items-center py-5'>
          <Link className="link" to='/instrution'><button className="mt-5 actn__btn">Let’s Go</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}