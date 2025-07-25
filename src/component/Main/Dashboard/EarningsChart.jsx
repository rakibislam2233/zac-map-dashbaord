import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {  ChevronDown } from "lucide-react";

// Sample earnings data matching the image style
const generateEarningsData = () => {
  return {
    earnings: [
      { name: "Jan", totalEarnings: 5400 },
      { name: "Feb", totalEarnings: 3200 },
      { name: "Mar", totalEarnings: 8500 },
      { name: "Apr", totalEarnings: 9200 },
      { name: "May", totalEarnings: 8800 },
      { name: "Jun", totalEarnings: 8900 },
      { name: "Jul", totalEarnings: 9100 },
      { name: "Aug", totalEarnings: 5600 },
      { name: "Sep", totalEarnings: 3200 },
      { name: "Oct", totalEarnings: 8400 },
      { name: "Nov", totalEarnings: 9300 },
      { name: "Dec", totalEarnings: 8700 },
    ],
  };
};

// eslint-disable-next-line react/prop-types
const CustomTooltip = ({ active, payload, label }) => {
  // eslint-disable-next-line react/prop-types
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
        <p className="font-semibold text-gray-800 mb-1">{label}</p>
        <p className="text-primary font-medium">{`$${(
          // eslint-disable-next-line react/prop-types
          payload[0]?.value || 0
        ).toLocaleString()}`}</p>
      </div>
    );
  }
  return null;
};

const EarningsChart = () => {
  const currentYear = 2024;
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    const apiData = generateEarningsData(selectedYear);

    if (apiData) {
      const earnings = apiData.earnings || [];
      let transformedData = earnings.map((item) => ({
        month: item?.name,
        earnings: item.totalEarnings || 0,
      }));
      setCurrentData(transformedData);
    }
  }, [selectedYear]);

  const formatCurrency = (value) => {
    if (value >= 1000) {
      return `$${(value / 1000).toFixed(value >= 10000 ? 0 : 1)}k`;
    }
    return `$${value}`;
  };

  const maxValue = Math.max(...currentData.map((item) => item.earnings));
  const roundedMax = Math.ceil(maxValue / 1000) * 1000;

  // Generate Y-axis ticks
  const yAxisTicks = [];
  for (let i = 0; i <= roundedMax; i += 2000) {
    yAxisTicks.push(i);
  }

  return (
    <div className="w-full bg-white rounded-lg shadow-sm border border-gray-200 p-6  mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-semibold text-gray-800">Earnings</h1>
        </div>
        <div className="flex items-center gap-2">
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(Number(e.target.value))}
            className="appearance-none bg-white border border-gray-300 rounded-md px-3 py-2 pr-8 text-sm font-medium text-gray-700 focus:outline-none cursor-pointer"
          >
            <option value={2022}>2022</option>
            <option value={2023}>2023</option>
            <option value={2024}>2024</option>
            <option value={2025}>2025</option>
          </select>
          <ChevronDown className="w-4 h-4 text-gray-500 -ml-6 pointer-events-none" />
        </div>
      </div>

      {/* Chart */}
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={currentData}
            margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
            barCategoryGap="20%"
          >
            <CartesianGrid
              strokeDasharray="none"
              stroke="#e5e7eb"
              horizontal={true}
              vertical={false}
            />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6b7280", fontWeight: "500" }}
              dy={10}
            />
            <YAxis
              domain={[0, roundedMax]}
              ticks={yAxisTicks}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6b7280", fontWeight: "500" }}
              tickFormatter={formatCurrency}
              dx={-10}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "rgba(59, 130, 246, 0.1)" }}
            />
            <Bar
              dataKey="earnings"
              fill="#0116C5"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Chart Value Labels */}
      <div className="relative h-6 -mt-6">
        {currentData.map((item, index) => {
          const maxEarnings = Math.max(...currentData.map((d) => d.earnings));
          if (item.earnings === maxEarnings) {
            return (
              <div
                key={index}
                className="absolute text-xs font-semibold text-gray-700"
                style={{
                  left: `${(index / (currentData.length - 1)) * 85 + 7.5}%`,
                  top: "-20px",
                }}
              >
                {formatCurrency(item.earnings)}
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default EarningsChart;
