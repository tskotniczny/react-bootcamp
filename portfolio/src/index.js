import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import App from './components/App';
import Jokes from "./components/Jokes";
import "./index.css";


ReactDOM.render(
<Router history={createBrowserHistory()}>
    <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/jokes" component={Jokes}/>
    </Switch>
</Router>, 
document.getElementById('root'));



//Promise and how it works in the background -------------------------------------
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


