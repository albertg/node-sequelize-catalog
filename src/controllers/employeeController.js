class EmployeeController{
    constructor(database){
        this.db=database;
    }

    getEmployee(employeeId){
        return new Promise((resolve, reject) => {
            this.db.Employee.find({where: {
                id:employeeId},
                include: ['mentor','mentees']
            })
            .then(employee => {
                resolve(employee);
            });
        });
    }

    listEmployees(){
        return new Promise((resolve, reject) => {
            this.db.Employee.findAll({
                include: ['mentor','mentees'],
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            }).then(employees => {
                resolve(employees);
            });
        });
    }

    assignMentors(mentorId, menteeIds){
        return new Promise((resolve,reject) => {
            this.db.Employee.findById(mentorId)
                .then(mentor => {
                    mentor.addMentees(menteeIds).then(() => {
                        resolve();
                    });
                });
        });
    }

    removeMentors(mentorId, menteeIds){
        return new Promise((resolve,reject) => {
            this.db.Employee.findById(mentorId)
                .then(mentor => {
                    mentor.removeMentees(menteeIds).then(() => {
                        resolve();
                    });
                });
        });
    }
}

module.exports = EmployeeController;