import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      input:'',
      result_url:''
    }
  }

  onInputChange = (event) => {
    this.setState({input:event.target.value});
  };

  onButtonSubmit = () => {   
    fetch('http://localhost:3000/', {
      method:'post',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify({
        org_url:this.state.input,
      })
    })
      .then(res => res.json())
      .then(data => {
        this.setState({result_url:data})
      })     
};
  
  render(){
    const {result_url} = this.state;
    return (
      <div className="App">
        <header className="App-header">
            <TextField id="outlined-basic" label="Enter Site Link" variant="outlined" onChange={this.onInputChange}/>
            <Button variant="contained" color="primary" onClick={this.onButtonSubmit}>
              Short the url
            </Button>
            <TextField id="result" label="Result" variant="outlined" value={result_url}/>
        </header>
      </div>
    );
  }
}
export default App;
