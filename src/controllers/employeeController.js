class EmployeeController{
    constructor(database){
        this.db=database;
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

    assignMentor(mentorId, menteeId){
        return new Promise((resolve,reject) => {
            this.db.Employee.findById(mentorId)
                .then(mentor => {
                    mentor.addMentee(menteeId).then(() => {
                        resolve();
                    });
                });
        });
    }

    removeMentor(mentorId, menteeId){
        return new Promise((resolve,reject) => {
            this.db.Employee.findById(mentorId)
                .then(mentor => {
                    mentor.removeMentee(menteeId).then(() => {
                        resolve();
                    });
                });
        });
    }
}

module.exports = EmployeeController;