import React, {useReducer} from 'react';
import s from  './App.module.css';
import img from './image/iam.jpg';

function App() {

    const initialState = {info: 'Hello World!'};
    function reducer(state = initialState, action) {
        switch (action.type) {
            case 'about':
                return {
                    ...state,
                    info: 'My name is Steve Nebykov',
                    image: img,
                    id: action.id
                };
            case 'projects':
                return {
                    ...state,
                    info: 'There is link to my github: ',
                    image: '',
                    id: action.id
                };
            case 'contacts':
                return {
                    ...state,
                    info: 'Twitter: ',
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
                <p> {state.info} </p>
            </div>


        </div>

    </div>
  );
}

export default App;
