import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import App from './components/App';
import Jokes from "./components/Jokes";
import Header from './components/Header';
import "./index.css";


ReactDOM.render(
<Router history={createBrowserHistory()}>
    <Switch>
        <Route exact path="/" render={() => <Header> <App /> </Header>}/>
        <Route path="/jokes" render={() => <Header> <Jokes /> </Header>}/>
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


