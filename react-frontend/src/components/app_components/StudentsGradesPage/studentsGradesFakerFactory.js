
import { faker } from "@faker-js/faker";
export default (user,count,nameIds) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
studentId: faker.lorem.sentence(""),
name: nameIds[i % nameIds.length],
grade: faker.lorem.sentence(""),
mathGrade: faker.lorem.sentence(""),
scienceGrade: faker.lorem.sentence(""),
englishGrade: faker.lorem.sentence(""),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
