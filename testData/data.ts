import { faker } from "@faker-js/faker";

export default class Data {
    
    public static Gender(gender:string) {
        return faker.person.sex().match(gender) ? "male" : "female";
    }
    public static get FirstName() {
        return faker.person.firstName();
    }
    public static get LastName() {
        return faker.person.lastName();
    }
    public static get Email() {
        return faker.internet.email();
    }
    public static get Password() {
        return faker.internet.password();
    }

}

