const Employee = require('./employee');
const engineerCard = require ('../templates/engineerCard');

class Engineer extends Employee {
    constructor(gitHub) {
        const gitHub = gitHub;

        super(name, id, email);
    }
    getUsername() {
        return this.gitHub;
    } 
    getRole() {
        return 'Engineer'
    }
    render() {
        return engineerCard(this)
    };
};

module.exports = Engineer;