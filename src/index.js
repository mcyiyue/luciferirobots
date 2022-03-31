import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ShowLMemberCards from './ShowLMemberCards';
import {LMemberData} from './LMemberData';


const container=document.getElementById('root');

//Create a root
const root=ReactDOMClient.createRoot(container);

//Render Element to Root
root.render(<ShowLMemberCards memberList={LMemberData}/>);

// ReactDOM.render(
//   <LMember name='Jo Immanuel'/>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();