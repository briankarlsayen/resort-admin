import { Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'

function DashboardCards() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={3}>
        <Card sx={{ height: '100%' }}>
          <CardContent>
            <Typography variant="body1">
              Total Bookings for this month
            </Typography>
            <Typography variant="h4" pt={2}>
              100
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={3}>
        <Card sx={{ height: '100%' }}>
          <CardContent>
            <Typography variant="body1">Pending Approval</Typography>
            <Typography variant="h4" pt={2}>
              55
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={3}>
        <Card sx={{ height: '100%' }}>
          <CardContent>
            <Typography variant="body1">New Clients this month</Typography>
            <Typography variant="h4" pt={2}>
              12
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={3}>
        <Card sx={{ height: '100%' }}>
          <CardContent>
            <Typography variant="body1">
              Returning clients this month
            </Typography>
            <Typography variant="h4" pt={2}>
              2
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default DashboardCards
