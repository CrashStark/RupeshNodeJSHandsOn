const { readFile,writeFile } = require('fs');
const { result } = require('lodash');
const util=require('util');
const readfilepromise=util.promisify(readFile);
const writefilepromise=util.promisify(writeFile);

const start=async ()=>
{
    try{
    const first=await readfilepromise('./content/first.txt','utf8');
    const second=await readfilepromise('./content/second.txt','utf8');
    await writefilepromise('./content/result-mind-grenade.txt',`This is awesome ${first},${second}`);
    console.log(first,second);
    }catch(err)
    {
        console.log(err);
    }
}

start();
// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err);

//             } else {
//                 resolve(data);
//             }
//         })
//     })
// }

// getText('./content/first.txt')
//     .then(result => console.log(result))
//     .catch(err => console.log(err));