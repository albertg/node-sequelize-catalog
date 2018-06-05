var EmployeeController = require('../controllers/employeeController');

const employeeRoutes = (app, db) => {
    app.route('/employees')
       .get((req, res) => {
           new EmployeeController(db)
            .listEmployees().then(employees => {
                res.json(employees);
            }).catch(err => {
                res.status(500).json({ error: err.toString() });
            });
       });
    
       app.route('/mentor/:mentorId/assign/')
       .put((req,res) => {
           new EmployeeController(db)
            .assignMentors(req.params.mentorId, req.body)
            .then(() => res.json({"result":"success"}))
            .catch(err => {
                res.status(500).json({ error: err.toString() });
            });
       });

       app.route('/mentor/:mentorId/remove/')
       .put((req,res) => {
           new EmployeeController(db)
            .removeMentors(req.params.mentorId, req.body)
            .then(() => res.json({"result":"success"}))
            .catch(err => {
                res.status(500).json({ error: err.toString() });
            });
       });

       app.route('/employee/:employeeId')
       .get((req, res) => {
           new EmployeeController(db)
           .getEmployee(req.params.employeeId)
           .then(emp => res.json(emp))
           .catch(err => {
                res.status(500).json({ error: err.toString() });
           });
       });
}

module.exports = employeeRoutes;
