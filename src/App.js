import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){

    return (
     <React.Fragment className="App">
        {/*<header className="App-header"> {/*re-work header and styling*/}
           <h1>Stopwatch *header*</h1>
           <span>text currently only shows up in header element in App.js...</span>
           <button>Start</button>
        {/*</header>*/}
        <p>why does this not display? the rest of content must have been getting covered/ignored ny app.css app-header class</p>
        <button>Stop</button>
        <button>Reset</button>
        <button>Save</button>  
     </React.Fragment>
    );
  }
}

export default App;
