import { Card, CardContent, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { generateBooking } from './data'
import BookingDialog from '../BookingDialog'

function RecentBookingCards() {
  const [list, setList] = useState([])
  const [open, setOpen] = useState(false)
  const [selectedBooking, setSelectedBooking] = useState()
  const handleDialogClose = () => {
    setOpen(false)
  }
  const handleDialogOpen = (item) => {
    setSelectedBooking(item)
    setOpen(true)
  }
  console.log('selectedBooking', selectedBooking)
  useEffect(() => {
    setList(Array.from({ length: 25 }, () => generateBooking()))
  }, [])
  return (
    <Grid container spacing={4}>
      {selectedBooking && (
        <BookingDialog
          open={open}
          handleClose={handleDialogClose}
          item={selectedBooking}
        />
      )}
      {list.map((item) => {
        return (
          <Grid item xs={12} sm={3} onClick={(e) => handleDialogOpen(item)}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <Typography variant="body1" fontWeight="600">
                      {item.buildingName}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <Typography component="span">Name: </Typography>
                    <Typography component="span">{item.reservedBy}</Typography>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <Typography component="span">Person count: </Typography>
                    <Typography component="span">{item.personCount}</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default RecentBookingCards
