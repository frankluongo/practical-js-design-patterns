// Does all database calls

var repo = function () {

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

module.exports = repo();
