// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

//App.js
import './App.css';
import axios from 'axios';
import React,{useState,useEffect} from 'react';

function App() {

  const sendRequest = async() => {
    const response = await axios.get('https://port-0-ht-test-eu1k2llkqouw2h.sel4.cloudtype.app/');
    console.log(response);
    console.log(response.data);
  };

  useEffect(()=>{
    sendRequest();    
  });

  return (
    <div className="App">      
    </div>
  );
}
