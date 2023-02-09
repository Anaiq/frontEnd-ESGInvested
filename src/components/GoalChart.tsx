import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale, //y
    BarElement,
    Title,
    Tooltip,
    Legend,
    } from 'chart.js';
    import { Bar } from 'react-chartjs-2';

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );
    

interface IGoalChartProps {
} 

const GoalChart: React.FunctionComponent<IGoalChartProps> = () => {
    
    const data = {
        labels:['AAA', 'AA', 'A', 'BBB', 'BB', 'B', 'CCC', 'CC'],
        datasets:[
            {
                label: '',
                data: [15, 15, 15, 15, 10, 10, 10, 10],
                backgroundColor: 'green',
                borderColor: 'black',
                borderWidth: 2
            },
        ],
    }

    const options = {};

    return(
        <div>
            <h2>ESG Portfolio Goals</h2>
            <Bar 
            data={data}
            options={options}>
            </Bar>
        </div>
        
    );
};

export default GoalChart;
