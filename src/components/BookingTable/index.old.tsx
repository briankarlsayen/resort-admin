import { Delete, Edit } from '@mui/icons-material'
import { Box, Button, IconButton, Modal, Typography } from '@mui/material'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'
import { bookingData } from '../../api/data'
import BookingModal from '../BookingModal'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  p: 4,
  width: 400,
  // bgcolor: 'white',
  // height: '100%',
  boxShadow: 24,
  '& .MuiModal-backdrop': {
    backgroundColor: 'white',
  },
}

function BookingTable() {
  const columns: GridColDef[] = [
    // {
    //   field: 'id',
    //   headerName: 'ID',
    //   width: 70,
    //   flex: 1,

    // },
    {
      field: 'buildingName',
      headerName: 'Building Name',
      flex: 1,
    },
    {
      field: 'personCount',
      headerName: 'Person Count',
      type: 'number',
      width: 70,
    },
    {
      field: 'adult',
      headerName: 'Adult',
      type: 'number',
      width: 70,
    },
    {
      field: 'kids',
      headerName: 'Kids',
      type: 'number',
      width: 70,
    },
    {
      field: 'startDate',
      headerName: 'Start Date',
      type: 'dateTime',

      flex: 1,
    },
    {
      field: 'endDate',
      headerName: 'End Date',
      type: 'dateTime',
      flex: 1,
    },
    {
      field: 'hoursSpent',
      headerName: 'Time(hr)',
      type: 'number',
      width: 100,
      valueGetter: (params: GridValueGetterParams) => {
        const timeDifference = params.row.endDate - params.row.startDate
        const hoursDifference = timeDifference / (1000 * 60 * 60)
        return Number(hoursDifference).toFixed(1)
      },
    },
    {
      field: 'actions',
      headerName: 'Actions',
      sortable: false,
      width: 100,
      renderCell: (params) => (
        <>
          <IconButton
            aria-label="Edit"
            onClick={() => handleEdit(params.row.id)}
          >
            <Edit />
          </IconButton>
          <IconButton
            aria-label="Delete"
            onClick={() => handleDelete(params.row.id)}
          >
            <Delete />
          </IconButton>
        </>
      ),
    },
  ]

  // const rows = [
  //   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  //   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  //   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  //   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  //   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  //   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  //   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  //   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  //   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  // ]

  const [rows, setRows] = useState([])
  useEffect(() => {
    setRows(
      bookingData(20).map((item, index) => {
        return {
          ...item,
          id: index,
        }
      })
    )
  }, [])

  const handleEdit = (e) => {
    setOpen(true)
  }
  const handleDelete = (e) => {}

  const [open, setOpen] = useState(false)
  const handleOpenModal = () => {
    setOpen(true)
  }
  const handleCloseModal = () => {
    setOpen(false)
  }

  return (
    <Box
      sx={{
        // height: 800,
        width: '100%',
        '& .MuiDataGrid-columnHeaders': { backgroundColor: 'primary.main' },
      }}
      display="flex"
      maxWidth="lg"
      style={{ backgroundColor: 'white' }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
      <BookingModal
        open={open}
        handleCloseModal={handleCloseModal}
        style={style}
      />
    </Box>
  )
}

export default BookingTable
