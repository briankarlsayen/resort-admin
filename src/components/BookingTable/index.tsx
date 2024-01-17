import { Box, useMediaQuery } from '@mui/material'
import DesktopTable from '../DesktopTable'
import MobileTable from '../MobileTable'
import theme from '../../theme'
import { bookingData } from '../../api/data'
import BookingFilter from './BookingFilter'
import BookingSort from './BookingSort'

const BookingTable = () => {
  const isMobile = useMediaQuery(theme.breakpoints.up('sm'))
  const bookingTableData = bookingData(20)

  return (
    <Box>
      <BookingFilter />

      <BookingSort />

      {isMobile ? (
        <DesktopTable data={bookingTableData} />
      ) : (
        <MobileTable data={bookingTableData} />
      )}
    </Box>
  )
}

export default BookingTable
