

const eventEmitter = require('events');
const customEmitter = new eventEmitter();

customEmitter.on('response', (name) => {
    console.log(`data received ${name}`);
});

customEmitter.on('response', () => {
    console.log(`some other logic here`);
});

customEmitter.emit('response','john');