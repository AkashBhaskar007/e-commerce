const User = require('../../../models/user');
const Blocked = require('../../../models/blockedUsers')

exports.showUsers = async (startIndex, endIndex) => {
    const user = await User.find();
    if (user == "")
        return false;
    const resultUser = user.slice(startIndex, endIndex)
    return resultUser;
}

exports.blockUserService = async (id, blocky) => {
    const blockUser = await User.deleteOne({ _id: id })
    const blockedUsers = await Blocked.create({ blocky },
        {
            firstName,
            lastName,
            email,
            userName,
            password,
            address,
            role

        });
    if (blockUser.blockUser < 1 && blockedUsers)
        return false;
    return true;
}