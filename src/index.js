import React from 'react';
import ReactDOM from 'react-dom';

import { app, FieldValue } from './lib/firebase/firebase';
import { FirebaseContext } from './context/firebase/firebase';


import App from './App';
import './assets/css/main.css';


ReactDOM.render(
    <FirebaseContext.Provider value={{ app, FieldValue }}>
      <App />
    </FirebaseContext.Provider>,

  document.getElementById('root')
);
