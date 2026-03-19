import { Line } from "react-chartjs-2";
import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto"; //Dont get rid of this
import { convertNumber } from "../../../functions/convertNumbers";

const LineChart = ({ chartData,priceType, multiAxis })=> {
  const options = {
    plugins: {
      legend: {
        display: multiAxis ? true : false,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      crypto1: {
        type: 'linear',
        display: true,
        position: 'left',
        ticks:{
          callback: function(value){
            if(priceType === "prices"){
              return '$' + value.toLocaleString()
            }else{
              return '$' + convertNumber(value)
            }
          }
        }
      },
      crypto2: {
        type: 'linear',
        display: true,
        position: 'right',
        ticks:{
          callback: function(value){
            if(priceType === "prices"){
              return '$' + value.toLocaleString()
            }else{
              return '$' + convertNumber(value)
            }
          }
        }
      },
    },
  };

  return <Line data={chartData} options={options} />;
}
LineChart.propTypes = {
  chartData: PropTypes.object ,
  priceType: PropTypes.string ,
  multiAxis: PropTypes.bool,
}
export default LineChart;