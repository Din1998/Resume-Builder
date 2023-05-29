import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil,faFilePdf,faPhone,faLocationDot,faPaperPlane} from '@fortawesome/free-solid-svg-icons'

export default function LiveBoard({personalInfo}){

  console.log(personalInfo)

  return(
    <div className="liveBoard__component">
      <div className='row'>
        <div className='col'>
          <p>Live Preview</p>
        </div>
      </div>
      <div className='d-flex justify-content-center live--board__body'>
        <div className="live__board ">
         <div className="row pt-4 personal__info">
          <div className="col-md-4">
            <div>
              <div className='name'>
                <h1>{personalInfo.FirstName}</h1>
                <h1>{personalInfo.LastName}</h1>
              </div>
            </div>
           
            <div>
              <div className="address">
                <FontAwesomeIcon icon={faLocationDot} className='live__board__icon' />
                <p>{personalInfo.Addresss}</p>
                <p>{personalInfo.ZipCode}</p>
              </div>
            </div>
            <div>
              <div className='email'>
                <FontAwesomeIcon icon={faPaperPlane} className='live__board__icon' />
                <p>{personalInfo.Email}</p>
              </div>
            </div>
           <div>
            <div className='phone'>
                <FontAwesomeIcon icon={faPhone} className='live__board__icon' />
                <p>{personalInfo.Phone}</p>
              </div>
           </div>
           
            
          </div>
         </div>
         {/*  */}

         <div className='row summary pt-4'>
          <h1>Summary</h1>
          <p>HI ! I'm Dinislam, Front-end web developer. I've found interest in software engineering almost 2 years ago, especially in Front-end development. After that, I’ve self taught myself coding. I tried to build websites, different applications using HTML, CSS, and JavaScript. Then I dived into some Back-end things such as Express Js,MongoDB to understand how applications work from end-to-end.</p>
         </div>
        {/*  */}
        <div className='row expriance pt-4'>
          <h1>Experience</h1>
          <div className='company'>
            <h1>Junior Frontend Developer</h1>
            <p>Arena Phone Bd Ltd</p>
            <p>Apr 2023 – Present</p>
          </div>
          <div className='company'>
            <h1>Junior Frontend Developer(Intern)</h1>
            <p>SST Tech Bd</p>
            <p>Apr 2023 – Present</p>
          </div>
        </div>
        {/*  */}
        <div className='row education pt-4'>
          <h1>Education</h1>
          <div className='school'>
            <h1>Nawab</h1>
            <div className='school_info'>
              <p>Business</p>
              <p>4.0</p>
            </div>
           
            <p>Apr 2023 – Present</p>
          </div>
          <div className='school'>
            <h1>National</h1>
            <div className='school_info'>
              <p>Business</p>
              <p>4.0</p>
            </div>
            
            <p>Apr 2023 – Present</p>
          </div>
        </div>
        {/*  */}
        <div className='row education pt-4'>
          <h1>Skills</h1>
          <div className='skill'>
            <div className='skill_info'>
              <p>Business</p>
              <p>Business</p>
              <p>Business</p>
              <p>Business</p>
              <p>4.0</p>
            </div>
          </div>
        </div>
        {/*  */}

        </div>
      </div>
       
    </div>
  )
}