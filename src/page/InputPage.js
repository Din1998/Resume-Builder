
import { useState,useEffect } from "react";

import LiveView from "../components/LiveView";
import {storage} from "../firebase";
import {ref,uploadBytes,listAll,getDownloadURL} from "firebase/storage";
import {v4} from "uuid"
import {PDFDownloadLink} from "@react-pdf/renderer" 
import PdfGenarator from "../components/PdfGenarator";

export default function() {

  const [imgUpload,setImgUpload] = useState(null)
  const [imageList,setImageList] = useState([])
  console.log(imageList)
  const imageListRef = ref(storage,"images/")

  const uploadImage = () => {
    if (imgUpload == null) return;

    const imageRef = ref(storage,`images/${imgUpload.name + v4()}`)
    uploadBytes(imageRef,imgUpload).then((snaphsot) => {
      getDownloadURL(snaphsot.ref).then((url) => {
        setImageList((prev) => [...prev,url])
      })
      
    });
  }

  useEffect(() => {
    listAll(imageListRef).then((response) => {
     response.items.forEach((item) => {
      getDownloadURL(item).then((url) => {
        setImageList((prev) => [...prev,url])
      })
     })
    })
  }, [])


  const [personalInfo,setInput] = useState({
    fristName:"",
    lastName: "",
    city: "",
    country: "",
    zipCode: "",
    phone: "",
    email: "",
    objective: "",
    companyName:"",
    jobTitle:"",
    jobResponse: "",
    startDate: "",
    endDate: "",
    schoolName: "",
    subject:"",
    gpa: "",
    passingYear:"",
    socialLink1: "",
    socialLink2: "",
    profileImg: "",
    skills: ""

  })
  // console.log(input)
  const handleChange = (e) => {
    setInput((prev) => ({...prev,[e.target.name]:e.target.value}))
  }



  return(
    <div className="input__section">
      <div className="input__page--title">
          <h1>Let's Start</h1>
      </div>
       <div className="input__page--container">
          <div className="input__groups">

              {/* personal info */}
            <div className="personal__info">
              <p>Personal Info</p>
              <form>
                <input 
                  className="text__input"
                  placeholder="Frist Name"
                  type="text"
                  name="fristName"
                  onChange={handleChange}
                />
                <input 
                  className="text__input" 
                  placeholder="Last name"  
                  type="text"
                  name="lastName"
                  onChange={handleChange}
                  />
                 <input 
                  className="text__input" 
                  placeholder="City" 
                  type="text"
                  name="city"
                  onChange={handleChange}/>
                <input 
                  className="text__input" 
                  placeholder="Zip Code" 
                  type="text"
                  name="zipeCode"
                  onChange={handleChange}
                  />
               
                <input 
                  className="text__input" 
                  placeholder="Country" 
                  type="text"
                  name="country"
                onChange={handleChange}/>
                <input 
                  className="text__input" 
                  placeholder="Phone" 
                  type="text"
                  name="phone"
                onChange={handleChange}/>
                <input 
                  className="text__input" 
                  placeholder="Email" 
                  type="email"
                  name="email"
                  onChange={handleChange}/>
                <textarea 
                  className="input__textArea"
                  placeholder="Write your objective"
                  name="objective"
                  onChange={handleChange}
                 />
                 <input 
                  className="text__input" 
                  placeholder="Skills" 
                  type="text"
                  name="skills"
                  onChange={handleChange}/>
                   
              </form> 
            </div>

            {/* Expriance */}
            <div>
              <p>Expriance</p>
              <form>
              <input 
                className="text__input" 
                placeholder="Company Name" 
                type="text"
                name="companyName"
                onChange={handleChange}
                />
              <input 
                className="text__input" 
                placeholder="Job Title" 
                type="text"
                name="jobTitle"
                onChange={handleChange}
                />
              <input 
                className="text__input" 
                placeholder="Start Date" 
                type="date"
                name="startDate"
                onChange={handleChange}
                />
              <input 
                className="text__input" 
                placeholder="End Date" 
                type="date"
                name="endDate"
                onChange={handleChange}
                />
              <textarea 
                className="input__textArea"
                placeholder="Write your job responsiblity"
                name="jobResponse"
                onChange={handleChange}
              />
               
            </form>
            </div>

            {/* Graduation */}
            <div>
              <p>Graduation</p>
             <form>
              <input 
                className="text__input" 
                type="text"
                name="schoolName"
                placeholder="School Name" 
                onChange={handleChange}
                />
              <input 
                className="text__input"
                type="text"
                name="subject"
                placeholder="Subject" 
                onChange={handleChange}
                />
              <input 
                className="text__input" 
                type="text"
                name="gpa"
                placeholder="GPA" 
                onChange={handleChange}
                />
              <input 
                className="text__input" 
                type="text"
                name="passingYear"
                placeholder="Passing Year" 
                onChange={handleChange}
                />
                
            </form>
            </div>

            {/* <div>
              <p>Write your objective</p>
              <TextEditor />
            </div> */}

            {/* sosial links */}

            <div className="school__de">
              <p>Social links</p>
                <input 
                  className="text__input" 
                  type="text"
                  name="socialLink1"
                  placeholder="Socoal Links / Project Links" 
                  onChange={handleChange}
                  />
                  <input 
                  className="text__input" 
                  type="text"
                  name="socialLink2"
                  placeholder="Socoal Links / Project Links" 
                  onChange={handleChange}
                  />
            </div>
          </div>

            {/* Live view section */}
          <div className="live__priview--section">
            <div>
              <p>LivePreview</p>
            </div>
            <div className="live__preview--comp">
              <LiveView 
                personalInfo={personalInfo}
                imageList={imageList}
              />
              <PdfGenarator  personalInfo={personalInfo} />
            </div>
        </div>
       </div>
    </div>
  )
}