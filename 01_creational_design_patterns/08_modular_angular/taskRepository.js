(function() {
  var app = angular.module('taskManager');

// Does all database calls

var taskRepo = function ($http) {

  var db = {}; // access to the database

  var get = function(id) {
    console.log('Getting task ' + id);
    return {
      name: 'new task from db'
    }
  }
  var save = function(task) {
    console.log('Saving ' + task.name + ' to the db')
  }

  return {
    get: get,
    save: save
  }
}

app.service('taskRepository', taskRepo)


}())
