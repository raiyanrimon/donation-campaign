import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const Statistics = () => {
  const donations = JSON.parse(localStorage.getItem('donations')) || [];
  const totalDonations = 12;
  const yourDonations = donations.length;
  const yourDonate = parseFloat(((yourDonations / totalDonations) * 100).toFixed(2));
  const totalDonate = parseFloat((100 - yourDonate).toFixed(2));

  const data = [
    { name: 'Your Donations', value: yourDonate },
    { name: 'Total Donations', value: totalDonate },
  ];

  const colors = ['#00C49F', '#FF444A'];

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

    return (
      <text x={x} y={y} fill="white" fontSize="14px" textAnchor="middle" fontWeight="bold">
        {`${(percent * 100).toFixed(2)}%`}
      </text>
    );
  };

  return (
    <div className="statistics-page">
      <div className="pie-chart text-center flex justify-center">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={0}
            outerRadius={80}
            fill="#8884d8"
            labelLine={false}
            label={renderCustomizedLabel}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default Statistics;
