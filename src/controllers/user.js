const errors = require('../../common/errors')
const httpResponse = require('../../common/httpResponses')
const db = require('../models')
const User = db.User

async function create(event) {
    try {
        const params = JSON.parse(event.body)
        console.log("Request's payload:")
        console.log(params)

        const result = await User.create(params)

        return httpResponse.OK({
            message: 'User created successful.'
        })
    } catch (error) {
        return errors(error)
    }
}

async function find(event) {
    try {
        const userId = event.pathParameters.userId

        const result = await User.findByPk(userId)

        if (result) {
            return httpResponse.OK({
                data: result
            })
        } else {
            return httpResponse.notFound({
                message: 'User not found.'
            })
        }
    } catch (error) {
        return errors(error)
    }
}

async function findAll(event) {
    try {
        const result = await User.findAll()
        if (result.length) {
            return httpResponse.OK({
                data: result
            })
        } else {
            return httpResponse.notFound({
                message: 'Anything found here.'
            })
        }
    } catch (error) {
        return errors(error)
    }
}

async function update(event) {
    try {
        const { id: userId, ...params } = JSON.parse(event.body)

        if (await User.findByPk(userId)) {
            const result = await User.update(params, {
                where: { id: userId }
            })

            return httpResponse.OK({
                message: 'User updated successful.'
            })
        } else {
            return httpResponse.notFound({
                message: 'User not found.'
            })
        }
    } catch (error) {
        return errors(error)
    }
}

async function remove(event) {
    try {
        const userId = event.pathParameters.userId
        if (await User.findByPk(userId)) {
            const result = await User.destroy({
                where: { id: userId }
            })

            return httpResponse.OK({
                message: 'User removed successful.'
            })
        } else {
            return httpResponse.notFound({
                message: 'User not found.'
            })
        }
    } catch (error) {
        return errors(error)
    }
}

module.exports = { create, find, findAll, update, remove }
