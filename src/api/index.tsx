import { bookingData } from './data'

const DELAY_SEC = 0

const delay = (data) => {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve(data)
    }, DELAY_SEC * 1000) // 3000 milliseconds (3 seconds)
  })
}

const defaultBookingData = bookingData(50)

export const getAllBookings = async () => {
  return await delay(defaultBookingData)
}

export const getBuildingNames = async () => {
  const buildingNameList = [
    'Bldg 1',
    'Bldg 2',
    'Bldg 3',
    'Hut 1',
    'Hut 2',
    'Hut 3',
  ]
  return await delay(buildingNameList)
}

export const getBookingByMonthYear = (month, year) => {
  const refDate = new Date(year, month, 1)
  const dateInRange = defaultBookingData.map((booking) => {
    const endDate = new Date(booking.endDate)
    const endMonth = endDate.getMonth() + 1
    const endYear = endDate.getFullYear()
    const refMonth = refDate.getMonth()
    const refYear = refDate.getFullYear()

    if (endMonth === refMonth && endYear === refYear) return booking
  })

  return dateInRange.filter((date) => !!date)
}
