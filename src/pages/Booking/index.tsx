import React from 'react'
import BookingTable from '../../components/BookingTable'
import { Box, Typography } from '@mui/material'

function Booking() {
  return (
    <Box>
      <Typography variant="h2" pb={2}>
        Booking
      </Typography>
      <BookingTable />
    </Box>
  )
}

export default Booking
