var TaskService = require('./taskService');

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
  }

// End Facade

  module.exports = new TaskServiceWrapper;
