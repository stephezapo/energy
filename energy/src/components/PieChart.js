import React, { Component } from 'react';
import { Chart } from 'primereact/chart';
import { ProgressBar } from 'primereact/progressbar';

export class PieChartDemo extends Component {

    constructor(props) {
        super(props);

        this.chartData = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#42A5F5",
                        "#66BB6A",
                        "#FFA726"
                    ],
                    hoverBackgroundColor: [
                        "#64B5F6",
                        "#81C784",
                        "#FFB74D"
                    ]
                }
            ]
        };

        this.lightOptions = {
            legend: {
                labels: {
                    fontColor: '#495057'
                }
            }
        };
    }

    render() {
        return (
            <div className="card">
                <Chart type="pie" data={this.chartData} options={this.lightOptions} />
            </div>
        )
    }
}