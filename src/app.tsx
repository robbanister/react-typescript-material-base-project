import React, { Component} from "react";
import Button from '@material-ui/core/Button';

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Hello, World! With React and TypeScript & MaterialUI</h1>
				<Button variant="contained" color="secondary">Hello World</Button>
      </div>
    );
  }
}

export default App;
