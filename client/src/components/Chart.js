import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class Chart extends Component {
    
	constructor(props) {
    super(props);
        
		this.state = {
      charData: {
        labels: ['Surat', 'Ahmedabad', 'Rajkot', 'Mumbai', 'Delhi', 'Hyderabad'],
        datasets: [{
          label: 'Population',
          data: [
            617538,
            198742,
            892310,
            1000234,
            234568,
            876345
          ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)'
          ]
        }]
      }
    }
	}

  static defaultProps = {
    displayTitle:true,
    displayLegend:true,
    legendPosition:'right'
  }
    
	render() {

    return (

    	<div className="chart">
    	  <Bar
    	    date={this.state.chartData}
    	    options={{
    	      title: {
    	        display: this.props.displayTitle,
    	        text: 'Largest cities in India',
    	        fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        />
      </div>
    )
  }
}


export default Chart;