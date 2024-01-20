import { Box, Typography } from '@mui/material'
import BookingReports from '../../components/BookingReports'

function Reports() {
  return (
    <Box>
      <Typography variant="h2" pb={2}>
        Reports
      </Typography>
      <BookingReports />
    </Box>
  )
}

export default Reports
