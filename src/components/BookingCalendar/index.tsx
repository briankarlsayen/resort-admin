import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './index.css'
import { Autocomplete, Box, TextField, Typography } from '@mui/material'
import { getAllBookings, getBuildingNames } from '../../api'
const MultiDateRangeCalendar = () => {
  const [buildingNames, setBuildingNames] = useState([])
  const [selectedDates, setSelectedDates] = useState<Date[]>([])
  const [selected, setSelected] = useState()

  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    const bookings = await getAllBookings()
    const buildings = await getBuildingNames()
    setBuildingNames(buildings as any[])
  }
  const handleDateChange = (date: Date) => {
    // Toggle the date selection
    const newSelectedDates = selectedDates.includes(date)
      ? selectedDates.filter((d) => d !== date)
      : [...selectedDates, date]

    setSelectedDates(newSelectedDates)
  }
  console.log('buildingNames', buildingNames)

  const dateRanges = [
    {
      start: '01-01-2024',
      end: '01-05-2024',
    },
    {
      start: '01-08-2024',
      end: '01-09-2024',
    },
    {
      start: '01-21-2024',
      end: '01-24-2024',
    },
  ]

  const handleChange = (name, newValue) => {}
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']

  return (
    <Box id="calendar-container">
      <Typography variant="h6" pb={1}>
        Select Building Calendar
      </Typography>
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
      <Box display="flex" alignItems="center" justifyContent="center" pt={3}>
        <Calendar
          onChange={handleDateChange}
          tileClassName={({ date, view }) => {
            const isInRange = dateRanges.some(
              (range) =>
                date >= new Date(range.start) && date <= new Date(range.end)
            )
            if (view === 'month' && isInRange) {
              return 'highlight'
            }
          }}
        ></Calendar>
      </Box>
    </Box>
  )
}

export default MultiDateRangeCalendar
