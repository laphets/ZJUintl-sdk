import { Course, ConnectTest, ErrType, User, BBGradeList, BBCertainGrade, UserBC } from './type/system';
/**
 * connectTest
 * @param {string} name name for connectTest
 * @param {string} url URL for our gprc service
 */
export declare function connectTest(name: string, url?: string): Promise<ConnectTest | ErrType>;
/**
 * getCourse(timetable)
 * @param {Object} user user information includes username and password
 * @param {string} url url of our grpc service
 */
export declare function getCourse(user: User, url?: string): Promise<Course>;
/**
 * getBBGradeList
 * @param {Object} user user information includes username and password
 * @param {String} url url of our grpc service
 */
export declare function getBBGradeList(user: User, url?: string): Promise<ErrType | BBGradeList>;
/**
 * getBBCertainGrade - get grade for a certain course
 * @param {Object} user user information includes username, password and courseid
 * @param {String} url url of our grpc service
 */
export declare function getBBCertainGrade(user: UserBC, url?: string): Promise<ErrType | BBCertainGrade>;
