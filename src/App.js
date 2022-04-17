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
export default function App() {
  return (
    <div className="App">
      <h1>Simple Chart</h1>
      <h2>Imrul Emon</h2>
      <MyLineChart></MyLineChart>
    </div>
  );
}
