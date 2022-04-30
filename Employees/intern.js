const Employee = require('./employee');
const internCard = require ('../templates/internCard');

class Intern extends Employee {
    constructor(school) {
        const school = school;

        super(name, id, email);
    }
    getSchool() {
        return this.school;
    } 
    getRole() {
        return 'Intern'
    }
    render() {
        return internCard(this)
    };
}

module.exports = Intern;