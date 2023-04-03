import LivePreview from "../components/LivePreview";
import { useState } from "react";
import TextEditor from "../components/TextEditor";

export default function() {
  const [input,setInput] = useState("")
  console.log(input)
  const handleSubmit = (value) =>{
    setInput(value)
  }

  return(
    <div className="input__section">
      <div className="input__page--title">
          <h1>Let's Start</h1>
      </div>
       <div className="input__page--container">
          <div className="input__groups">
            <div>
              <h2>Personal Info</h2>
              <input 
              className="text__input"
              placeholder="Frist Name"
              type="text"
              value={input}
              onChange={(e) => handleSubmit(e.target.value)}
              />
              <input className="text__input" placeholder="Last name"  />
              <input className="text__input" placeholder="Address" />
              <input className="text__input" placeholder="Zip Code" />
              <input className="text__input" placeholder="City" />
              <input className="text__input" placeholder="Country" />
              <input className="text__input" placeholder="Phone" />
              <input className="text__input" placeholder="Email" />
            </div>
            <div>
              <h2>Expriance</h2>
              <input className="text__input" placeholder="Company Name" />
              <input className="text__input" placeholder="Job Title" />
              <input className="text__input" placeholder="Start Date" />
              <input className="text__input" placeholder="End Date" />
            </div>
            <div>
              <h2>Graduation</h2>
              <input className="text__input" placeholder="School Name" />
              <input className="text__input" placeholder="Subject" />
              <input className="text__input" placeholder="Passing Year" />
              <input className="text__input" placeholder="Subject" />
            </div>
            <div>
              <TextEditor />
            </div>
          </div>
          <div className="live__priview--section">
            <div>
              <h1>LivePreview</h1>
            </div>
            <div className="live__preview--comp">
              <LivePreview input={input} />
            </div>
        </div>
       </div>
    </div>
  )
}