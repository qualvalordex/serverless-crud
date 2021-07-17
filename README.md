# CRUD Serverless API

> This project is configured to run localy.

## Dependencies

You need to have Docker and docker-compose to run this project.

## Run this project localy

Clone this repository to your machine, navigate to its root folder and then type

```
$ make up
```

in a terminal. After docker finished its work, in a new terminal type

```
$ make sh
```

to access docker container shell. Inside the container type

```
$ npm i
```

to install project's dependencies and then type

```
$ npm run start-offline
```

to start your service. Now you're ready to do HTTP requests.

## Routes

### POST /users

> Creates a new user.

#### Request body:

```json
{
    "first_name": string,
    "last_name": string,
    "age": integer,
    "email": string
}
```

#### Responses:

Success 200:

```json
{
    "message": "User created successful."
}
```

Validation error 400:

```json
{
    "error": error
}
```

Duplicated e-mail 422:

```json
{
    "error": "This is already an user using this e-mail address."
}
```

### GET /users/{userId}

> Returns user information.

#### Request path parameters:

```json
{
    "userId": integer
}
```

#### Responses:

Success 200:

```json
{
    "data": {
        "first_name": string,
        "last_name": string,
        "age": integer,
        "email": string
    }
}
```

Not Found 404:

```json
{
    "message": "User not found."
}
```

### GET /users

> Return all users.

#### Responses

Success 200:

```json
{
    "data": [
        {
            "first_name": string,
            "last_name": string,
            "age": integer,
            "email": string
        },
        {
            "first_name": string,
            "last_name": string,
            "age": integer,
            "email": string
        },
        {
            "first_name": string,
            "last_name": string,
            "age": integer,
            "email": string
        }
    ]
}
```

Not Found 404:

```json
{
    "message": "Anything found here."
}
```

### PATCH /users

> Update user's data.

#### Request body:

```json
{
    "id": integer,
    "first_name": string,
    "last_name": string,
    "age": integer,
    "email": string
}
```

PS: only id is required.

#### Responses:

Success 200:

```json
{
    "message": "User update successful."
}
```

Validation error 400:

```json
{
    "error": error
}
```

Not Found 404:

```json
{
    "message": "User not found."
}
```

### DELETE /users/{userId}

> Delete an user.

#### Request path parameters:

```json
{
    "userId": integer
}
```

Success 200:

```json
{
    "message": "User deleted successful."
}
```

Not Found 404:

```json
{
    "message": "User not found."
}
```
