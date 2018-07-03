var Task = function (data) {
  this.name = data.name;
  this.priority = data.priority;
  this.project = data.project;
  this.user = data.user;
  this.completed = data.completed;
}

var TaskService = function () {
  return {
    complete (task) {
      task.completed = true;
      console.log(`completing task: ${task.name} `);
    },
    setCompleteDate (task) {
      task.completedDate = new Date();
      console.log(`${task.name} completed on ${task.completedDate}`);
    },
    notifyCompletion (task, user) {
      console.log(`Notifying ${user} of the completion of ${task.name}`);
    },
    save (task) {
      console.log(`Saving Task: ${task.name}`);
    }
  }
}();

var myTask = new Task({
  name: 'MyTask',
  priority: 1,
  project: 'Courses',
  user: 'Jon',
  completed: false
});

console.log(myTask);

TaskService.complete(myTask);

if (myTask.completed) {
  TaskService.setCompleteDate(myTask);
  TaskService.notifyCompletion(myTask, myTask.user);
  TaskService.save(myTask);
}

console.log(myTask);
