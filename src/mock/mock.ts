import Mock from 'mockjs'
// const Mock = require('mock')
const Random = Mock.Random;

const accontInfo = function(){
    let info = [];
    for(let i=0; i<=5; i++){
        let objState = {
            title : Random.ctitle(),
            content: Random.cparagraph(),
            createdTime: Random.date()
        }
        info.push(objState)
    }
    return info;
}

Mock.mock('http://localhost:5173/api/mock/use',accontInfo)
