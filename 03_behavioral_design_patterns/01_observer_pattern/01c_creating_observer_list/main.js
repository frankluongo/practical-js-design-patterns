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


var task1 = new Task({
  name: 'create demo for constructors',
  user: 'Jon'
});

task1.save();