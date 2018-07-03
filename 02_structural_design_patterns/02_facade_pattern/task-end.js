var Task = require('./task');
var TaskServiceWrapper = require('./TaskServiceWrapper');

/*

// Add a better interface (Facade) for the functionality provided by TaskService

  var TaskServiceWrapper = function() {
    var completeAndNotify = function (task) {
      TaskService.complete(task);

      if (task.completed) {
        TaskService.setCompleteDate(task);
        TaskService.notifyCompletion(task, task.user);
        TaskService.save(task);
      }
    }
    return {
      completeAndNotify: completeAndNotify
    }
  }();

// Facade End
*/

var myTask = new Task({
  name: 'MyTask',
  priority: 1,
  project: 'Courses',
  user: 'Jon',
  completed: false
});

console.log(myTask);

TaskServiceWrapper.completeAndNotify(myTask);

console.log(myTask);
