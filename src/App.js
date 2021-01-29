import React, {useReducer} from 'react';
import s from  './App.module.css';
import img from './image/iam.jpg';

const myInfo = `Привет! Меня зовут Степан Небыков. Мне 35. Позади учеба в ВТУЗе, работа с радиотехникой на заводе и много фриланса. С декабря 2019 я стал изучть web-разработку: JS/TS, React-Redux, NodeJS и немного PHP. Эта сфера знаний мне очень нравится. Продолжаю осваивать новое, а накопившееся собираюсь выкладывать здесь или на gitHub.`
const projects = [{
    name:'gitHub', 
    link: 'https://github.com/Stepan-Ne'
},
{
    name: 'SocialNetwork_proto. There is the trainig project from IT-Kamasutra',
    link: 'https://stepan-ne.github.io/SocialNetwork/'
}]
const links = [{
    name: 'Twitter', 
    link: 'https://twitter.com/Stepan21497720'
}]

function App() {

    const initialState = {info: 'Hello World!'};
    function reducer(state = initialState, action) {
        switch (action.type) {
            case 'about':
                return {
                    ...state,
                    info: myInfo,
                    image: img,
                    id: action.id
                };
            case 'projects':
                return {
                    ...state,
                    info: projects,
                    image: '',
                    id: action.id
                };
            case 'contacts':
                return {
                    ...state,
                    info: links,
                    image: '',
                    id: action.id
                };
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={s.main}>
        <div className={s.menu}>

            <div className={state.id == 1 ? s.section + ' ' + s.active : s.section}
                 onClick={() => dispatch({type: 'about', id: 1})}>
                <h2>About me</h2>
            </div>

            <div className={state.id == 2 ? s.section + ' ' + s.active : s.section}
                 onClick={() => dispatch({type: 'projects', id: 2})}>
                <h2>Projects</h2>
            </div>

            <div className={state.id == 3 ? s.section + ' ' + s.active : s.section}
                 onClick={() => dispatch({type: 'contacts', id: 3})}>
                <h2>Contacts</h2>
            </div>
        </div>

        <div className={s.info}>
            <div className={s.ava}>
                {
                    state.image && <img src={state.image} alt="ava" />
                }
            </div>
            <div className={s.description}>
                {typeof state.info === 'string'
                ?  <p className={s.infoText}> {state.info} </p>
            : (<ul>
                {state.info.map( (i, index) => <li key={index.toString()}>
                <a className={s.link} href={i.link} target='_blank'><b>{i.name}</b></a>
                </li> )}
            </ul>)}
            
               
            </div>
        </div>

    </div>
  );
}

export default App;
