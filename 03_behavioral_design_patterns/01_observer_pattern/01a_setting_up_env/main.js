var Task = require('./task');

var task1 = new Task({
  name: 'create demo for constructors',
  user: 'Jon'
});


task1.save();