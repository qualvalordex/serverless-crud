const httpResponse = require('../httpResponses')

module.exports = {
    SequelizeValidationError: (error) => {
        return httpResponse.badRequest({
            error: error.message
        })
    },
    SequelizeUniqueConstraintError: () => {
        return httpResponse.unprocessableEntity({
            error: 'This is already an user using this e-mail address.'
        })
    }
}
