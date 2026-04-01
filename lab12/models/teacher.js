import { Person } from "./person.js";

export class Teacher extends Person {
    constructor(name) {
        super(name);
        this.courses = [];
    }

    addCourse(course) {
        this.courses.push(course);
        console.log(`Викладач ${this.name} тепер веде курс "${course.title}"`);
    }

    getInfo() {
        const courseNames = this.courses.map(c => c.title).join(", ") || "немає курсів";
        return `Викладач: ${this.name} | Курси: ${courseNames}`;
    }
}