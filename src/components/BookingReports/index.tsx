import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { getBookingByMonthYear } from '../../api'

// set default start year
const START_YEAR = 2021

const downloadFile = ({ data, fileName, fileType }) => {
  const blob = new Blob([data], { type: fileType })
  const a = document.createElement('a')
  a.download = fileName
  a.href = window.URL.createObjectURL(blob)
  const clickEvt = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true,
  })
  a.dispatchEvent(clickEvt)
  a.remove()
}

const exportToCsv = (e, data, name) => {
  e.preventDefault()

  let headers = [
    'Id,Building Name,Reserved By,Person,Adults,Kids,Start Date,End Date',
  ]

  let bookingCsv = data.reduce((acc, booking) => {
    const {
      id,
      buildingName,
      reservedBy,
      personCount,
      adult,
      kids,
      startDate,
      endDate,
    } = booking
    acc.push(
      [
        id,
        buildingName,
        reservedBy,
        personCount,
        adult,
        kids,
        startDate.toLocaleDateString(),
        endDate.toLocaleDateString(),
      ].join(',')
    )
    return acc
  }, [])

  downloadFile({
    data: [...headers, ...bookingCsv].join('\n'),
    fileName: name + '.csv',
    fileType: 'text/csv',
  })
}

function BookingReports() {
  const currentDate = new Date()
  const currentMonth = currentDate.getMonth() + 1 // Month is zero-based, so we add 1
  const currentYear = currentDate.getFullYear()
  const monthList = [
    { value: 1, label: 'January' },
    { value: 2, label: 'February' },
    { value: 3, label: 'March' },
    { value: 4, label: 'April' },
    { value: 5, label: 'May' },
    { value: 6, label: 'June' },
    { value: 7, label: 'July' },
    { value: 8, label: 'August' },
    { value: 9, label: 'September' },
    { value: 10, label: 'October' },
    { value: 11, label: 'November' },
    { value: 12, label: 'December' },
  ]

  const generateYearList = (startYear: number) => {
    const list = []
    for (let i = startYear; i <= currentYear; i++) {
      list.push(i)
    }
    return list
  }

  const yearList = generateYearList(START_YEAR)

  const [monthYear, setMonthYear] = useState({
    month: currentMonth,
    year: currentYear,
  })

  const updateField = (e: any) => {
    setMonthYear({ ...monthYear, [e.target.name]: e.target.value })
  }

  const monthYearBookings = getBookingByMonthYear(
    monthYear.month,
    monthYear.year
  )

  const csvName =
    'booking-' +
    monthList.filter((list) => list.value === currentMonth)[0].label +
    '-' +
    currentYear

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Month</InputLabel>
            <Select
              name="month"
              id="month-select"
              value={monthYear.month}
              label="Month"
              onChange={updateField}
            >
              <MenuItem value="">Select Month</MenuItem>
              {monthList.map((list) => (
                <MenuItem key={list.value} value={list.value}>
                  <Box display="flex">
                    <Typography>{list.label}</Typography>
                  </Box>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Year</InputLabel>
            <Select
              name="year"
              id="year-select"
              value={monthYear.year}
              label="Year"
              onChange={updateField}
            >
              <MenuItem value="">Select Year</MenuItem>

              {yearList.map((list) => (
                <MenuItem key={list} value={list}>
                  <Box display="flex">
                    <Typography>{list}</Typography>
                  </Box>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Box pt={2}>
        <Button
          color="secondary"
          variant="contained"
          onClick={(e) => exportToCsv(e, monthYearBookings, csvName)}
        >
          Download
        </Button>
      </Box>
    </Box>
  )
}

export default BookingReports
