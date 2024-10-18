import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartProps {
  data: { month: string; downloads: number }[];
}

const Barchart: React.FC<BarChartProps> = ({ data }) => {
  // Transform the data for the chart
  const labels = data.map((item) => item.month);
  const downloads = data.map((item) => item.downloads);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Student Performace",
        data: downloads,
        backgroundColor: "#629584",
        borderColor: "#243642",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Monthly Activity",
      },
    },
  };
  return (
    <>
      <Bar data={chartData} options={options} />;
    </>
  );
};

export default Barchart;
