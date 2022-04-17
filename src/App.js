import "./styles.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import MyLineChart from "./components/MyLineChart/MyLineChart";
import MyPieChart from "./components/MyPieChart/MyPieChart";
import SocialPie from "./components/SocialPie/SocialPie";
export default function App() {
  return (
    <div className="App">
      <h1>Simple Chart</h1>
      <h2>Imrul Emon</h2>
      <MyLineChart></MyLineChart>
      <MyPieChart></MyPieChart>
      <SocialPie></SocialPie>
    </div>
  );
}
