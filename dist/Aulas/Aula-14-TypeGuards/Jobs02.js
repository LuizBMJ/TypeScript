class Professionals {
    isChef() {
        return this instanceof Chef;
    }
    isTeacher() {
        return this instanceof Teacher;
    }
    isDriver() {
        return this instanceof Driver;
    }
}
class Chef extends Professionals {
    cook() { }
    certification = "Certificado de Chef";
}
class Teacher extends Professionals {
    teach() { }
    diploma = "Diploma de Professor";
}
class Driver extends Professionals {
    drive() { }
    license = "Licença de Condução";
}
function execute(profession) {
    if (profession.isChef()) {
        profession.cook();
    }
    else if (profession.isTeacher()) {
        profession.teach();
    }
    else if (profession.isDriver()) {
        profession.drive();
    }
}
export {};
