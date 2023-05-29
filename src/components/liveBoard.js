import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil,faFilePdf,faDownload,faArrowRight,faFaceSmile} from '@fortawesome/free-solid-svg-icons'
import ModalView from './modal'


export default function LiveBoard(){
  return(
    <div className="liveBoard__component">
      <div className='row'>
        <div className='col'>
        <h1>Live Preview</h1>
        </div>
        <div className='col'>
        
        <ModalView />
        </div>
       
      </div>
      
        <div className="live__board">

        </div>
    </div>
  )
}