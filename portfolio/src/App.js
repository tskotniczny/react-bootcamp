import React, { Component } from 'react';
import Projects from "./Projects";
import SocialProfile from "./SocialProfiles";
import profile from "./assets/profile.png";
import Title from "./Title";


class App extends Component{
    state = {displayBio: false}

    toggleDisplayBio = () => {
        this.setState({displayBio: !this.state.displayBio})
    }

    render() {

        return (
            <div> 
                <img className="profile" src={profile} alt="profile"/>
                <h1> Hello </h1> 
                <p> My name is Tomek. </p>
                <Title /> 
                <p> I'm always looking forward to working on meaningful projects. </p>
                {this.state.displayBio ? 
                (
                    <div>
                        <p> I live in Southampton. </p>
                        <p> My favorite language is JavaScript and I think React.js is awesome</p>
                        <p> Besides coding, I also love music!</p>
                        <div>
                            <button onClick = {this.toggleDisplayBio}>Show less</button>
                        </div>
                    </div>
                ) : (
                    <div>
                        <button onClick={this.toggleDisplayBio}> Read more </button>
                    </div>
                    )
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfile />
            </div>
        )
    }
}

export default App;
