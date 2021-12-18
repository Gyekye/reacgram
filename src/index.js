import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/css/tailwind.css';

import { firebase, reacgramAnalytics, FieldValue } from './lib/firebase';
import { FirebaseContext } from './context/firebase'

ReactDOM.render(
  // a context that provides data uses the .Provider property
  <FirebaseContext.Provider value={{firebase, reacgramAnalytics, FieldValue}} >
      <App title='John' />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
