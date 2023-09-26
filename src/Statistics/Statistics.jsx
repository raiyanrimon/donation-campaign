
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const Statistics = () => {
  
  const donations = JSON.parse(localStorage.getItem('donations')) || [];
  console.log(donations)

  
  // eslint-disable-next-line no-unused-vars
  const totalDonations = 12;
  const yourDonations = donations.length;
  const yourDonate = parseFloat(((yourDonations/12)*100).toFixed(2))
 const  totalDonate = parseFloat((100-yourDonate).toFixed(2))

  
  const data = [
    { name: 'Your Donations', value: yourDonate },
    { name: 'Total Donations', value: totalDonate },
  ];

  
  const colors = ['#00C49F','#FF444A'];

  return (
    <div className="statistics-page ">
      
      <div  className="pie-chart text-center flex justify-center">
        <PieChart width={800} height={400}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
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
