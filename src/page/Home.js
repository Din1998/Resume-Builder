
import '../css/index.css'
import img from '../Asset/moon.png'


export default function Home() {

  return (
    <div className="home">
      <div className="container">
        <div className='hero__text-section'>
          <div className="hero__text">
            <h1>The Resume that gets in munities</h1>
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