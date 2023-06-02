import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faLocationDot,faPaperPlane} from '@fortawesome/free-solid-svg-icons'

export default function LiveBoard({personalInfo,expriance,school,skills,summary}){

  console.log(personalInfo)
  console.log(expriance)
  console.log(summary)

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
          <p>{summary.Summary}</p>
          
         </div>
        {/*  */}
        <div className='row expriance pt-4'>
          <h1>Experience</h1>
          <div className='company'>
            {expriance.map((index) => {
                console.log(index)
              return(
              <div className="user">
                <h1>{index.JobTitle}</h1>
                <p>{index.CompanyName} {index.City} {index.Country}</p>
                <p>{index.StartDate} / {index.Chacker} {index.EndDate}</p>
              </div>
              )
              })}
          </div>
          
        </div>
        {/*  */}
        <div className='row education pt-4'>
          <h1>Education</h1>
          <div className='school'>
          {school.map((index) => {
                console.log(index)
              return(
                <div className='school'>
                  <h1>{index.SchoolName}</h1>
                  <p> {index.SchoolLocation}</p>
                  <div className='school_info'>
                    <p>{index.Subject}</p>
                    <p>{index.Result}</p>
                  </div>
                  <p>{index.StartDate} / {index.Chacker} {index.EndDate}</p>
                </div>
             
              )
              })}
            
          </div>
        </div>
        {/*  */}
        <div className='row education pt-4'>
          <h1>Skills</h1>
          <div className='skill'>
            <div className='skill_info'>
            {skills.map((index) => {
                console.log(index)
              return(
                <div className='school'>
                  <p>{index.skills}</p>
                  
                </div>
              )
              })}
              
            </div>
          </div>
        </div>
        {/*  */}

        </div>
      </div>
       
    </div>
  )
}