import React from 'react';
import { DiGithubBadge } from 'react-icons/di';

function Projects() {
  return (
    <>
      <div id='about' class='w3-container w3-padding-32 w3-margin-top'>
        <h2 class='w3-center'>Projects</h2>
        <div id='home' className='w3-content w3-center'>
          <p>See my works on gitHub:</p>
          <p class='w3-xxxlarge'>
            <a target='_blank' href='https://github.com/Stepan-Ne'>
              <DiGithubBadge />
            </a>{' '}
          </p>
        </div>
        <div className='w3-content w3-center'>
          <table className="w3-table w3-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Стек</th>
                <th>Адрес</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>React-Redux</td>
                <td>
                  <a href='https://stepan-ne.github.io/react-redux-addPost/' target='_blank'>
                    Link
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Projects;
