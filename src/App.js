import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <TextField id="outlined-basic" label="Enter Site Link" varinat="outlined"/>
            <Button variant="contained" color="primary">
              Enter
            </Button>
            <TextField id="outlined-basic" label="Result" variant="outlined"/>
          </p>
        </header>
      </div>
    );
  }
}
export default App;
