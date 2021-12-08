const User = require('../../../models/user');


exports.showUsers = async (id) => {
    const user = await User.find();
    if (user=="")
        return false;
    return user;
}