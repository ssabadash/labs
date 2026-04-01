import { Person } from "./models/Person.js";
import { Course } from "./models/course.js";
import { Teacher } from "./models/teacher.js";
import { Student } from "./models/student.js";

// --- Створення об'єктів ---
const teacher = new Teacher("Іван Петренко");
const student1 = new Student("Оля Коваль");
const student2 = new Student("Максим Бондар");

const course1 = new Course("JavaScript основи");
const course2 = new Course("HTML та CSS");

// --- Демонстрація роботи ---
console.log("=== Інформація про осіб ===");
console.log(teacher.getInfo());
console.log(student1.getInfo());
console.log(student2.getInfo());

console.log("\n=== Викладач додає курси ===");
teacher.addCourse(course1);
teacher.addCourse(course2);

console.log("\n=== Студенти записуються на курси ===");
student1.enrollCourse(course1);
student1.enrollCourse(course2);
student2.enrollCourse(course1);

console.log("\n=== Додаємо студентів до курсу ===");
course1.addStudent(student1);
course1.addStudent(student2);
course2.addStudent(student1);

console.log("\n=== Перегляд курсів студентів ===");
student1.viewCourses();
student2.viewCourses();

console.log("\n=== Інформація про курси ===");
console.log(course1.getInfo());
console.log(course2.getInfo());

console.log("\n=== Оновлена інформація про викладача ===");
console.log(teacher.getInfo());