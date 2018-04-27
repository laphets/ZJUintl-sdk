/*
 * @Author: Laphets 
 * @Date: 2018-04-27 22:19:46 
 * @Last Modified by: Laphets
 * @Last Modified time: 2018-04-27 23:27:47
 */


const PROTO_PATH = __dirname + '/protos/zju_intl.proto';
const grpc = require('grpc');

let protoDescriptor = grpc.load(PROTO_PATH);
let zjuintl = protoDescriptor.zjuintl;

let client = new zjuintl.ZJUintl(require('./config').serviceURL, grpc.credentials.createInsecure());

/**
 * connectTest
 * @param {string} name name for connectTest
 * @param {string} url URL for our gprc service
 */
const connectTest = (name, url = require('./config').serviceURL) => {
    return new Promise((resolve, reject) => {
        if (!name) {
            reject({
                status: 'PARAMERROR'
            });
        } else {
            client.connect_test({name}, (err, response) => {
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
    })
}

/**
 * getCourse(timetable)
 * @param {Object} user user information includes username and password
 * @param {string} url url of our grpc service
 */
const getCourse = (user, url = require('./config').serviceURL) => {
    return new Promise((resolve, reject) => {
        client.getCourse({ username: user.username, password: user.password }, (err, response) => {
            if (err) {
                reject({
                    status: 'CLIENTERROR',
                    error: err
                });
            } else {
                resolve(response);
            }
        })
    })
}

/**
 * getBBGradeList
 * @param {Object} user user information includes username and password
 * @param {String} url url of our grpc service
 */
const getBBGradeList = (user, url = require('./config').serviceURL) => {
    return new Promise((resolve, reject) => {
        client.getBBGradeList({ username: user.username, password: user.password }, (err, response) => {
            if (err) {
                reject({
                    status: 'CLIENTERROR',
                    error: err
                });
            } else {
                resolve(response);
            }
        });
    })
}

/**
 * getBBCertainGrade - get grade for a certain course
 * @param {Object} user user information includes username, password and courseid
 * @param {String} url url of our grpc service
 */
const getBBCertainGrade = (user, url = require('./config').serviceURL) => {
    return new Promise((resolve, reject) => {
        client.getBBCertainGrade({ username: user.username, password: user.password, courseid: user.courseid }, (err, response) => {
            if (err) {
                reject({
                    status: 'CLIENTERROR',
                    error: err
                });
            } else {
                resolve(response);
            }
        })
    })
}

module.exports = {
    connectTest,
    getCourse,
    getBBGradeList,
    getBBCertainGrade
}