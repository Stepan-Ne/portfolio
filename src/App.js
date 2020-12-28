import React, {useReducer} from 'react';
import s from  './App.module.css';

function App() {

    const initialState = {info: 'Hello World!'};
    function reducer(state = initialState, action) {
        switch (action.type) {
            case 'about':
                return {
                    ...state,
                    info: 'My name is Steve Nebykov'
                };
            case 'projects':
                return {
                    ...state,
                    info: 'There is link to my github: '
                };
            case 'contacts':
                return {
                    ...state,
                    info: 'Twitter: '
                };
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={s.main}>
        <div className={s.menu}>

            <div className={s.section} onClick={() => dispatch({type: 'about'})}>
                <h2>About me</h2>
            </div>

            <div className={s.section} onClick={() => dispatch({type: 'projects'})}>
                <h2>Projects</h2>
            </div>

            <div className={s.section} onClick={() => dispatch({type: 'contacts'})}>
                <h2>Contacts</h2>
            </div>
        </div>

        <div className={s.info}>
            <p> {state.info} </p>
        </div>

    </div>
  );
}

export default App;
