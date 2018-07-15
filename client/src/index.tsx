import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';


const checkAuth = () => true;

checkAuth() ? 
  (ReactDOM.render(<App />, document.getElementById('root') as HTMLElement)) : 
  (ReactDOM.render(<div/>, document.getElementById('root') as HTMLElement));