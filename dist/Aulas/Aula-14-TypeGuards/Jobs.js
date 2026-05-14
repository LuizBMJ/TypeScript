function isChef(profession) {
    return profession.cook !== undefined;
}
function isTeacher(profession) {
    return profession.teach !== undefined;
}
function isDriver(profession) {
    return profession.drive !== undefined;
}
function performJob(profession) {
    switch (true) {
        case isChef(profession):
            profession.cook();
            break;
        case isTeacher(profession):
            profession.teach();
            break;
        case isDriver(profession):
            profession.drive();
            break;
    }
}
export {};
