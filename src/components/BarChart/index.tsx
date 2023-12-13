import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { faker } from '@faker-js/faker'
import { Box, Typography } from '@mui/material'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    // title: {
    //   display: true,
    //   text: 'Chart.js Bar Chart',
    // },
  },
}

const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'September',
  'October',
  'November',
  'December',
]

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: '#f2b203',
    },
    // {
    //   label: 'Dataset 2',
    //   data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
    // },
  ],
}
function BarChart() {
  return (
    <Box width="100%">
      <Bar options={options} data={data} />
    </Box>
  )
}

export default BarChart
