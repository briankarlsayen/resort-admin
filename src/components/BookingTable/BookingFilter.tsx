import { useState } from 'react'
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  IconButton,
  Typography,
} from '@mui/material'
import MultiSelectAutocomplete from '../MultipleSelectAutoComplete'
import { DatePicker } from '@mui/x-date-pickers'
import { ExpandLess, ExpandMore } from '@mui/icons-material'

function BookingFilter() {
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']

  const [inputFields, setInputFields] = useState({
    buildingName: [],
    reservedBy: [],
    startDate: null,
    endDate: null,
  })

  const handleSelectChange = (name, selectedValues) => {
    setInputFields({ ...inputFields, [name]: selectedValues })
  }

  const handleDateChange = (name, value) => {
    setInputFields({ ...inputFields, [name]: new Date(value) })
  }

  const handleSubmit = () => {}

  const [expanded, setExpanded] = useState(false)
  const handleExpanded = () => {
    setExpanded(!expanded)
  }

  return (
    <Card sx={{ mb: 2 }}>
      <CardHeader
        title={<Typography variant="h6">Filters</Typography>}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        action={
          <IconButton
            aria-expanded={expanded}
            onClick={handleExpanded}
            aria-label="show more"
          >
            {expanded ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        }
      />
      <Divider />
      <CardContent style={{ display: expanded ? 'block' : 'none' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} md={3}>
            <MultiSelectAutocomplete
              name="buildingName"
              options={options}
              value={inputFields['buildingName']}
              onChange={handleSelectChange}
              label="Building"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <MultiSelectAutocomplete
              name="reservedBy"
              options={options}
              value={inputFields['reservedBy']}
              onChange={handleSelectChange}
              label="Reserved By"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <DatePicker
              label="Start Date"
              sx={{ width: '100%' }}
              onChange={(e) => handleDateChange('startDate', e)}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <DatePicker
              label="End Date"
              sx={{ width: '100%' }}
              onChange={(e) => handleDateChange('endDate', e)}
            />
          </Grid>
        </Grid>
        <Box pt={2}>
          <Button variant="contained" color="secondary" onClick={handleSubmit}>
            Filter
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}

export default BookingFilter
