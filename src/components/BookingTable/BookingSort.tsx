import { ArrowDownward, ExpandLess, ExpandMore } from '@mui/icons-material'
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { ArrowUpward } from '@mui/icons-material'
function BookingSort() {
  const [expanded, setExpanded] = useState(false)
  const handleExpanded = () => {
    setExpanded(!expanded)
  }
  const [sort, setSort] = useState('')
  const updateSort = (e) => {
    setSort(e.target.value)
  }

  const sortList = [
    {
      label: 'Person Ascending',
      value: 'person-asc',
      icon: <ArrowUpward />,
    },
    {
      label: 'Person Descending',
      value: 'person-desc',
      icon: <ArrowDownward />,
    },
    {
      label: 'Start Date Ascending',
      value: 'start-asc',
      icon: <ArrowUpward />,
    },
    {
      label: 'Start Date Descending',
      value: 'start-desc',
      icon: <ArrowDownward />,
    },
    {
      label: 'End Date Ascending',
      value: 'end-asc',
      icon: <ArrowUpward />,
    },
    {
      label: 'End Date Descending',
      value: 'end-desc',
      icon: <ArrowDownward />,
    },
  ]

  const handleSubmit = () => {}

  return (
    <Card sx={{ mb: 2 }}>
      <CardHeader
        title={<Typography variant="h6">Sort</Typography>}
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
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Sort</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sort}
                label="Age"
                onChange={updateSort}
              >
                <MenuItem value="">Select Sort</MenuItem>

                {sortList.map((list) => (
                  <MenuItem key={list.value} value={list.value}>
                    <Box display="flex">
                      <Typography>{list.label}</Typography>
                      {list.icon}
                    </Box>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Box pt={2}>
          <Button variant="contained" color="secondary" onClick={handleSubmit}>
            Sort
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}

export default BookingSort
