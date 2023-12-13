import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import DashboardCards from '../../components/DashboardCards'
import BarChart from '../../components/BarChart'
import RecentBookingCards from '../../components/RecentBookingCards'

function Dashboard() {
  return (
    <Box>
      <Typography variant="h2" pb={2}>
        Dashboard
      </Typography>
      <DashboardCards />
      <Box width="100%" maxWidth="md" pt={2}>
        <Typography variant="h4">Booking History</Typography>
        <BarChart />
      </Box>
      <Box>
        <Typography variant="h4" pt={2}>
          Recent Bookings
        </Typography>

        <RecentBookingCards />
      </Box>
    </Box>
  )
}

export default Dashboard
