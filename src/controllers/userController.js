class UserController{
    constructor(database){
        this.db = database;
    }

    addUser(user){  
        return new Promise((resolve, reject) => {
            this.db.User.create({
                userName: user.userName,
                password: user.password,
                email: user.email,
                phone: user.phone
            }).then(newUser => {
                if(user.groups && user.groups.length > 0){                
                    /*var groupPromises = [];
                    user.groups.forEach(group => {
                        groupPromises.push(newUser.addGroup(group.id));
                    });
                    Promise.all(groupPromises).then(() => {  
                        resolve(newUser);                  
                    });*/
                    var groupIds = [];
                    user.groups.forEach(group => {
                        groupIds.push(group.id);
                    });
                    newUser.addGroups(groupIds).then(() => {
                        resolve(newUser);
                    });
                }else{
                    this.db.Group.findAll({where: {isDefault: 1}}).then(group => {
                        newUser.addGroup(group).then(() => {  
                            resolve(newUser);                      
                        });
                    });
                }        
            });
        }); 
    }
}

module.exports = UserController;