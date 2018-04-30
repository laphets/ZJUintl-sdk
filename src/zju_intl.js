"use strict";
/*
 * @Author: Laphets
 * @Date: 2018-04-30 09:26:37
 * @Last Modified by: Laphets
 * @Last Modified time: 2018-04-30 10:48:18
 */
Object.defineProperty(exports, "__esModule", { value: true });
const PROTO_PATH = __dirname + '/protos/zju_intl.proto';
const grpc = require("grpc");
const config_1 = require("../src/config");
let protoDescriptor = grpc.load(PROTO_PATH);
let zjuintl = protoDescriptor.zjuintl;
/**
 * connectTest
 * @param {string} name name for connectTest
 * @param {string} url URL for our gprc service
 */
function connectTest(name, url = config_1.config.serviceURL) {
    return new Promise((resolve, reject) => {
        if (!name) {
            const data = {
                status: 'PARAMERROR',
                error: ''
            };
            reject(data);
        }
        else {
            let client = new zjuintl.ZJUintl(url, grpc.credentials.createInsecure());
            client.connect_test({ name }, (err, response) => {
                if (err) {
                    const data = {
                        status: 'CLIENTERROR',
                        error: err
                    };
                    reject(data);
                }
                else {
                    const data = {
                        status: 'SUCCESS',
                        message: response
                    };
                    resolve(data);
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
function getCourse(user, url = config_1.config.serviceURL) {
    return new Promise((resolve, reject) => {
        let client = new zjuintl.ZJUintl(url, grpc.credentials.createInsecure());
        client.getCourse({
            username: user.username,
            password: user.password
        }, (err, response) => {
            if (err) {
                reject({ status: 'CLIENTERROR', error: err });
            }
            else {
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
function getBBGradeList(user, url = config_1.config.serviceURL) {
    return new Promise((resolve, reject) => {
        let client = new zjuintl.ZJUintl(url, grpc.credentials.createInsecure());
        client.getBBGradeList({
            username: user.username,
            password: user.password
        }, (err, response) => {
            if (err) {
                reject({ status: 'CLIENTERROR', error: err });
            }
            else {
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
function getBBCertainGrade(user, url = config_1.config.serviceURL) {
    return new Promise((resolve, reject) => {
        let client = new zjuintl.ZJUintl(url, grpc.credentials.createInsecure());
        client.getBBCertainGrade({
            username: user.username,
            password: user.password,
            courseid: user.courseid
        }, (err, response) => {
            if (err) {
                reject({ status: 'CLIENTERROR', error: err });
            }
            else {
                resolve(response);
            }
        });
    });
}
exports.getBBCertainGrade = getBBCertainGrade;
//# sourceMappingURL=zju_intl.js.map