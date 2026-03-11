# Address API Spec

## Create Address API

Endpoint : POST /api/contacts/:contactId/addresses

Headers : 
- Authorization : token

Request Body :
```json
{
    "street" : "street name",
    "city" : "city name",
    "province" : "province name",
    "country" : "country name",
    "postal_code" : "postal code number"
}
```

Response Body Success :
```json
{
   "data" : {
        "id" : 1,
        "street" : "street name",
        "city" : "city name",
        "province" : "province name",
        "country" : "country name",
        "postal_code" : "postal code number"
   }
}
```

Response Body Error :
```json
{
    "error" : "country is required"
}
```

## Update Address API

Endpoint: PUT /api/contacts/:contactId/addresses/:addressId

Headers : 
- Authorization : token

equest Body :
```json
{
    "street" : "street name",
    "city" : "city name",
    "province" : "province name",
    "country" : "country name",
    "postal_code" : "postal code number"
}
```

Response Body Success :
```json
{
   "data" : {
        "id" : 1,
        "street" : "street name",
        "city" : "city name",
        "province" : "province name",
        "country" : "country name",
        "postal_code" : "postal code number"
   }
}
```

Response Body Error :
```json
{
    "error" : "country is required"
}
```

## Get Address API

Endpoint : GET /api/contacts/:contactId/addresses/:addressId

Headers : 
- Authorization : token

Response Body Success :
```json
{
   "data" : {
        "id" : 1,
        "street" : "street name",
        "city" : "city name",
        "province" : "province name",
        "country" : "country name",
        "postal_code" : "postal code number"
   }
}
```

Response Body Error :
```json
{
    "error" : "contact not found"
}
```

## List Address API

Endpoint : GET /api/contacts/:contactId/addresses

Headers : 
- Authorization : token

Response Body Success :
```json
{
    "data" : [
        {
            "id" : 1,
            "street" : "street name",
            "city" : "city name",
            "province" : "province name",
            "country" : "country name",
            "postal_code" : "postal code number"
        },
        {
            "id" : 2,
            "street" : "street name",
            "city" : "city name",
            "province" : "province name",
            "country" : "country name",
            "postal_code" : "postal code number"
        }
    ]
}
```

Response Body Error :
```json
{
    "error" : "contact not found"
}
```

## Remove Address API

Endpoint : DELETE /api/contacts/:contactId/addresses/:addressId

Headers : 
- Authorization : token

Response Body Success :
```json
{
    "data" : "Address is deleted successfully"
}
```

Response Body Error :
```json
{
    "error" : "contact not found"
}
```