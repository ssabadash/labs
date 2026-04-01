export class Course {
    constructor(title) {
        this.title = title;
        this.students = [];
    }

    addStudent(student) {
        this.students.push(student);
        console.log(`Студент ${student.name} доданий до курсу "${this.title}"`);
    }

    getInfo() {
        const studentNames = this.students.map(s => s.name).join(", ") || "немає студентів";
        return `Курс: "${this.title}" | Студенти: ${studentNames}`;
    }
}