const Employee = require('./employee');
const teamManagerCard = require ('../templates/teamManagerCard')

class TeamManager extends Employee {
    constructor(officeNumber) {
        const officeNumber = officeNumber;

        super(name, id, email);
    }
    getOfficeNumber() {
        return this.officeNumber;
    } 
    getRole() {
        return 'Team Manager'
    }
    render() {
        return teamManagerCard(this)
    };
}

module.exports = TeamManager;