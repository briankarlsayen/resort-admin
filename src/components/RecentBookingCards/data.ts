import { faker } from '@faker-js/faker'

export const generateBooking = () => {
  const adultCount = faker.number.int({ min: 0, max: 20 })
  const kidCount = faker.number.int({ min: 0, max: 10 })
  const data = {
    reservedBy: faker.person.firstName(),
    buildingName: faker.company.name(),
    personCount: adultCount + kidCount,
    adult: adultCount,
    kids: kidCount,
    startDate: faker.date.recent({ days: 2 }),
    endDate: faker.date.soon({ days: 5 }),
  }
  return data
}
