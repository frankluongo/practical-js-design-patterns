var Task = require('./task');

// Services
// ---------------------------------------------------------------------------------------

  var notificationService = function () {
    var message = 'Notifying';
    this.update = function(task) {
      console.log(`${message} ${task.user} for task ${task.name}`);
    }
  };
  var loggingService = function () {
    var message = 'Logging';
    this.update = function(task) {
      console.log(`${message} ${task.user} for task ${task.name}`);
    }
  }
  var auditingService = function () {
    var message = 'Auditing';
    this.update = function(task) {
      console.log(`${message} ${task.user} for task ${task.name}`);
    }
  }
var not = new notificationService();
var ls = new loggingService();
var audit = new auditingService();

// Observer List
// ---------------------------------------------------------------------------------------

function Observerlist() {
  this.observerList = [];
};

Observerlist.prototype.add = function (obj) {
  return this.observerList.push(obj);
};

Observerlist.prototype.get = function (index) {
  if (index > -1 && index < this.observerList.length) {
    return this.observerList[index];
  }
};

Observerlist.prototype.count = function () {
  return this.observerList.length;
}

// Create an Observable Task
// ---------------------------------------------------------------------------------------

var ObservableTask = function (data) {
  Task.call(this, data) // allows me to reference this from task
  this.observers = new Observerlist();
};

ObservableTask.prototype.addObserver = function (observer) {
  this.observers.add(observer);
};

ObservableTask.prototype.notify = function (context) {
  var observerCount = this.observers.count();

  for (var i=0;i < observerCount; i++) {
    this.observers.get(i)(context);
  }
};

ObservableTask.prototype.save = function () {
  this.notify(this);
  Task.prototype.save.call(this);
}

// Execution of Everything
// ---------------------------------------------------------------------------------------

var task1 = new ObservableTask({
  name: 'create demo for constructors',
  user: 'Jon'
});

task1.addObserver(not.update);
task1.addObserver(ls.update);
task1.addObserver(audit.update);

task1.save();