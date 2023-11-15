// const joi = require('joi');
//      - type: bind
//         source: ./backend/pocketbase/pb_data
//         target: /pb/pb_data
//
// function validateEmployee(employee) {
//     const schema = joi.object({
//         ssn: joi.string().required().max(11).min(11),
//         firstName: joi.string().required().max(30),
//         middleName: joi.optional(),
//         lastName: joi.string().required().max(30),
//         phone: joi.string().required().max(10).min(10),
//         address: joi.string().required().max(100),
//         email: joi.string().email().required().max(50),
//         salary: joi.number(),
//         isCoach: joi.bool()
//     }).unknown();
//     return schema.validate(employee);
// }
//
// module.exports.validateEmployee = validateEmployee;

function validateEmployee(employee) {
    console.log("test");
    return "this is hello from employee.js";
}

module.exports.validateEmployee = validateEmployee;