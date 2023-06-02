
import { Link } from "react-router-dom";
import { Canvas } from '@react-three/fiber';
import {Sphere, MeshDistortMaterial } from '@react-three/drei';
import Marquee from "react-fast-marquee";

import img from '../Asset/DALL·E 2023-06-02 21.16.47 - an yellow robot writing on a paper.png'

import logo from '../Asset/Logo/Frame.png'
import logo1 from '../Asset/Logo/Primary Logo.png'
import logo2 from '../Asset/Logo/Togg.png'
import logo3 from '../Asset/Logo/VW.png'
import logo4 from '../Asset/Logo/smart-ix.png'

export default function Hero(){
  return(
    <div className="container-md home">
      <div className="row">
        <div className="col-md-4 py-5">
          <h1 className="hero__text">The resume that gets the job.</h1>
          <Link className="link" to='/instrution'><button className="mt-5 actn__btn">Create resume</button></Link>
        </div>
        <div className='img__box col-md-8 py-5'>
          <Canvas>
              <ambientLight intensity={2.5}/>
              <directionalLight position={[3,2,1]}/>
              <Sphere args={[1,100,200]} scale={3}>
              <MeshDistortMaterial 
                color="#ECB21D"
                attach="material"
                distort={0.5}
                speed={2}
              />
              </Sphere>
          </Canvas>
          <img className='glow__img' src={img} alt=""/>
      </div>
      </div>

      <div className="row">
        <div className="col-md-12">
        <Marquee>
          <div className='group__logo'>
            <img src={logo} alt=""/>
            <img src={logo1} alt=""/>
            <img src={logo2} alt=""/>
            <img src={logo3} alt=""/>
            <img src={logo4} alt=""/>
      
          </div>
        </Marquee>
        </div>
        
      </div>

    </div>
  )
}