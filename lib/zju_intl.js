'use strict';

/*
 * @Author: Laphets 
 * @Date: 2018-04-27 22:19:46 
 * @Last Modified by: Laphets
 * @Last Modified time: 2018-04-27 23:27:47
 */

var PROTO_PATH = __dirname + '/protos/zju_intl.proto';
var grpc = require('grpc');

var protoDescriptor = grpc.load(PROTO_PATH);
var zjuintl = protoDescriptor.zjuintl;

var client = new zjuintl.ZJUintl(require('./config').serviceURL, grpc.credentials.createInsecure());

/**
 * connectTest
 * @param {string} name name for connectTest
 * @param {string} url URL for our gprc service
 */
var connectTest = function connectTest(name) {
    var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : require('./config').serviceURL;

    return new Promise(function (resolve, reject) {
        if (!name) {
            reject({
                status: 'PARAMERROR'
            });
        } else {
            client.connect_test({ name: name }, function (err, response) {
                if (err) {
                    reject({
                        status: 'CLIENTERROR',
                        error: err
                    });
                } else {
                    resolve(response);
                }
            });
        }
    });
};

/**
 * getCourse(timetable)
 * @param {Object} user user information includes username and password
 * @param {string} url url of our grpc service
 */
var getCourse = function getCourse(user) {
    var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : require('./config').serviceURL;

    return new Promise(function (resolve, reject) {
        client.getCourse({ username: user.username, password: user.password }, function (err, response) {
            if (err) {
                reject({
                    status: 'CLIENTERROR',
                    error: err
                });
            } else {
                resolve(response);
            }
        });
    });
};

/**
 * getBBGradeList
 * @param {Object} user user information includes username and password
 * @param {String} url url of our grpc service
 */
var getBBGradeList = function getBBGradeList(user) {
    var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : require('./config').serviceURL;

    return new Promise(function (resolve, reject) {
        client.getBBGradeList({ username: user.username, password: user.password }, function (err, response) {
            if (err) {
                reject({
                    status: 'CLIENTERROR',
                    error: err
                });
            } else {
                resolve(response);
            }
        });
    });
};

/**
 * getBBCertainGrade - get grade for a certain course
 * @param {Object} user user information includes username, password and courseid
 * @param {String} url url of our grpc service
 */
var getBBCertainGrade = function getBBCertainGrade(user) {
    var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : require('./config').serviceURL;

    return new Promise(function (resolve, reject) {
        client.getBBCertainGrade({ username: user.username, password: user.password, courseid: user.courseid }, function (err, response) {
            if (err) {
                reject({
                    status: 'CLIENTERROR',
                    error: err
                });
            } else {
                resolve(response);
            }
        });
    });
};

module.exports = {
    connectTest: connectTest,
    getCourse: getCourse,
    getBBGradeList: getBBGradeList,
    getBBCertainGrade: getBBCertainGrade
};
//# sourceMappingURL=zju_intl.js.map