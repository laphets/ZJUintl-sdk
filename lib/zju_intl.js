"use strict";
/*
 * @Author: Laphets
 * @Date: 2018-04-30 09:26:37
 * @Last Modified by: Laphets
 * @Last Modified time: 2018-04-30 11:42:21
 */

Object.defineProperty(exports, "__esModule", { value: true });
var PROTO_PATH = __dirname + '/protos/zju_intl.proto';
var grpc = require("grpc");
var config_1 = require("./config");
var protoDescriptor = grpc.load(PROTO_PATH);
var zjuintl = protoDescriptor.zjuintl;
/**
 * connectTest
 * @param {string} name name for connectTest
 * @param {string} url URL for our gprc service
 */
function connectTest(name) {
    var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : config_1.config.serviceURL;

    return new Promise(function (resolve, reject) {
        if (!name) {
            var data = {
                status: 'PARAMERROR',
                error: ''
            };
            reject(data);
        } else {
            var client = new zjuintl.ZJUintl(url, grpc.credentials.createInsecure());
            client.connect_test({ name: name }, function (err, response) {
                if (err) {
                    var _data = {
                        status: 'CLIENTERROR',
                        error: err
                    };
                    reject(_data);
                } else {
                    var _data2 = {
                        status: 'SUCCESS',
                        message: response
                    };
                    resolve(_data2);
                }
            });
        }
    });
}
exports.connectTest = connectTest;
/**
 * getCourse(timetable)
 * @param {Object} user user information includes username and password
 * @param {string} url url of our grpc service
 */
function getCourse(user) {
    var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : config_1.config.serviceURL;

    return new Promise(function (resolve, reject) {
        var client = new zjuintl.ZJUintl(url, grpc.credentials.createInsecure());
        client.getCourse({
            username: user.username,
            password: user.password
        }, function (err, response) {
            if (err) {
                reject({ status: 'CLIENTERROR', error: err });
            } else {
                resolve(response);
            }
        });
    });
}
exports.getCourse = getCourse;
/**
 * getBBGradeList
 * @param {Object} user user information includes username and password
 * @param {String} url url of our grpc service
 */
function getBBGradeList(user) {
    var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : config_1.config.serviceURL;

    return new Promise(function (resolve, reject) {
        var client = new zjuintl.ZJUintl(url, grpc.credentials.createInsecure());
        client.getBBGradeList({
            username: user.username,
            password: user.password
        }, function (err, response) {
            if (err) {
                reject({ status: 'CLIENTERROR', error: err });
            } else {
                resolve(response);
            }
        });
    });
}
exports.getBBGradeList = getBBGradeList;
/**
 * getBBCertainGrade - get grade for a certain course
 * @param {Object} user user information includes username, password and courseid
 * @param {String} url url of our grpc service
 */
function getBBCertainGrade(user) {
    var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : config_1.config.serviceURL;

    return new Promise(function (resolve, reject) {
        var client = new zjuintl.ZJUintl(url, grpc.credentials.createInsecure());
        client.getBBCertainGrade({
            username: user.username,
            password: user.password,
            courseid: user.courseid
        }, function (err, response) {
            if (err) {
                reject({ status: 'CLIENTERROR', error: err });
            } else {
                resolve(response);
            }
        });
    });
}
exports.getBBCertainGrade = getBBCertainGrade;
//# sourceMappingURL=zju_intl.js.map
//# sourceMappingURL=zju_intl.js.map