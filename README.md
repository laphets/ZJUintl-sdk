# A Node SDK for ZJUintl gRPC Service
THE LATEST PROTO FILE SHOULD BE FETCHED FROM PROTO SUBMODULE
A **Typescript** based project.
> Use one line of code to access gRPC service for ZJUintl, which can provide you with the data including course information, exam details and exam scores etc.

## Needing update proto file!!!

## Install
Make sure you have set registry for *QSC Private npm registry*.
```
npm i zjuintl-sdk
```

Otherwise, your need to set the registry by your own.
```
npm i zjuintl-sdk --registry=https://npm.zjuqsc.com
```



## Usage in Node

First, you need import the package in your project.
```js
const ZJUintl = require('zjuintl-sdk')
```

There are four methods available. 
**All the methods will return a Promise.**

### connectTest
Just check whether you can connect to our service.

Example:
```js
ZJUintl.connectTest('Your name here').then(res => {
    console.log(res);
})
```

### getCourse
Get course list with schedule from *PeopleSoft*.

Example:
```js
ZJUintl.getCourse({ username: '3170111705', password: 'Corresponding password here' }).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})
```

### getBBGradeList
Get course list with total score from *BlackBoard*.

Example:
```js
ZJUintl.getBBGradeList({ username: '3170111705', password: 'Corresponding password here' }).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})
```

### getBBCertainGrade
Get a detail grade list for a certain course from *BlackBoard*.
`courseid` is what you get from the `getBBGradeList` method.

Example:
```js
ZJUintl.getBBCertainGrade({ username: '3170111705', password: 'Corresponding password here', courseid: '_2823_1' }).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})
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
