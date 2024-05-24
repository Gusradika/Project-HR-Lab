const mongoose = require('mongoose');

const SalarySchema = new mongoose.Schema({    
    id: { 
        type: String, 
        unique: true, 
        required: true 
    },
    nip: { 
        type: String, 
        required: true 
    },
    month: String,
    basic_salary: Number,
    overtime_pay: Number,
    allowances: Number,
    total_salary: Number
}, { 
    collection: 'tbl_salaries' 
});

const SalaryModel = mongoose.model("Salary", SalarySchema);
module.exports = SalaryModel;
