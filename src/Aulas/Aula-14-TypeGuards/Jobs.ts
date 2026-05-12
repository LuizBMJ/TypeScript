

interface Chef {
    cook: () => void;
    certification: string;
}

interface Teacher {
    teach: () => void;
    diploma: string;
}

interface Driver {
    drive: () => void;
    license: string;
}

type Profession = Chef | Teacher | Driver;

function isChef(profession: Profession): profession is Chef {
    return (profession as Chef).cook !== undefined;
}
function isTeacher(profession: Profession): profession is Teacher {
    return (profession as Teacher).teach !== undefined;
}
function isDriver(profession: Profession): profession is Driver {
    return (profession as Driver).drive !== undefined;
}

function performJob(profession: Profession) {
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