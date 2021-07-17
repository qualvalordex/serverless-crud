const httpResponse = require('../httpResponses')
const sequelizeErrors = require('./sequelizeErrors')

module.exports = (error) => {
    if (Object.keys(sequelizeErrors).includes(error.name)) {
        return sequelizeErrors[error.name](error)
    }
    return httpResponse.serverError({
        error: error.message
    })
}
