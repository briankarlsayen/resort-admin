import { DialogTitle } from '@mui/material'
import { DialogContentText } from '@mui/material'
import { Grid } from '@mui/material'
import { Typography } from '@mui/material'
import { DialogContent } from '@mui/material'
import { Dialog } from '@mui/material'

function BookingDialog({ open, handleClose, item }) {
  return (
    item && (
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle bgcolor="primary.main" color="white">
          <Typography variant="h4">Booking Details</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText pt={2}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <Typography component="span">Building Name: </Typography>
                <Typography component="span">{item.buildingName}</Typography>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Typography component="span">Name: </Typography>
                <Typography component="span">{item.reservedBy}</Typography>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Typography component="span">Person count: </Typography>
                <Typography component="span">{item.personCount}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography component="span">Adults: </Typography>
                <Typography component="span">{item.adult}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography component="span">Kids: </Typography>
                <Typography component="span">{item.kids}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography component="span">Start Date: </Typography>
                <Typography component="span">
                  {item.startDate.toLocaleDateString()}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography component="span">Start Time: </Typography>
                <Typography component="span">
                  {item.startDate.toLocaleTimeString()}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography component="span">End Date: </Typography>
                <Typography component="span">
                  {item.endDate.toLocaleDateString()}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography component="span">End Time: </Typography>
                <Typography component="span">
                  {item.endDate.toLocaleTimeString()}
                </Typography>
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    )
  )
}

export default BookingDialog
