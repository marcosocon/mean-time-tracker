var mongoose = require('mongoose');

module.exports = mongoose.model('Report', {
	project: {type : String , default : ''},
	hours : {type : Number , default : 0}
});
