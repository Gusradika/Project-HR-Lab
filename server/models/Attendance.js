const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({    
    id: { 
        type: String, 
        unique: true, 
        required: true 
    },
    nip: { 
        type: String, 
        required: true 
    },
    check_in: Date,
    check_out: Date,
    status_attendance: { 
        type: String, 
        enum: ["present", "late", "absent", "sick", "leave", "permission", "early", "late_and_early"],
    }
}, { 
    collection: 'tbl_attendances' 
});

const AttendanceModel = mongoose.model("Attendance", AttendanceSchema);
module.exports = AttendanceModel;
