import { faker } from '@faker-js/faker'

export type BookingType = {
  reservedBy?: string
  buildingName?: string
  personCount?: number
  adult?: number
  kids?: number
  startDate?: Date
  endDate?: Date
}

const buildingNameList = [
  'Bldg 1',
  'Bldg 2',
  'Bldg 3',
  'Hut 1',
  'Hut 2',
  'Hut 3',
]

export const generateBooking = () => {
  const adultCount = faker.number.int({ min: 0, max: 20 })
  const kidCount = faker.number.int({ min: 0, max: 10 })
  const randNum = Math.floor(Math.random() * buildingNameList.length)
  const randBldgName = buildingNameList[randNum]

  const data: BookingType = {
    buildingName: randBldgName,
    personCount: adultCount + kidCount,
    reservedBy: faker.person.firstName(),
    adult: adultCount,
    kids: kidCount,
    startDate: faker.date.recent({ days: 2 }),
    endDate: faker.date.soon({ days: 5 }),
  }
  return data
}

export const bookingData = (count: number) =>
  Array.from({ length: count }, () => generateBooking())