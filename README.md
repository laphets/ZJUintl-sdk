# A Node SDK for ZJUintl gRPC Service

> Use one line of code to access gRPC service for ZJUintl, which can provide you with the data including course information, exam details and exam scores etc.

## Install
Make sure you have set registry for *QSC Private npm registry*.
```
npm i zjuintl-sdk
```

Otherwise, your need to set the registry by your own.
```
npm i zjuintl-sdk --registry=https://npm.zjuqsc.com
```

## Status Code Reference
| Case                                                     | Code        | Generated at Client or Server |
| -------------------------------------------------------- | :---------- | ----------------------------- |
| Username or password is wrong.                           | USERWRONG   | Server                        |
| Some error occurs when fetching data.                    | FETCHERROR  | Server                        |
| Some error occurs for your client.                       | CLIENTERROR | Client                        |
| Success fetching data.                                   | SUCCESS     | Both                          |
| You didn't input complete user info(username, password). | PARAMERROR  | Server                        |


## Controbutor
Laphets `i@laphets.com` 求是潮技术研发中心

**If you have any problem when using our service, pls let me know.**
