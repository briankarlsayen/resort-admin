import { Box, Button, Grid, Modal, TextField, Typography } from '@mui/material'
import { DateTimePicker } from '@mui/x-date-pickers'
import React, { useState } from 'react'

function BookingModal({ open, style, handleCloseModal }) {
  const [inputField, setInputField] = useState({
    reservedBy: '',
    buldingName: '',
    personCount: 0,
    adult: 0,
    kids: 0,
    startDate: null,
    endDate: null,
  })

  const updateField = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value })
  }

  return (
    <Modal
      sx={style}
      open={open}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        bgcolor="white"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          bgcolor="primary.main"
          p={2}
        >
          Edit
        </Typography>
        <Box about="content" p={2} flex="1">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography>Building Name</Typography>
              <TextField
                type="text"
                name="buldingName"
                value={inputField.buldingName}
                onChange={updateField}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>Reserve By</Typography>
              <TextField
                type="text"
                name="reservedBy"
                value={inputField.reservedBy}
                onChange={updateField}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>Person Count</Typography>
              <TextField
                type="text"
                name="personCount"
                value={inputField.personCount}
                onChange={updateField}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>Adult</Typography>
              <TextField
                type="text"
                name="adult"
                value={inputField.adult}
                onChange={updateField}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>Kids</Typography>
              <TextField
                type="text"
                name="kids"
                value={inputField.kids}
                onChange={updateField}
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid container pt={2}>
            <Grid item xs={12} sm={6}>
              <Typography>Start Date</Typography>
              <DateTimePicker
                name="startDate"
                value={inputField.startDate}
                onChange={updateField}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>End Date</Typography>
              <DateTimePicker
                name="endDate"
                value={inputField.endDate}
                onChange={updateField}
              />
            </Grid>
          </Grid>
        </Box>
        <Box display="flex" gap={2} p={2}>
          <Button variant="outlined" color="primary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </Box>
    </Modal>
  )
}

export default BookingModal
