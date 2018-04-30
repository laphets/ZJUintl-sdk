/*
 * @Author: Laphets 
 * @Date: 2018-04-30 09:26:37 
 * @Last Modified by: Laphets
 * @Last Modified time: 2018-04-30 10:48:18
 */


const PROTO_PATH: string = __dirname + '/protos/zju_intl.proto';
import * as grpc from 'grpc'
import { config } from '../src/config'
import {Course, ConnectTest, ErrType, User, BBGradeList, BBCertainGrade, UserBC} from './type/system'
let protoDescriptor = grpc.load(PROTO_PATH);
let zjuintl: any = protoDescriptor.zjuintl;

/**
 * connectTest
 * @param {string} name name for connectTest
 * @param {string} url URL for our gprc service
 */
export function connectTest(name : string, url : string = config.serviceURL) : Promise < ConnectTest | ErrType > {
    return new Promise((resolve: any, reject: any) => {
        if (!name) {
            const data: ErrType = {
                status: 'PARAMERROR',
                error: ''
            }
            reject(data);
        } else {
            let client: any = new zjuintl.ZJUintl(url, grpc.credentials.createInsecure()); 
            client.connect_test({name}, (err: any, response: string) => {
                if (err) {
                    const data: ErrType = {
                        status: 'CLIENTERROR',
                        error: err
                    }
                    reject(data);
                } else {
                    const data: ConnectTest = {
                        status: 'SUCCESS',
                        message: response
                    }
                    resolve(data);
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
export function getCourse (user: User, url: string = config.serviceURL): Promise<ErrType | Course> {
    return new Promise((resolve, reject) => {
        let client: any = new zjuintl.ZJUintl(url, grpc.credentials.createInsecure()); 
        client.getCourse({
            username: user.username,
            password: user.password
        }, (err: any, response: Course) => {
            if (err) {
                reject({status: 'CLIENTERROR', error: err});
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
export function getBBGradeList(user : User, url: string = config.serviceURL) : Promise < ErrType | BBGradeList > {
    return new Promise((resolve, reject) => {
        let client: any = new zjuintl.ZJUintl(url, grpc.credentials.createInsecure());         
        client.getBBGradeList({
            username: user.username,
            password: user.password
        }, (err: any, response: BBGradeList) => {
            if (err) {
                reject({status: 'CLIENTERROR', error: err});
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
export function getBBCertainGrade(user : UserBC, url : string = config.serviceURL) : Promise < ErrType | BBCertainGrade > {
    return new Promise((resolve, reject) => {
        let client: any = new zjuintl.ZJUintl(url, grpc.credentials.createInsecure());                 
        client.getBBCertainGrade({
            username: user.username,
            password: user.password,
            courseid: user.courseid
        }, (err: any, response: BBCertainGrade) => {
            if (err) {
                reject({status: 'CLIENTERROR', error: err});
            } else {
                resolve(response);
            }
        })
    })
}