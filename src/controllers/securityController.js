class SecurityController{
    constructor(database){
        this.db = database;
    }

    login(username, password){
        return new Promise((resolve, reject) => {
            this.db.User.findAll({
                where: {
                    userName: username,
                    password: password
                },
                attributes: { 
                    exclude: ['password', 'createdAt','updatedAt'] 
                }
            }).then(users => {
                if(users && users.length == 1){
                    var user = users[0];
                    this.db.LoginHistory.create({
                        userId: user.id,
                        lastLogin: new Date(),
                        status: 'SUCCESS'
                    }).then(login => {
                        resolve(user);
                    });
                }else{
                    reject({status: "failure", message: "Invalid user credentials"});
                }
            });
        });
    }

    getLoginHistory(userId){
        return new Promise((resolve, reject) => {
            this.db.User.findAll({
                where: {
                    id: userId
                },
                attributes: { 
                    exclude: ['password', 'createdAt','updatedAt'] 
                },
                include:[{
                    model: this.db.LoginHistory,
                    as: 'logins',
                    attributes: { 
                        exclude: ['userId', 'createdAt','updatedAt'] 
                    }
                }]
            }).then(users => {
                if(users && users.length == 1){
                    var user = users[0]; 
                    resolve(user);                   
                }else{
                    reject({status: "failure", message: "Invalid userId"});
                }
            });
        });
    }
}

module.exports = SecurityController;
