import React, { Component } from 'react';
import Chart from 'chart.js';

export default class StatsChart extends Component {
    chartRef = React.createRef();

    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        const {speed, sped, spea, def, att, hp} = this.props;
        
        new Chart(myChartRef, {
            type: "bar",
            data: {
                labels: ["Speed", "Sp. Def", "Sp. Att", "Def", "Att", "HP"],
                datasets: [
                    {
                        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                        data: [speed, sped, spea, def, att, hp]
                    }
                ]
            },
            options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Base Stats'
                }
            }
        });
        // this.updateChart();
    }

    updateChart(chart, data){
        chart.data.datasets.pop();
        chart.data.datasets.push({
            data: data
        });
        chart.update();
    }

    renderUpdate(){
        const {speed, sped, spea, def, att, hp} = this.props;
        let updatedData = [speed, sped, spea, def, att, hp];
        this.updateChart(this.myChartRef, updatedData);
    }

    render() {
        return (
            <div className='chart'>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}