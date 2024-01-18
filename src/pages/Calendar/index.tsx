import React from 'react'
import BookingCalendar from '../../components/BookingCalendar'
import { Box, Typography } from '@mui/material'

function Calendar() {
  return (
    <Box>
      <Typography variant="h2" pb={2}>
        Calendar
      </Typography>
      <BookingCalendar />
    </Box>
  )
}

export default Calendar
