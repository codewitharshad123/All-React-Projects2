import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Home.css';

const Home = () => {
  return (
    <div className="parent-container">
      <div className="d-flex  flex-row  parts">
        <div className="part1 d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-white p-2" data-aos="slide-right">Mern Stack Developer</h1>
          <div className="h-50">
          <lottie-player
                src="https://assets3.lottiefiles.com/packages/lf20_sSF6EG.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
        </div>
        <div className="part2 d-flex flex-column justify-content-center align-items-center">
          <div className="h-50">
              <lottie-player
                src="https://assets1.lottiefiles.com/packages/lf20_z01bika0.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
               <h1 className="text-white p-2"  data-aos="slide-left">Mern Stack Developer</h1>
            </div>
        </div>
      </div>
      <div className="seprator-text">
<span>TEXHINFOYT</span>
      </div>
    </div>
  );
};
export default Home;
