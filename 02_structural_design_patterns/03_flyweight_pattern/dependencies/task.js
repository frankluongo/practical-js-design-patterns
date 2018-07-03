var flyweightFactory = require('./flyweightFactory');

var Task = function (data) {
  this.flyweight = flyweightFactory.get(
    data.project,
    data.priority,
    data.user,
    data.completed
  );
  this.name = data.name;
}

module.exports = Task;
