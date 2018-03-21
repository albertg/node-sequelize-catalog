var SecurityController = require('../controllers/securityController');

const securityRoutes = (app, db) => {
    app.route('/login')
       .post((req, res) => {
           var sc = new SecurityController(db);       
           sc.login(req.body.username, req.body.password).then(user => {
               res.json(user);
           }).catch(err => {
               res.err(err);
           });
       });
    
    app.route('/user/:userId/logins')
       .get((req, res) => {
            new SecurityController(db)
            .getLoginHistory(req.params.userId).then(user => {
                res.json(user);
            }).catch(err => {
                res.err(err);
            });
       });
}

module.exports = securityRoutes;
