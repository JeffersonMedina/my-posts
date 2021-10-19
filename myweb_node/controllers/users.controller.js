const usersServices = require('../services/users.service');

exports.register = (req, res, next) => {
    const data = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        emailId: req.body.emailId,
        password: req.body.password
    }

    usersServices.register(data, (error, result) => {
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: "Bad Request" });
        }
        return res.status(200).send({
            success: 1,
            data: result
        });
    });
};