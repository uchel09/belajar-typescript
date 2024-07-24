# address

## Create Address

Endpoint : POST /api/contacts/:idContact/addresses

Request Header :
~ X-API-TOKEN : token

Request Body :

```json
{
  "street": "Jalan apa",
  "city": " Kota apa",
  "province": "provinsi apa",
  "country": "country apa",
  "postal_code": "99221"
}
```

Response Body (success) :

```json
{
  "data": {
    "id": 1,
    "street": "Jalan apa",
    "city": " Kota apa",
    "province": "provinsi apa",
    "country": "country apa",
    "postal_code": "99221"
  }
}
```

Response Body (failed) :

```json
{
  "errors": "postal code is required"
}
```

## Get Address

Endpoint : GET /api/contacts/:id/addresses/:idAddress

Request Header :
~ X-API-TOKEN : token

Response Body (success) :

```json
{
  "data": {
    "id": 1,
    "street": "Jalan apa",
    "city": " Kota apa",
    "province": "provinsi apa",
    "country": "country apa",
    "postal_code": "99221"
  }
}
```

Response Body (failed) :

```json
{
  "errors": "address is not found, ..."
}
```

## Update Address

Endpoint : PUT /api/contacts/:id/addresses/:idAddress

Request Header :
~ X-API-TOKEN : token

Request Body :

```json
{
  "street": "Jalan apa",
  "city": " Kota apa",
  "province": "provinsi apa",
  "country": "country apa",
  "postal_code": "99221"
}
```

Response Body (success) :

```json
{
  "data": {
    "id": 1,
    "street": "Jalan apa",
    "city": " Kota apa",
    "province": "provinsi apa",
    "country": "country apa",
    "postal_code": "99221"
  }
}
```

Response Body (failed) :

```json
{
  "errors": "address is not found, ..."
}
```

## Remove Address

Endpoint : DELETE /api/contacts/:id/addresses/:idAddress

Request Header :
~ X-API-TOKEN : token

Response Body (success) :

```json
{
  "data": "OK"
}
```

Response Body (failed) :

```json
{
  "errors": "address is not found, ..."
}
```

## List Address

Endpoint : Get /api/contacts/:id/addresses

Request Header :
~ X-API-TOKEN : token

Response Body (success) :

```json
{
  "data": [
    {
      "id": 1,
      "street": "Jalan apa",
      "city": " Kota apa",
      "province": "provinsi apa",
      "country": "country apa",
      "postal_code": "99221"
    },
    {
      "id": 2,
      "street": "Jalan apa",
      "city": " Kota apa",
      "province": "provinsi apa",
      "country": "country apa",
      "postal_code": "99221"
    },
  ]
}
```

Response Body (failed) :

```json
{
  "errors": "contact is not found, ..."
}
```
