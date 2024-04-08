import { Tooltip } from 'keep-react';
import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, ResponsiveContainer, YAxis, Legend } from 'recharts';

const data = [
    {
        name: "Block A",
        l1: 4000,
        l2: 2400,
        amt: 2400,
    },
    {
        name: "Block B",
        l1: 2000,
        l2: 19998,
        amt: 2210,
    },
    {
        name: "Block C",
        l1: 1000,
        l2: 9800,
        amt: 2290,
    },
    {
        name: "Block D",
        l1: 2780,
        l2: 3908,
        amt: 2000,
    },
    {
        name: "Block E",
        l1: 280,
        l2: 3208,
        amt: 200,
    },
];

const Dashboard = () => {
    return (
        <div>
            <div
                style={{
                    width: "800px",
                    height: "500px",
                    // backgroundColor: "teal",
                }}
            >
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={800}
                        height={400}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="l2"
                            stroke="#8864d8"
                            activeDot={{ r: 8 }}
                        />
                        <Line
                            type="monotone"
                            dataKey="l1"
                            stroke="#83c59d"
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Dashboard;




















