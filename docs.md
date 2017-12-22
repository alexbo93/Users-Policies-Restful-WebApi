# API Documentation

Here you can find documented all the endpoints that this REST Api has available to be consumed. Information that can be found:
  - URL and Request type
  - Parameters to properly call the endpoint and sample calls
  - Responses

*This document should only be consulted in case the project has already been built and the server is listening. To properly go through this process, please check README.md in the root folder*

# Authentication
Information about authentication focused endpoints

## Login
Used to collect a token for a registered user

**This is the first call that should be done in this API. All other calls require authentication, so unless user is provided with a token, will not be able to perform any other call**

**URL** : `/auth/login/`
**Method** : `POST`
**Auth required** : NO

**Data constraints**
```json
{
    "username": "[valid user name]",
    "email": "[valid user email]"
}
```

**Data example**
```json
{
    "username": "Manning",
    "password": "manningblankenship@quotezart.com"
}
```

### Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "auth": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU4ZmQxNTliLTU3YzQtNGQzNi05YmQ3LWE1OWNhMTMwNTdiYiIsImlhdCI6MTUxMzkzMzM2NiwiZXhwIjoxNTE0MDE5NzY2fQ.40HECFhM_PAQFF8EOH71t21GEQEpT3WW12U6okuIHlA"
}
```

### Error Response

**Condition** : If 'user name' and 'email' combination is wrong.

**Code** : `401 UNAUTHORIZED`

**Content** :

```json
{
    "auth": false,
    "token": null,
    "message": "Incorrect credentials!"
}
```

# Users
Information about users in the system

## Get Users
Retrieves a list of all the users stored in the platform

**URL** : `/users/`
**Method** : `GET`
**Auth required** : YES.

**URL Data constraints**
```json
{
    "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ0ZTQ0MjY4LWRjZTgtNDkwMi1iNjYyLTFiMzRkMmMxMGI4ZSIsImlhdCI6MTUxMzkzMzQzNywiZXhwIjoxNTE0MDE5ODM3fQ.krFc5R8Bb2OR0w-784ZGScEYwM9rO4E33qSH9sYKrNg"
}
```

### Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "_id": [user_uuid],
    "name": "Ophelia",
    "email": "opheliablankenship@quotezart.com",
    "role": "user"
},
{
...
},
```

## Get Users by Id
Retrieves a list of all the users corresponding to a specific Id

**URL** : `/users/:id`
**Method** : `GET`
**Auth required** : YES.

**URL Data constraints**
```json
{
    "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ0ZTQ0MjY4LWRjZTgtNDkwMi1iNjYyLTFiMzRkMmMxMGI4ZSIsImlhdCI6MTUxMzkzMzQzNywiZXhwIjoxNTE0MDE5ODM3fQ.krFc5R8Bb2OR0w-784ZGScEYwM9rO4E33qSH9sYKrNg"
}
```

### Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "_id": [user_uuid],
    "name": "Manning",
    "email": "manningblankenship@quotezart.com",
    "role": "user"
}
```

### Error Response

**Condition** : If there is no user in the platform with specified Id.

**Code** : `404 NOT FOUND`

**Content** :

```json
'No user found.'
```

## Get Users by Name
Retrieves a list of all the users corresponding to a specific name

**URL** : `/users/:user_name`
**Method** : `GET`
**Auth required** : YES.

**URL Data constraints**
```json
{
    "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ0ZTQ0MjY4LWRjZTgtNDkwMi1iNjYyLTFiMzRkMmMxMGI4ZSIsImlhdCI6MTUxMzkzMzQzNywiZXhwIjoxNTE0MDE5ODM3fQ.krFc5R8Bb2OR0w-784ZGScEYwM9rO4E33qSH9sYKrNg"
}
```

### Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "_id": [user_uuid],
    "name": "Manning",
    "email": "manningblankenship@quotezart.com",
    "role": "user"
}[,{
    ...
}]
```

### Error Response

**Condition** : If there is no user in the platform with specified name.

**Code** : `404 NOT FOUND`

**Content** :

```json
'No user found.'
```

## Get User by Policy Id
Retrieves user information given a policy Id

**URL** : `/users/policy/:policyId`
**Method** : `GET`
**Auth required** : YES. Only "Admin" roles. To retrieve an admin token, please make sure to authenticate with an Admin user credentials. for example:

```json
{
    "username": "Manning",
    "password": "manningblankenship@quotezart.com"
}
```

