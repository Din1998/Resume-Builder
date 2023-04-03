import { useState } from "react"

export default function PersonalInfo() {
  const [input,setInput] = useState("")
  console.log(input)

  const handleSubmit = (value) =>{
    setInput(value)
  }

  return(
    <div>
      <p>Personal Info</p>
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
  )
}