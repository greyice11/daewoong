import {Chart} from 'react-google-charts';
import React from 'react'

class ExampleChart extends React.Component {
  constructor(props){
    super(props);
    this.state={
      options:{
        title: "Articles Crawled by Keywords ",
      },
      data:[
        ["Keywords", "Articles"],
        ["Daewoong", 11],
        ["UBIST", 5],
        ["UBIST2", 7],
        ["000", 3],
        ["UBIST2000", 7],
      ]
    };
  }
  render() {
    return (
      <Chart
        chartType="PieChart"
        data={this.state.data}
        options={this.state.options}
        width="100%"
        height="300px"
        legend_toggle
       />
    );
  }
};
export default ExampleChart;