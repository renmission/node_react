const Joi = require('@hapi/joi');

const createPostValidator = (data) => {
    const schema = Joi.object({
        title: Joi.string().min(4).max(150).required(),
        body: Joi.string().min(4).max(2000).required()
    });
    return schema.validate(data);
}


module.exports.createPostValidator = createPostValidator;

