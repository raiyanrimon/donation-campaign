import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    
    return (
        <>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                    <Pie></Pie>
                </PieChart>



            </ResponsiveContainer>
        </>
    );
};

export default Statistics;