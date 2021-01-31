import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import { Route, Link, Switch } from 'react-router-dom'; 
import { Divider } from 'semantic-ui-react';
import s from './App.module.css';

import 'semantic-ui-css/semantic.min.css';
import { Input, Menu, Segment, Card } from 'semantic-ui-react';
import About from './Components/About';
import Projects from './Components/Projects';
import Contacts from './Components/Contacts';
import Error from './Components/Error';


const myInfo = `Мне нравится web-разработка!
Front-end: JS/TS, React-Redux.
Back-end: NodeJS и немного С#.`;

// const projects = [{
//     name:'gitHub',
//     link: 'https://github.com/Stepan-Ne'
// },
// {
//     name: 'SocialNetwork_proto. There is the trainig project from IT-Kamasutra',
//     link: 'https://stepan-ne.github.io/SocialNetwork/'
// }]
// const links = [{
//     name: 'Twitter',
//     link: 'https://twitter.com/Stepan21497720'
// }]

function App() {

  return (
    <>
    <Navbar />
    <Switch>
    <Route exact path='/portfolio' component={About} />
    <Route exact path='/projects' component={Projects} />
    <Route exact path='/contacts' component={Contacts} />
    <Route component={Error}/>
    </Switch>
    
      
    </>
  );
}

export default App;
