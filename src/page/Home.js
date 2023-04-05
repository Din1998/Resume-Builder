import { useState } from 'react'
import '../css/index.css'
import img from '../Asset/moon.png'
import { Typewriter } from 'react-simple-typewriter'


export default function Home() {
  
  const [count,setCount] = useState(0);
  
  const handleDone = () => {
    console.log("done")
  }

  const handleType = (counter) => {
    setCount(counter)
    console.log("run every type")
  }

  return (
    <div className="home">
      <div className="container">
        <div className='hero__text-section'>
          <div className="hero__text">
            <h1>The Resume that gets in ""

              <Typewriter 
                words={['munities']}
                loop={20}
                cursor
                cursorStyle="_"
                typeSpeed={50}
                delaySpeed={1000}
                onLoopDone={handleDone}
                onType={handleType}

              />


            </h1>
          </div>
          <div className="hero__btn">
            <button className="btn-hero__btn">Create Resume</button>
          </div>
        </div>
        <div className='hero__img-section'>
          <img className='hero__img' src={img} />
        </div>
        
      </div>
    </div>
  )
}