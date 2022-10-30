import React, { Component } from 'react';
import ExampleChart from './charts.jsx';
import ExampleChart2 from './charts copy.jsx';
import ExampleChart3 from './charts copy 2.jsx';
class App extends Component {
  render() {
    return (
      <div>
        <div>
        <ExampleChart3/>
        <ExampleChart2/>
        </div>
        <p>
          The dashboard will be changed later depending upon the type of data and type of charts we are dealing with.
          It depends on the article crawler page
        </p>
        <p>
          Need some suggestions
        </p>
        <ExampleChart/>
      </div>
    );
  }
}

export default App;