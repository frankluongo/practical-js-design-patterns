
function Flyweight(project, priority, user, completed) {
  this.priority = priority;
  this.project = project;
  this.user = user;
  this.completed = completed;
}

var FlyweightFactory = function () {
  var flyweights = {};

  var get = function (project, priority, user, completed) {

    allFlyweights = flyweights[project + priority + user + completed];

    if (!allFlyweights) {
      allFlyweights = new Flyweight(project, priority, user, completed);
    }

    return allFlyweights;
  };
  var getCount = function () {
    var count = 0;
    for (var f in flyweights) count++;
      return count;
  }
  return {
    get: get,
    getCount: getCount
  }
};

module.exports = new FlyweightFactory;
