const bcrypt = require("bcryptjs");

const createPasswordHash = (password) => {
    return bcrypt.hash(password, 8);
}

const checkPassword = (user, password) => {
    return bcrypt.compare(password, user.password);
}

module.exports = { createPasswordHash, checkPassword };