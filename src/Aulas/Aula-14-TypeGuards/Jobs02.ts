

class Professionals {
    isChef(): this is Chef {
        return this instanceof Chef;
    }
    isTeacher(): this is Teacher {
        return this instanceof Teacher;
    }
    isDriver(): this is Driver {
        return this instanceof Driver;
    }
}

class Chef extends Professionals {
    public cook(): void {}

    public certification: string = "Certificado de Chef";
}
class Teacher extends Professionals {
    public teach(): void {}

    public diploma: string = "Diploma de Professor";
}
class Driver extends Professionals {
    public drive(): void {}

    public license: string = "Licença de Condução";
}


function execute(profession: Professionals) {
    if (profession.isChef()) {
        profession.cook();
    } else if (profession.isTeacher()) {
        profession.teach();
    } else if (profession.isDriver()) {
        profession.drive();
    }
}