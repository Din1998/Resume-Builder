import { useState } from "react"

export default function LiveView({personalInfo}) {

  console.log(personalInfo)


   
  return (
    <div className="live__view">
      <div className="live__view--container">
        <div className="personal__info-container">
          <div className="name_container">
            <h2>{personalInfo.fristName} </h2> 
            <h2>{personalInfo.lastName}</h2>
          </div>
          <p><i>{personalInfo.jobTitle}</i></p>
          <div className="address_container">
           
            <p>{personalInfo.city}</p>
            <p>{personalInfo.zipeCode}</p>
            <p>{personalInfo.country}</p>
          </div>
          
          <p>Phone: {personalInfo.phone}</p>
          <p>Email: {personalInfo.email}</p>
          {/* img */}
          <div>
           <img />
          </div>
        </div>
        <div className="company__info">
          <h2>{personalInfo.companyName}</h2>
          <p><i>{personalInfo.jobTitle}</i></p>
          <div className="job_detail">
            <p>{personalInfo.startDate}</p> / <p>{personalInfo.endDate}</p>
          </div>
         <p>{personalInfo.jobResponse}</p>
        </div>
        <div className="school_info">
          <h2>{personalInfo.schoolName}</h2>
          <p><i>{personalInfo.subject}</i></p>
          <p><b>GPA :</b> {personalInfo.gpa}</p>
          <p><b>Passing Year :</b> {personalInfo.passingYear}</p>
        </div>

      </div>
      
    </div>
  )
}