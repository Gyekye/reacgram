import React from 'react';
import ReactDOM from 'react-dom';

import { app, auth, FieldValue } from './lib/firebase/firebase';
import { FirebaseContext } from './context/firebase/firebase';


import App from './App';
import './assets/css/main.css';


ReactDOM.render(
    <FirebaseContext.Provider value={{ app, auth, FieldValue }}>
      <App />
    </FirebaseContext.Provider>,

  document.getElementById('root')
);
