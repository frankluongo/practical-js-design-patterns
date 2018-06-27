var Task = require('./task');
var Repo = require('./taskRepository');

var task1 = new Task(Repo.get(1));

var task1 = new Task({name: 'Create a demo for constructors'});
var task2 = new Task({name: 'Create a demo for modules'});
var task3 = new Task({name: 'Create a demo for constructors'});
var task4 = new Task({name: 'Create a demo for constructors'});

task1.complete();
task2.save();
task3.save();
task4.save();
