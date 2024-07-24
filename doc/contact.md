# Contact

## Create Contact

Endpoint : POST /api/contacts

Request Header:
~ X-API-TOKEN : token

Request Body :

```json
{
  "firstname": "Russel Emilian",
  "lastname": "Rumbino",
  "email": "russel@gmail.com",
  "phone": "0812xxxxx"
}
```

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "firstname": "Russel Emilian",
    "lastname": "Rumbino",
    "email": "russel@gmail.com",
    "phone": "0812xxxxx"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "firstname must not blank, ....."
}
```

## Get Contact

Endpoint : GET /api/contacts

Request Header:
~ X-API-TOKEN : token

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "firstname": "Russel Emilian",
    "lastname": "Rumbino",
    "email": "russel@gmail.com",
    "phone": "0812xxxxx"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "contact is not found "
}
```

## Update Contact

Endpoint : PUT /api/contacts/:id

Request Header:
~ X-API-TOKEN : token

Request Body :

```json
{
  "firstname": "Russel Emilian",
  "lastname": "Rumbino",
  "email": "russel@gmail.com",
  "phone": "0812xxxxx"
}
```

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "firstname": "Russel Emilian",
    "lastname": "Rumbino",
    "email": "russel@gmail.com",
    "phone": "0812xxxxx"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "firstname must not blank, ....."
}
```

## Remove Contact

Endpoint : DELETE /api/contacts/:id

Request Header:
~ X-API-TOKEN : token

Response Body (Success) :

```json
{
  "data": "ok"
}
```

Response Body (Failed) :

```json
{
  "errors": "contact is not found , ....."
}
```

## Search Contact

Endpoint : GET /api/contacts

Query Parameter :
~ name : string, contact firstname or contact lastname, optional
~ phone : string, optional
~ email : string, optional
~ page : number, default 1
~ size : number, default 10

Request Header:
~ X-API-TOKEN : token

Response Body (Success) :

```json
{
  "data": [
    {
      "id": 1,
      "firstname": "Russel Emilian",
      "lastname": "Rumbino",
      "email": "russel@gmail.com",
      "phone": "0812xxxxx"
    },
    {
      "id": 2,
      "firstname": "Meldrick",
      "lastname": "Rumbino",
      "email": "meldrick@gmail.com",
      "phone": "0812xxxxx"
    }
  ],
  "paging": {
    "current_oage": 1,
    "total_page": 10,
    "size": 10
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "unauthorized, ....."
}
```
