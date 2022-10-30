import {Chart} from 'react-google-charts';
import React from 'react'

class Chart2 extends React.Component {
  constructor(props){
    super(props);
    this.state={
      options:{
            title: 'Articles Crawled Per Month',
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
        chartType="ColumnChart"
        data={this.state.data}
        options={this.state.options}
        width="100%"
        height="2 00px"
        legend_toggle
       />
    );
  }
};
export default Chart2;