import { bookingData } from './data'

const DELAY_SEC = 0

const delay = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, DELAY_SEC * 1000) // 3000 milliseconds (3 seconds)
  })
}

export const getAllBookings = async () => {
  return await delay(bookingData(20))
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
