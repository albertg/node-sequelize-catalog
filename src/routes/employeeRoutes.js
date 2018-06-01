var EmployeeController = require('../controllers/employeeController');

const employeeRoutes = (app, db) => {
    app.route('/employees')
       .get((req, res) => {
           new EmployeeController(db)
            .listEmployees().then(employees => {
                res.json(employees);
            }).catch(err => {
                res.err(err);
            });
       });
    
       app.route('/mentor/:mentorId/assign/:menteeId')
       .put((req,res) => {
           new EmployeeController(db)
            .assignMentor(req.params.mentorId, req.params.menteeId)
            .then(() => res.json({"result":"success"}))
            .catch(err => {
                res.err(err);
            });
       });

       app.route('/mentor/:mentorId/remove/:menteeId')
       .put((req,res) => {
           new EmployeeController(db)
            .removeMentor(req.params.mentorId, req.params.menteeId)
            .then(() => res.json({"result":"success"}))
            .catch(err => {
                res.err(err);
            });
       });
}

module.exports = employeeRoutes;
