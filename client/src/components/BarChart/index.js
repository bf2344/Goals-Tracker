import React from 'react';
import {Bar} from 'react-chartjs-2';

const barChart = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: '% of Goals Achieved',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
      };

      return (
        <div>
          <h2>Goals Achieved By Month</h2>
          <Bar
            data={data}
            width={100}
            height={50}
            options={{
              maintainAspectRatio: false
            }}
          />
        </div>
      );
}

export default barChart;