# Contact API Spec

## Create Contact API

Endpoint : POST /api/contacts

Headers : 
- Authorization : token

Request Body : 
```json
{
    "first_name" : "Soeryadana",
    "last_name" : "soeryadana",
    "email" : "soeryadana@mail.com",
    "phone" : "08123456789"
}
```

Response Body Success : 
```json
{
    "data" : {
        "id" : 1,
        "first_name" : "Soeryadana",
        "last_name" : "soeryadana",
        "email" : "soeryadana@mail.com",
        "phone" : "08123456789"
    }
}
```

Response Body Error :
```json
{
    "error" : "Email is not valid format"
}
```

## Update Contact API

Endpoint : PUT /api/contact/update/:id

Headers : 
- Authorization : token

Request Body : 
```json
{
    "first_name" : "Soeryadana",
    "last_name" : "soeryadana",
    "email" : "soeryadana@mail.com",
    "phone" : "08123456789"
}
```

Response Body Success : 
```json
{
    "data" : {
        "id" : 1,
        "first_name" : "Soeryadana",
        "last_name" : "soeryadana",
        "email" : "soeryadana@mail.com",
        "phone" : "08123456789"
    }
}
```


Response Body Error :
```json
{
    "error" : "Email is not valid format"
}
```

## Get Contact API

Endpoint : GET /api/contacts/:id

Headers : 
- Authorization : token


Response Body Success : 
```json
{
    "data" : {
        "id" : 1,
        "first_name" : "Soeryadana",
        "last_name" : "soeryadana",
        "email" : "soeryadana@mail.com",
        "phone" : "08123456789"
    }
}
```

Response Body Error :
```json
{
    "error" : "Conctact not found"
}
```

## Search Contact API

Endpoint : GET /api/contact

Headers : 
- Authorization : token

Query Params : 
- name : Search by first_name or last_name, using like query, optional
- email : Search by email, using like query, optional
- phone : Search by phone, using like query, optional
- page : Number of page(s), default is 1
- size : Number of data return, default is 10

Response Body Success : 
```json
{
    "data" : [
        {
            "id" : 1,
            "first_name" : "Soeryadana",
            "last_name" : "soeryadana",
            "email" : "soeryadana@mail.com",
            "phone" : "08123456789"
        },
        {
            "id" : 2,
            "first_name" : "Soeryadana",
            "last_name" : "soeryadana",
            "email" : "soeryadana@mail.com",
            "phone" : "08123456789"
        }
    ], 
    "paging" : {
        "page" : 1,
        "total_page" : 3,
        "total_item" : 30
    }
}
```

Response Body Error :

## Remove Contact API

Endpoint : DELETE /api/contacts/:id

Headers : 
- Authorization : token

Response Body Success : 
```json
{
    "data" : "Contact delted successfully"
}
```

Response Body Error :
```json
{
    "error": "Contact not found"
}
```
