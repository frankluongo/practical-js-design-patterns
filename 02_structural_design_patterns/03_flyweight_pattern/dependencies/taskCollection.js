var Task = require('./task');

function TaskCollection () {
  var tasks = {};
  var count = 0;

  var add = (data) => {
    tasks[data.name] = new Task(data);
    count++;
  }

  var get = (name) => {
    return tasks[name];
  }

  var getCount = () => {
    return count;
  }

  return {
    add: add,
    get: get,
    getCount: getCount
  }

}

module.exports = TaskCollection;
