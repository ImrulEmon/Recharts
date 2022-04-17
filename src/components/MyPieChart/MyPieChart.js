// import "./styles.css";
import React from "react";

import { Tooltip, Legend } from "recharts";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
const MyPieChart = () => {
  // load data like useState & useEffect
  const socialMedia = [
    { name: "Facebook", value: 2910 },
    { name: "YouTube", value: 2562 },
    { name: "WhatsApp", value: 2000 },
    { name: "Instagram", value: 1478 },
    { name: "WeChat", value: 1263 },
    { name: "TikTok", value: 1000 },
    { name: "Facebook Messenger", value: 988 },
    { name: "Douyin", value: 600 },
    { name: "QQ", value: 574 },
    { name: "Sina Weibo", value: 573 },
    { name: "Kuaishou", value: 573 },
    { name: "Snapchat", value: 557 },
    { name: "Telegram", value: 550 },
    { name: "Pinterest", value: 444 },
    { name: "Twitter", value: 436 },
    { name: "Reddit", value: 430 },
    { name: "Quora", value: 300 }
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  return (
    <PieChart width={400} height={400} className="mx-auto my-5 container-fluid">
      <Pie
        dataKey="value"
        isAnimationActive={true}
        data={socialMedia}
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        label
      />
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default MyPieChart;
