# MyWeather App Server

## Created: 02/01/2024

## Author: S. Sigman

### Description

Authentication and data services for the MyWeahter app are provided through a API published by the MyWeather Server. The server used is a node based express server which only provides the web services provided through the various API calls.

### Authentication & Authorization API

In order to authenticate a user the auth API call is used. To authorize a user the authz API Call is used.

| API CAll      | HTTP Verb | Description                                                                 | Return Values (Http Status - message)              |
| :------------ | :-------: | :-------------------------------------------------------------------------- | :------------------------------------------------- |
| /users/auth/  |   POST    | Authenticate a user using email and password.                               | 200 & JWT token or else 401 Authentication Failure |
| /users/authz/ |   POST    | User presenting the JWT is authorized to access the given resource or page. | 200 Authorized or else 403 Forbidden               |
