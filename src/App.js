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
    const domain_name = 'shorty.in/';
    const randomstring = Math.random().toString(32).substring(2,6)+Math.random().toString(32).substring(2,6);
    const new_url = domain_name+randomstring;
    
    this.setState({result_url:new_url}, () => {
      console.log(this.state);});
    
    fetch('http://localhost:3000/', {
      method:'post',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify({
        org_url:this.state.input,
        result_url:this.state.result_url
      })

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
