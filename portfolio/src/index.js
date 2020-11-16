import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import "./index.css";

ReactDOM.render(<App/>, document.getElementById('root'));



//Promise and how it works in the background
// new Promise((resolve, reject) => {
//     return reject(new Error("No Bears"));

//     setTimeout(() => {
//         resolve("Bears, Beets, Battlestar Galactica");
//     }, 2000);
// })
// .then( quote => {
//     console.log(quote);
// })
// .catch (error => console.log("Error", error));


