import { Line } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";

ChartJS.register(ArcElement, Tooltip, Legend);

const LineChart = ({
  userLables,
  userData,
}: {
  userLables: string[];
  userData: {
    revenue: number[];
    sales: number[];
  };
}) => {
  const data = {
    labels: userLables,
    datasets: [
      {
        label: "Revenue",
        data: userData.revenue,
        backgroundColor: ["#2086BF"],
        borderColor: ["#2086BF"],
        borderWidth: 3,
        tension: 0.5,
      },
      {
        label: "Sales",
        data: userData.sales,
        backgroundColor: ["#F86624"],
        borderColor: ["#F86624"],
        borderWidth: 3,
        tension: 0.5,
      },
    ],
  };

  const options = {
    // aspectRatio: 3,
    maintainAspectRatio: true,
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        align: "end",
        labels: {
          boxWidth: 5,
          boxHeight: 5,
          usePointStyle: true,
        },
      },
    },
  };
  //@ts-ignore
  return <Line data={data} options={options} />;
};

export default LineChart;
