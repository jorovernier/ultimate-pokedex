import React, { Component } from 'react';
import Chart from 'chart.js';

export default class StatsChart extends Component {
    constructor(props) {
      super(props);
      this.canvasRef = React.createRef();
    }
  
    componentDidUpdate() {
      this.myChart.data.labels = ["Speed", "Sp. Def", "Sp. Att", "Def", "Att", "HP"];
      this.myChart.data.datasets[0].data = [this.props.speed, this.props.sped, this.props.spea, this.props.def, this.props.att, this.props.hp];
      this.myChart.update();
    }
  
    componentDidMount() {
      this.myChart = new Chart(this.canvasRef.current, {
        type: 'bar',
        options: {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
          scales: {
            yAxes: [
              {
                ticks: {
                  min: 0,
                  max: 250
                }
              }
            ]
          }
        },
        data: {
          labels: ["Speed", "Sp. Def", "Sp. Att", "Def", "Att", "HP"],
          datasets: [{
            data: [
                this.props.speed, 
                this.props.sped, 
                this.props.spea, 
                this.props.def, 
                this.props.att, 
                this.props.hp
            ],
            backgroundColor: ['#ed5587', '#78c850', '#688ff0', '#f8d132', '#f08030', '#ed4630']
          }]
        }
      });
    }

    render() {
      return (
          <div className='chart'>
              <canvas ref={this.canvasRef} />
          </div>
      );
    }
  }