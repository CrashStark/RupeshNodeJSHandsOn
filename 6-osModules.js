//OS modules to interact with OS

const os=require('os');
//Info about current User
const user=os.userInfo();
console.log(user);
//method to system usage time in seconds

console.log(`The System Uptime is ${os.uptime()} seconds`)
const uptime=(os.uptime()/60)/60;
console.log(uptime);

const currentOs={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}

console.log(currentOs);