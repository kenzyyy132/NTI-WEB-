class Person {
    #email;
    #id;

    constructor(name, email, id) {
        this.name = name;
        this.email = email;
        this.id = id;
    }

    get email() {
        return this.#email;
    }

    set email(value) {
        if (value.includes("@")) {
            this.#email = value;
        } else {
            throw new Error("Invalid email format");
        }
    }

  
    get id() {
        return this.#id;
    }

    set id(value) {
        if (value > 0) {
            this.#id = value;
        } else {
            throw new Error("Invalid ID");
        }
    }

    describeRole() {
        console.log("I am a member of the school.");
    }
}



class Principal extends Person {
    constructor(name, email, id) {
        super(name, email, id);
        this.members = [];
    }

    addMember(member) {
        this.members.push(member);
        console.log(`${member.name} added to school.`);
    }

    removeMember(memberName) {
        this.members = this.members.filter(
            member => member.name !== memberName
        );
        console.log(`${memberName} removed from school.`);
    }

    listMembers() {
        console.log("School Members:");
        this.members.forEach(member => {
            console.log(member.name);
        });
    }

    describeRole() {
        console.log(`${this.name} is the Principal and manages the school.`);
    }
}



class Teacher extends Person {
    constructor(name, email, id, subject) {
        super(name, email, id);
        this.subject = subject;
        this.grades = [];
    }

    gradeStudent(student, grade) {
        this.grades.push({
            student: student.name,
            grade: grade
        });

        console.log(`${student.name} got ${grade}`);
    }

    listGrades() {
        console.log("Graded Students:");
        this.grades.forEach(item => {
            console.log(`${item.student}: ${item.grade}`);
        });
    }

    describeRole() {
        console.log(
            `${this.name} is a Teacher and teaches ${this.subject}.`
        );
    }
}


class Student extends Person {
    constructor(name, email, id) {
        super(name, email, id);
        this.subjects = [];
    }

    enrollSubject(subject) {
        this.subjects.push(subject);
        console.log(`${this.name} enrolled in ${subject}.`);
    }

    viewSubjects() {
        console.log(`${this.name}'s Subjects:`);
        this.subjects.forEach(subject => {
            console.log(subject);
        });
    }

    describeRole() {
        console.log(`${this.name} is a Student.`);
    }
}




const principal = new Principal(
    "Mr. Ahmed",
    "ahmed@school.com",
    1
);

const teacher = new Teacher(
    "Ms. Sara",
    "sara@school.com",
    2,
    "Mathematics"
);

const student = new Student(
    "Ali",
    "ali@student.com",
    3
);



principal.addMember(teacher);
principal.addMember(student);

principal.listMembers();



teacher.gradeStudent(student, "A");
teacher.listGrades();



student.enrollSubject("Math");
student.enrollSubject("Science");

student.viewSubjects();



const schoolMembers = [
    principal,
    teacher,
    student
];



console.log("\nRoles:");
schoolMembers.forEach(member => {
    member.describeRole();
});