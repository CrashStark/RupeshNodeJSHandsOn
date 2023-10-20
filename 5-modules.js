//CommonJS, every file is module (by default)
//Modules-- Encapsulated Code (only Share minimum)

const { peter } = require("./2-intro");
const { john } = require("./2-intro");
const  sayHi  = require("./3-Utils");
require("./4-mind-grenade");


sayHi('Susan');
sayHi(john);
sayHi(peter);


