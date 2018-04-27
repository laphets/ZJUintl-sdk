const ZJUintl = require('../src/zju_intl');



ZJUintl.getCourse({ username: '3170111705', password: '' }).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
    })

