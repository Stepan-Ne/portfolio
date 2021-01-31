import React from 'react';
import img from '../image/iam.jpg';
import s from '../App.module.css';

function About() {
  return (
    <>
      <div class='w3-card-5 w3-margin-top'>
        <div id='about' class='w3-container w3-padding-32'>
          <h2 class='w3-center'>Степан Небыков</h2>
          <div id='home' className='w3-content'>
            <div className='w3-center'>
              {/* <div className='w3-padding-32 w3-green w3-circle'>
                <img src={img} className='w3-circle' />
              </div> */}
              <img src={img} alt='Name1' className="w3-round" />
            </div>

            <div className='w3-container w3-center w3-margin-top'>
              <p>Привет! Я занимаюсь web-разработкой.</p>
              <p>Мой стек: JS/TS, React/Redux, NodeJS, C#.</p>
              <p>Мне нравится изучать новые технологи: .Net Core.</p>
              <p>И совершентсвовать полученные навыки: React/Redux.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
