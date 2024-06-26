import { faker } from '@faker-js/faker'
import { IAttendee } from '../interfaces/attendee.interface'

export const attendees: Array<IAttendee> = Array.from({ length: 212 }).map(() => {
    return {
        id: faker.number.int({ min: 10000, max: 20000 }),
        name: faker.person.fullName(),
        email: faker.internet.email().toLocaleLowerCase(),
        createAt: faker.date.recent({ days: 30 }),
        checkedInAt: faker.date.recent({ days: 7 })
    }
})