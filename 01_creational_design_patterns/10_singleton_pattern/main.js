var taskHandler = require('./taskHandler');
var myrepo = require('./repo'); // add () to execute it

myrepo.save('fromMain');
myrepo.save('fromMain');
myrepo.save('fromMain');

taskHandler.save();
taskHandler.save();
taskHandler.save();
taskHandler.save();
