import { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './index.css'
import {
  Autocomplete,
  Box,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { getAllBookings, getBuildingNames } from '../../api'
import theme from '../../theme'
import DesktopTable from '../DesktopTable'
import MobileTable from '../MobileTable'
import { CalendarToday } from '@mui/icons-material'

const BookingCalendar = () => {
  const [buildingNames, setBuildingNames] = useState([])
  const [selected, setSelected] = useState('')
  const [bookings, setBookings] = useState([])
  const [calendarBookings, setCalendarBookings] = useState([])

  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    const fetchedBookings = await getAllBookings()
    const buildings = await getBuildingNames()
    setBuildingNames(buildings as any[])
    setCalendarBookings(fetchedBookings as any[])

    // default bookings
    const defaultBuilding = buildings[0]
    const selectedBookings = (fetchedBookings as any[]).filter(
      (booking) => booking.buildingName === defaultBuilding
    )
    setSelected(buildings[0])
    setBookings(selectedBookings)
  }

  const handleChange = (_name, newValue) => {
    setSelected(newValue)
    const selectedBookings = calendarBookings.filter(
      (booking) => booking.buildingName === newValue
    )
    setBookings(selectedBookings)
  }

  return (
    <Box>
      {/* <Typography variant="h6" pb={1}>
        Select Building Calendar
      </Typography> */}
      <Box>
        {buildingNames.length && (
          <Autocomplete
            sx={{ maxWidth: '200px' }}
            id="calendar-autocomplete"
            options={buildingNames}
            getOptionLabel={(option) => option}
            onChange={(_, newValue) => handleChange(name, newValue)}
            value={selected}
            renderInput={(params) => (
              <TextField {...params} label="Building Name" />
            )}
          />
        )}
      </Box>
      <Box maxWidth="md" pt={3}>
        <Calendar
          // onChange={handleDateChange}
          tileClassName={({ date, view }) => {
            const isInRange = bookings.some(
              (range) =>
                date >= new Date(range.startDate) &&
                date <= new Date(range.endDate)
            )
            if (view === 'month' && isInRange) {
              return 'highlight'
            }
          }}
        ></Calendar>
      </Box>
      <Box>
        <Typography variant="h6" py={2}>
          Events
        </Typography>
        <Events data={bookings} />
      </Box>
    </Box>
  )
}

const Events = ({ data: bookingData }) => {
  const isMobile = useMediaQuery(theme.breakpoints.up('sm'))
  return bookingData.length ? (
    isMobile ? (
      <DesktopTable data={bookingData} />
    ) : (
      <MobileTable data={bookingData} />
    )
  ) : (
    <Box
      display="flex"
      flexGrow="1"
      justifyContent="center"
      alignItems="center"
      gap={2}
      pt={2}
    >
      <Typography variant="h4">No Events</Typography>
      <CalendarToday fontSize="large" />
    </Box>
  )
}

export default BookingCalendar
