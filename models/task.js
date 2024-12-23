const mongoose = require('mongoose');

const { Schema } = mongoose;

const taskSchema = new Schema ({
    title : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    status : {
        type: String,
        required: true,
        default: "Pending"
    },
    Date : {
        type: Date,
        required: true,
        default: Date.now
    },
})

module.exports = mongoose.model('Task', taskSchema);