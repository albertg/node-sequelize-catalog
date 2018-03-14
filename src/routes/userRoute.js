var UserController = require('../controllers/userController');

const userRoutes = (app, db) => {
    app.route('/user')
       .post((req, res) => {
           var uc = new UserController(db);       
           uc.addUser(req.body).then(user => {
               res.json(user);
           });
       })
}

module.exports = userRoutes;