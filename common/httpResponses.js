module.exports.OK = (body) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            ...body
        })
    }
}

module.exports.serverError = (error) => {
    return {
        statusCode: 500,
        body: JSON.stringify({
            error: error
        })
    }
}