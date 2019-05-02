var mongoose = require('mongoose');

var FeedbackSchema = mongoose.Schema({
    //id: { type: String, required: true },
    fname: { type: String, require: true },
    lname: { type: String, require: true },
    username: { type: String, require: true },
    password: { type: String, require: true },
    email: { type: String, require: true }

})

var FeedbackModel = mongoose.model('members', FeedbackSchema);
module.exports = FeedbackModel;



