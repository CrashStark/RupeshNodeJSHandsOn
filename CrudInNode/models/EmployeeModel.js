const mongoose = require('mongoose');
const schema = mongoose.Schema;

const employeeSchema = new Schema({
    name: {
        type: String
    },
    designation: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    age: {
        type: Number
    }
}, { timestamps: true });

const Employee = mongoose.model('Employee', employeeSchema);