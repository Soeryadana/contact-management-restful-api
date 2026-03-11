# User API Spec

## Register User API

Endpoint : POST /api/users

Request Body : 

```json
{
    "username" : "soeryadana",
    "password" : "secret",
    "name" : "Soeryadana"
}
```

Response Body Success :

```json
{
    "data" : {
        "username" : "soeryadana",
        "name" : "Soeryadana"
    }
}
```

Response Body Error :

```json
{
    "error" : "Username Already Registered"
}
```

## Login User API

Endpoint : POST /api/users/login

Request Body :
```json
{
    "username" : "soeryadana",
    "password" : "secret",
}
```

Response Body Success :
```json
{
    "data" : {
        "token" : "unique-token"
    }
}
```

Response Body Error :
```json
{
    "error" : "Username or Password is incorect"
}
```

## Update User API

Endpoint : PATCH /api/users/current

Headers : 
- Authorization : token 

Request Body :
```json
{
    "name" : "New Soeryadana", //optional
    "password" : "New Password" //optional
}
```

Response Body Success :
```json
{
    "data" : {
        "username" : "soeryadana",
        "name" : "New Soeryadana",
    }
}
```

Response Body Error :
```json
{
    "error" : "Name Max Length is 100"
}
```

## Get User API

Endpoint : GET /api/users/current

Headers : 
- Authorization : token

Response Body Success :
```json
{
    "data" : {
        "username" : "soeryadana",
        "name" : "Soeryadana"
    }
}
```

Response Body Error :
```json
{
    "error" : "Unauthorized"
}
```

## Logout User API

Endpoint : DELETE /api/users/logout

Headers : 
- Authorization : token

Response Body Success :
```json
{
    "data" : "Logout Successful"
}
```

Response Body Error :
```json
{
    "error" : "Unauthorized"
}
```