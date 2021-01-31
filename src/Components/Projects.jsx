import React from 'react';
import { DiGithubBadge } from "react-icons/di";


function Projects() {
  return (
    <>
      <div id='about' class='w3-container w3-padding-32 w3-margin-top'>
        <h2 class='w3-center'>Projects</h2>
        <div id='home' className='w3-content w3-center'>
          <p>Скоро здесь появятся ссылки на проекты.</p>
          <p>See my works on gitHub:</p>
          <p class="w3-xxxlarge"><a target='_blank' href="https://github.com/Stepan-Ne"><DiGithubBadge /></a> </p>
         
        </div>
      </div>
    </>
  );
}

export default Projects;
