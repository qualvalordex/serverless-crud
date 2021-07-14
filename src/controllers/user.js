const db = require('../../models')
const User = db.User

async function create(event) {
    const params = JSON.parse(event.body)
    console.log(params)

    try {
        const result = await User.create(params)

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'User created successful.'
            })
        }
    }
    catch (error) {
        console.error(error)
        
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: error
            })
        }
    }
}

async function find(event) {
    const userId = event.pathParameters.userId

    const result = await User.findByPk(userId)

    return {
        statusCode: 200,
        body: JSON.stringify({
            data: result
        })
    }
}

async function findAll(event) {
    const result = await User.findAll()

    return {
        statusCode: 200,
        body: JSON.stringify({
            data: result
        })
    }
}

async function update(event) {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "Atualizar um usuário..."
        })
    }
}

async function remove(event) {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "Deletar um usuário..."
        })
    }
}

module.exports = { create, find, findAll, update, remove }