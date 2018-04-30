export interface Course {
    status: string
    course: CourseItem[]
}

export interface CourseItem {
    fullid: string
    category: string
    id: string
    year: string
    name: string
    teacher: string
    semester: string
    determined: boolean
    place: string[]
    time: Time[]
}

export interface Time {
    startTimeHour: number
    startTimeMinute: number
    endTimeHour: number
    endTimeMinute: number
    time: number[]
    week: {
        type: string
        weeks: number[]
    }[]
}

export interface ConnectTest {
    status: string
    message: string
}

export interface ErrType {
    status: string
    error: any
}

export interface User {
    username: string
    password: string
}

export interface BBGradeList {
    status: string
    courses: {
        name: string
        grade: string
        courseid: string
    }[]
}

export interface BBCertainGrade {
    status: string
    items: {
        name: string
        grade: string
    }[]
}

export interface UserBC {
    username: string,
    password: string
    courseid: string
}