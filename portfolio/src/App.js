import React, { Component } from 'react';



// class RegularClass{}
// class ComponentClass extends Component{}

// const regularClassInstance = new RegularClass();
// const componentClassInstance = new ComponentClass();

// console.log("regularClassInstance", regularClassInstance);
// console.log("componentClassInstance", componentClassInstance);

class App extends Component{
    state = {displayBio: false}

    toggleDisplayBio = () => {
        this.setState({displayBio: !this.state.displayBio})
    }

    render() {

        return (
            <div> 
                <h1> Hello </h1> 
                <p> My name is Tomek. I'm a software engineer. </p>  
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
            </div>
        )
    }
}

export default App;
