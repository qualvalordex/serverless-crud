async function create(event) {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "Criar usuários..."
        })
    }
}

async function find(event) {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "Ver um usuário..."
        })
    }
}

async function findAll(event) {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "Ver todos os usuários..."
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