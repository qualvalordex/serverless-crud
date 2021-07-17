const httpResponse = require('../../common/httpResponses')
const db = require('../models')
const User = db.User

async function create(event) {
    const params = JSON.parse(event.body)
    console.log("Request's payload:")
    console.log(params)

    try {
        const result = await User.create(params)

        return httpResponse.OK({
            message: 'User created successful.'
        })
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            return httpResponse.badRequest({
                error: error.message
            })
        }

        if (error.name === 'SequelizeUniqueConstraintError') {
            return httpResponse.conflict({
                error: 'This is already an user using this e-mail address.'
            })
        }

        return httpResponse.serverError({
            error: error.message
        })
    }
}

async function find(event) {
    const userId = event.pathParameters.userId

    try {
        const result = await User.findByPk(userId)

        return httpResponse.OK({
            data: result
        })
    } catch (error) {
        console.error(error)

        return httpResponse.serverError(error)
    }
}

async function findAll(event) {
    try {
        const result = await User.findAll()

        return httpResponse.OK({
            data: result
        })
    } catch (error) {
        console.error(error)

        return httpResponse.serverError(error)
    }
}

async function update(event) {
    const { id: userId, ...params } = JSON.parse(event.body)

    try {
        const result = await User.update(params, {
            where: { id: userId }
        })

        return httpResponse.OK({
            message: 'User updated successful.'
        })
    } catch (error) {
        console.error(error)

        return httpResponse.serverError(error)
    }
}

async function remove(event) {
    const userId = event.pathParameters.userId

    try {
        const result = await User.destroy({
            where: { id: userId }
        })

        return httpResponse.OK({
            message: 'User removed successful.'
        })
    } catch (error) {
        console.error(error)

        return httpResponse.serverError(error)
    }
}

module.exports = { create, find, findAll, update, remove }
