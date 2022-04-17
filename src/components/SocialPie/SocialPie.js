import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import "./social.css";
const data = [
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

const COLORS = [
  "#3b5998",
  "#cd201f",
  "#43d854",
  "#fe4164",
  "#09B83E",
  "#ff0050",
  "#3b5998",
  "#69c9d0",
  "#000000",
  "#ce1126",
  "#F74706",
  "#b3ae04",
  "#00405d",
  "#bd081c",
  "#55acee",
  "#ff4500",
  "#A82400"
];

export default function SocialPie() {
  return (
    <PieChart width={400} height={400} className="mx-auto mb-5">
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        // labelLine={false}
        // label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend />
      <Tooltip />
    </PieChart>
  );
}
