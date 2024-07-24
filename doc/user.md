# User Api Spec

## Register User

Endpoint : POST /api/users

Request Body :

```json
{
  "username": "Russel",
  "password": "Rahasia",
  "name": "Russel Rumbino"
}
```

Response Body (Success) :

```json
{
  "data": {
    "username": "Russel",
    "name": "Russel Rumbino"
  }
}
```

Response Body (Fail) :

```json
{
  "Errors": "User name must not blank, ...."
}
```

## Login User

Endpoint : POST /api/users/login

Request Body :

```json
{
  "username": "Russel",
  "password": "Rahasia"
}
```

Response Body (Success) :

```json
{
  "data": {
    "username": "Russel",
    "name": "Russel Rumbino",
    "token": "uuid"
  }
}
```

Response Body (Fail) :

```json
{
  "Errors": "wrong password or username, ...."
}
```

## Get User

Endpoint : GET /api/users/current

Request Header :
~ X-API-TOKEN : token

Request Body :

Response Body (Success) :

```json
{
  "data": {
    "username": "Russel",
    "name": "Russel Rumbino"
  }
}
```

Response Body (Fail) :

```json
{
  "Errors": "Unauthorized, ...."
}
```

## Update User

Endpoint : PATCH /api/users/current

Request Header :
~ X-API-TOKEN : token

Request Body :

```json
{
  "password": "Rahasia",
  "name": "Russel Rumbino"
}
```

Response Body (Success) :

```json
{
  "data": {
    "username": "Russel",
    "name": "Russel Rumbino"
  }
}
```

Response Body (Fail) :

```json
{
  "Errors": "Unauthorized, ...."
}
```

## Logout User

Endpoint : DELETE /api/users/current

Request Header :
~ X-API-TOKEN : token

Response Body (Success) :

```json
{
  "data": "ok"
}
```

Response Body (Fail) :

```json
{
  "Errors": "Unauthorized, ...."
}
```
