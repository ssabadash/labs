import { Person } from "./person.js";

export class Student extends Person {
    constructor(name) {
        super(name);
        this.courses = [];
    }

    enrollCourse(course) {
        this.courses.push(course);
        console.log(`Студент ${this.name} записався на курс "${course.title}"`);
    }

    viewCourses() {
        if (this.courses.length === 0) {
            console.log(`${this.name} не записаний на жодний курс`);
        } else {
            const courseNames = this.courses.map(c => c.title).join(", ");
            console.log(`Курси студента ${this.name}: ${courseNames}`);
        }
    }

    getInfo() {
        return `Студент: ${this.name} | Кількість курсів: ${this.courses.length}`;
    }
} 