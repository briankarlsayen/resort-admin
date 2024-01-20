import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  styled,
} from '@mui/material'
import { MobileTable } from '../MobileTable'
import {
  convertToCamelCaseWithSpaces,
  formatDateToCustomFormat,
} from '../../utils/format'
import { useEffect, useState } from 'react'

const StyledTableRow = styled(TableRow)({
  backgroundColor: '#00aa6c',
})

const StyledTableCell = styled(TableCell)({
  textTransform: 'capitalize',
})

function DesktopTable({ data }: MobileTable) {
  const thead = data.length ? Object.keys(data[0]) : null

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const handleChangePage = (_event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const slicedData = data?.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  )

  useEffect(() => {
    setPage(0)
  }, [data])

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <StyledTableRow>
              {thead?.map((key, index) => {
                return (
                  <StyledTableCell key={index}>
                    {convertToCamelCaseWithSpaces(key)}
                  </StyledTableCell>
                )
              })}
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {slicedData.map((booking, index) => {
              return (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  {Object.keys(booking).map((key, index) => {
                    const bookingType = typeof booking[key]
                    const isNotObj = bookingType !== 'object'

                    return (
                      <StyledTableCell align="left" key={index}>
                        {isNotObj
                          ? booking[key]
                          : formatDateToCustomFormat(booking[key])}
                      </StyledTableCell>
                    )
                  })}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

export default DesktopTable
