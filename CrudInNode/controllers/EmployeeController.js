const Employee = require('../models/EmployeeModel')

const index = (req, res, next) => {
    Employee.find()
        .then(response => {
            res.json({
                response
            });
        })
        .catch(error => {
            res.status(500).json({
                message: 'An error occurred'
            });
        });
};

const show = (req, res, next) => {
    let employeeId = req.body.employeeId;
    Employee.findById(employeeId)
        .then(response => {
            res.json(response);
        }).catch(error => {
            res.json({
                message: 'An Error Occured'
            })
        })
}

const store = (req, res, next) => {
    let employee = new Employee({
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    });
    employee.save()
        .then(response => {
            res.json({
                message: 'Employee Added Successfully'
            }).catch(response => {
                res.json({
                    message: 'An Error Occured'
                })
            })
        })

}

//update An Employee

const update = (req, res, next) => {
    let employeeId = req.body.employeeId;
    let updateData = {
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    }

    Employee.findByIdAndUpdate(employeeId, { $set: updateData })
        .then(() => {
            res.json({
                message: "Employee updated Successfully"
            }).catch(error => {
                res.json({
                    message: 'An error Occured'
                })
            })
        })
}

const destroy = (req, res, next) => {
    let employeeId = req.body.employeeId;
    Employee.findByIdAndRemove(employeeId)
        .then(() => {
            res.json({
                message: 'Employee is Deleted'
            })
        }).catch((error) => {
            res.json({
                message: 'An Error Occured'
            })
        })
}

module.exports = {
    index,
    show,
    store,
    update,
    destroy
}