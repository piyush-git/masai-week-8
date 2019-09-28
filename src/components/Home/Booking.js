import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';

var dataJuneSales = [];
var dataJulySales = [];
var labelsArr = [];
for (var i = 0; i < 30; i++) {
  dataJuneSales.push(Math.floor(Math.random() * 100));
  dataJulySales.push(Math.floor(Math.random() * 100));
  labelsArr.push(i+1);
}

const data = {
  labels: labelsArr,
  datasets: [
    {
      label: 'June Car Bookings',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.3)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: dataJuneSales
    },
    {
      label: 'July Car Bookings',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(148,25,25,0.4)',
      borderColor: 'rgba(148,25,25,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: dataJulySales
    }
  ]
};

export default class LineChart extends Component {
  render() {
    return (
      <div className="offset-2 mb-5">
        <div style={{marginTop: 200, width: 800}} className="text-center">
            <h2>Booking Statistics</h2>
            <Line ref="chart" data={data} />
        </div>
      </div>
    );
  }

  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data
    console.log(datasets[0].data);
    console.log(datasets[1].data);
  }
}