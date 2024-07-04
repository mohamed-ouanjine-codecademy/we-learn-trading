import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import store from './app/store'; // Import the store
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();