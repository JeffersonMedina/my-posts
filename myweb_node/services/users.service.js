const db = require('../app/config/db.config');

exports.register = (data, callbak) => {
    db.query(
        `INSERT INTO users (firstName,lastName,emailId,password) VALUES (?,?,?,?)`, [data.firstName, data.lastName, data.emailId, data.password],
        (error, result, fields) => {
            if (error) {
                return callbak(error);
            }
            return callbak(null, "Registration Successful");
        }
    );
};