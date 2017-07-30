import React, {Component} from 'react';
import './App.css';
import parser from './description-parser';

const Result = ({ results }) => (
  <div>
    <ul>
      {
        results.items.map(result => {
          return (
            <li className="App-result">
              {result.name}: {result.size.toFixed(2)} sqm
            </li>
          )
        })
      }
      { results.sum &&
      (
        <li className="App-sum">
          Sum: {results.sum.toFixed(2)} sqm
        </li>
      )
      }
    </ul>
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { description: '', data: { items: [] } };

    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const result = parser.parse(this.state.description);
    this.setState({ data: result })
  }

  onDescriptionChange = (event) => {
    this.setState({ description: event.target.value })
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Count property size from description</h2>
        </div>
        <div className="App-content">
          <form onSubmit={this.onSubmit}>
            <textarea name="description" className="App-description" rows="15"
                      onChange={this.onDescriptionChange}/>
            <input type="submit" className="App-button" value="Parse"/>
          </form>
          <Result results={this.state.data}/>
        </div>
      </div>
    );
  }
}

export default App;
