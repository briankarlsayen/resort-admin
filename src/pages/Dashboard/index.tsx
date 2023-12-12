import { Box, Typography } from '@mui/material'
import React from 'react'

function Dashboard() {
  return (
    <Box>
      <Typography variant="h1">Dashboard</Typography>
      <Typography variant="h1" color="primary.main">
        h1
      </Typography>
      <Typography variant="h2" color="secondary.main">
        h2
      </Typography>
      <Typography variant="h3">h3</Typography>
      <Typography variant="h4">h4</Typography>
      <Typography variant="h5">h5</Typography>
      <Typography variant="h6">h6</Typography>
      <Typography variant="subtitle1">s1</Typography>
      <Typography variant="subtitle2">s2</Typography>
      <Typography variant="body1">b1</Typography>
      <Typography variant="body2">b2</Typography>
    </Box>
  )
}

export default Dashboard
