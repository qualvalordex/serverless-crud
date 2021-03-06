module.exports.OK = (body) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            ...body
        })
    }
}

module.exports.badRequest = (body) => {
    return {
        statusCode: 400,
        body: JSON.stringify({
            ...body
        })
    }
}

module.exports.notFound = (body) => {
    return {
        statusCode: 404,
        body: JSON.stringify({
            ...body
        })
    }
}

module.exports.conflict = (body) => {
    return {
        statusCode: 409,
        body: JSON.stringify({
            ...body
        })
    }
}

module.exports.unprocessableEntity = (body) => {
    return {
        statusCode: 422,
        body: JSON.stringify({
            ...body
        })
    }
}

module.exports.serverError = (body) => {
    return {
        statusCode: 500,
        body: JSON.stringify({
            ...body
        })
    }
}
