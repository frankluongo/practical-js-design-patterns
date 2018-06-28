var Task = function (name) {
    this.name = name;
    this.completed = false;
}

Task.prototype.complete = function () {
    console.log('completing task: ' + this.name);
    this.completed = true;
};

Task.prototype.save = function () {
    console.log('saving Task: ' + this.name);
};

var myTask = new Task('Legacy Task');
myTask.complete();
myTask.save();

// DECORATOR
// ---------------------------------------------------------------------------------------

var urgentTask = function(name, priority) {
  Task.call(this, name);
  this.priority = priority;
};
// Give urgent task Task's prototype properties
urgentTask.prototype = Object.create(Task.prototype);
urgentTask.prototype.notify = function () {
  console.log('notifying important people');
};
urgentTask.prototype.save = function() {
  this.notify();
  console.log('do this stuff before saving');
  Task.prototype.save.call(this); // .call allows you to bind 'this' to urgentTask
};
var ut = new urgentTask('This is urgent', 1);
ut.complete();
ut.save();
console.log(ut);