**URL Data constraints**
```json
{
    "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU4ZmQxNTliLTU3YzQtNGQzNi05YmQ3LWE1OWNhMTMwNTdiYiIsImlhdCI6MTUxMzkzMzM2NiwiZXhwIjoxNTE0MDE5NzY2fQ.40HECFhM_PAQFF8EOH71t21GEQEpT3WW12U6okuIHlA"
}
```

### Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "_id": [user_uuid],
    "name": "Manning",
    "email": "manningblankenship@quotezart.com",
    "role": "user"
}[,{
    ...
}]
```

### Error Response

**Condition** : If policy set does not exist in the platform.

**Code** : `404 NOT FOUND`

**Content** :

```json
'No policies found with this id.'
```

**Condition** : If token provided is not valid.

**Code** : `403 FORBIDDEN`

**Content** :

```json
{
    "auth":false,
    "message":"Invalid Token"
}
```

**Condition** : If token provided corresponds to a user that is not found in the platform.

**Code** : `404 NOT FOUND`

**Content** :

```json
{
    "auth":false,
    "message":"No authenticated user found"
}
```

**Condition** : If token provided corresponds to a user that is not an admin user.

**Code** : `403 FORBIDDEN`

**Content** :

```json
{
    "auth":false,
    "message":"You don't have permissions to perform this action"
}
```

# Policies
Information about policies in the system

## Get Policies
Retrieves a list of all the policies stored in the platform

**URL** : `/policies/`
**Method** : `GET`
**Auth required** : YES.

**URL Data constraints**
```json
{
    "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ0ZTQ0MjY4LWRjZTgtNDkwMi1iNjYyLTFiMzRkMmMxMGI4ZSIsImlhdCI6MTUxMzkzMzQzNywiZXhwIjoxNTE0MDE5ODM3fQ.krFc5R8Bb2OR0w-784ZGScEYwM9rO4E33qSH9sYKrNg"
}
```

### Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "_id": [policy_uuid],
    "amountInsured": [prize_number],
    "email": "opheliablankenship@quotezart.com",
    "inceptionDate": [creation_date],
    "installmentPayment": "true/false",
    "clientId": [user_uuid]
},
{
...
},

{
    "_id": 64cceef9-3a01-49ae-a23b-3761b604800b,
    "amountInsured": 1825.7,
    "email": "opheliablankenship@quotezart.com",
    "inceptionDate": "2016-06-01T03:33:32.000Z",
    "installmentPayment": "true/false",
    "clientId": "a0ece5db-cd14-4f21-812f-966633e7be86"
},
{
...
},
```

## Get Policies by User's Name
Retrieves list of policies related to a user name

**URL** : `/policies/user/:user_name`
**Method** : `GET`
**Auth required** : YES. Only "Admin" roles. To retrieve an admin token, please make sure to authenticate with an Admin user credentials. for example:

```json
{
    "username": "Manning",
    "password": "manningblankenship@quotezart.com"
}
```

**URL Data constraints**
```json
{
    "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU4ZmQxNTliLTU3YzQtNGQzNi05YmQ3LWE1OWNhMTMwNTdiYiIsImlhdCI6MTUxMzkzMzM2NiwiZXhwIjoxNTE0MDE5NzY2fQ.40HECFhM_PAQFF8EOH71t21GEQEpT3WW12U6okuIHlA"
}
```

### Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "_id": [policy_uuid],
    "amountInsured": [prize_number],
    "email": "opheliablankenship@quotezart.com",
    "inceptionDate": [creation_date],
    "installmentPayment": "true/false",
    "clientId": [user_uuid]
},
{
...
},

{
    "_id": "64cceef9-3a01-49ae-a23b-3761b604800b",
    "amountInsured": 1825.7,
    "email": "opheliablankenship@quotezart.com",
    "inceptionDate": "2016-06-01T03:33:32.000Z",
    "installmentPayment": "true/false"
    "clientId": "a0ece5db-cd14-4f21-812f-966633e7be86"
},
{
...
},
```

### Error Response

**Condition** : If user's name set does not match any existant user in the platform.

**Code** : `404 NOT FOUND`

**Content** :

```json
'No users found with this name.'
```

**Condition** : If token provided is not valid.

**Code** : `403 FORBIDDEN`

**Content** :

```json
{
    "auth":false,
    "message":"Invalid Token"
}
```

**Condition** : If token provided corresponds to a user that is not found in the platform.

**Code** : `404 NOT FOUND`

**Content** :

```json
{
    "auth":false,
    "message":"No authenticated user found"
}
```

**Condition** : If token provided corresponds to a user that is not an admin user.

**Code** : `403 FORBIDDEN`

**Content** :

```json
{
    "auth":false,
    "message":"You don't have permissions to perform this action"
}
```
