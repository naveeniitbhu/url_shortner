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
    console.log(event.target.value);
  };

  onButtonSubmit = () => {
    const url_org = this.state.input;
    const domain_name = 'shorty.in/';
    const randomstring = Math.random().toString(32).substring(2,6)+Math.random().toString(32).substring(2,6);
    const new_url = domain_name+randomstring;
    console.log(new_url);
    this.setState({result_url:new_url});
  };

  render(){
    const {result_url} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <TextField id="outlined-basic" label="Enter Site Link" variant="outlined" onChange={this.onInputChange}/>
            <Button variant="contained" color="primary" onClick={this.onButtonSubmit}>
              Short the url
            </Button>
            <TextField id="result" label="Result" variant="outlined" value={result_url}/>
          </p>
        </header>
      </div>
    );
  }
}
export default App;
