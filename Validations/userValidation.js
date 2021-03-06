const Joi = require("joi");

module.exports.signupValidation = user => {
    const schema = Joi.object({
        name: Joi.string().required().messages({
            'string.empty': 'Name is not allowed to be empty!',
            'any.required': 'Please enter name!',
            'string.base': "Name must be a string!"
        }),
        email: Joi.string().email().required().messages({
            'string.empty': 'Email is not allowed to be empty!',
            'any.required': 'Please enter an email!',
            'string.base': "Email must be a string!",
            'string.email': "Email must be a valid email!",
        }),
        password: Joi.string().required().messages({
            'string.empty': 'Password is not allowed to be empty!',
            'any.required': 'Please enter password!',
            'string.base': "Password must be a string!"
        })
    });
    return schema.validate(user);
};

module.exports.emailValidations = email => {
    const schema = Joi.object({
        email: Joi.string().email().required().messages({
            'string.empty': 'Email is not allowed to be empty!',
            'any.required': 'Please enter an email!',
            'string.base': "Email must be a string!",
            'string.email': "Email must be a valid email!",
        })
    });
    return schema.validate(email);
}

module.exports.loginValidations = login => {
    const schema = Joi.object({
        email: Joi.string().email().required().messages({
            'string.empty': 'Email is not allowed to be empty!',
            'any.required': 'Please enter an email!',
            'string.base': "Email must be a string!",
            'string.email': "Email must be a valid email!",
        }),
        password: Joi.string().required().messages({
            'string.empty': 'Password is not allowed to be empty!',
            'any.required': 'Please enter password!',
            'string.base': "Password must be a string!"
        })
    });
    return schema.validate(login);
}