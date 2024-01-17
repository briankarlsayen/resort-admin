import React, { useState } from 'react'
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Pagination,
} from '@mui/material'
import { BookingType } from '../../api/data'
import {
  convertToCamelCaseWithSpaces,
  formatDateToCustomFormat,
} from '../../utils/format'

export interface MobileTable {
  data: BookingType[]
}

const cardsPerPage = 3 // Number of cards to display per page

const MobileTable = ({ data }: MobileTable) => {
  const card = (booking: BookingType) => (
    <React.Fragment>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {Object.keys(booking).map((key, index) => {
              const bookingType = typeof booking[key]
              const isNotObj = bookingType !== 'object'

              return (
                <Grid container key={index} spacing={4}>
                  <Grid item xs={6} sm={6}>
                    <Typography textTransform="capitalize">
                      {convertToCamelCaseWithSpaces(key)}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} sm={6} textAlign="end">
                    <Typography>
                      {isNotObj
                        ? booking[key]
                        : formatDateToCustomFormat(booking[key])}
                    </Typography>
                  </Grid>
                </Grid>
              )
            })}
          </Grid>
        </Grid>
      </CardContent>
    </React.Fragment>
  )

  const generateCards = (data, startIndex, endIndex) => {
    const cards = []
    for (let i = startIndex; i <= endIndex; i++) {
      !!data[i] &&
        cards.push(
          <Card key={i} variant="outlined" sx={{ width: '100%' }}>
            {card(data[i])}
          </Card>
        )
    }
    return cards
  }

  const [currentPage, setCurrentPage] = useState(1)

  const handlePageChange = (event, page) => {
    setCurrentPage(page)
  }

  const startIndex = (currentPage - 1) * cardsPerPage
  const endIndex = startIndex + cardsPerPage - 1

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      {generateCards(data, startIndex, endIndex)}
      <Box display="flex" justifyContent="center" alignItems="center">
        <Pagination
          count={Math.ceil(data.length / cardsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
        />
      </Box>
    </Box>
  )
}

export default MobileTable
