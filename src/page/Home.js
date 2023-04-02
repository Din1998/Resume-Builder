import Navbar from "../components/Navbar";
import '../css/index.css'


export default function Home() {

  return (
    <div className="home">
      <div className="container">
        <div className="hero__text">
          <h1>The Resume that gets in munities</h1>
        </div>
        <div className="hero__btn">
          <button className="btn-hero__btn">Create Resume</button>
        </div>
      </div>
    </div>
  )
}