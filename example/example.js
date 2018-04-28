const ZJUintl = require('../src/zju_intl');

// ZJUintl.connectTest('Laphets').then(res => {
//     console.log(res);
// })

ZJUintl.getCourse({ username: '3170111705', password: '' }).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})

// ZJUintl.getBBGradeList({ username: '3170111705', password: '' }).then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// })

// ZJUintl.getBBCertainGrade({ username: '3170111705', password: '', courseid: '_2823_1' }).then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// })