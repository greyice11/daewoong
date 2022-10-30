import {Chart} from 'react-google-charts';
import React from 'react'

class ExampleChart2 extends React.Component {
  constructor(props){
    super(props);
    this.state={
      options:{
            title: 'New Articles This month',
            hAxis: {title: 'Keywords', minValue: 0, maxValue: 15},
          vAxis: {title: 'Articles', minValue: 0, maxValue: 15},
          legend: 'none'
      },
      data:[
            ['Keywords', 'Articles'],
            [ 8,      12],
            [ 4,      5.5],
            [ 11,     14],
            [ 4,      5],
            [ 3,      3.5],
            [ 6.5,    7]
      ]
    };
  }
  render() {
    return (
      <Chart
        chartType="BarChart"
        data={this.state.data}
        options={this.state.options}
        width="100%"
        height="200px"
        legend_toggle
       />
    );
  }
};
export default ExampleChart2;