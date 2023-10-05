import React, {  } from 'react'

import './App.css'
import ReactApexChart from 'react-apexcharts';
import Chart from "react-apexcharts";
interface ChartOptions {
  chart: {
    id: string;
  };
  xaxis: {
    categories: number[];
  };
}

interface ChartSeries {
  name: string;
  data: number[];
}

interface TestChart {
  options: ChartOptions;
  series: ChartSeries[];
}

const App : React.FC = () => {
  const testChart: TestChart = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91,10],
      },
    ],
  };

  return (
    <>
      <div className="text-center">
        <div className="d-flex align-items-center justify-content-center">
          <Chart
            options={testChart.options}
            series={testChart.series}
            type="bar"
            width="500"
          />
        </div>
        <ReactApexChart
          options={testChart.options}
          series={testChart.series}
          type="bar"
          width="500"
        />
      </div>
    </>
  );
 

}

export default App
