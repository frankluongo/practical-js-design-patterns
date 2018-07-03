/*
  Flyweights allow you to conserve Memory
  Only useful when you have A LOT of objects
*/

var Task = function (data) {
  this.flyweight = FlyweightFactory.get(
    data.project,
    data.priority,
    data.user,
    data.completed
  );
  this.name = data.name;
}


// FLYWEIGHT:

function Flyweight(project, priority, user, completed) {
  this.priority = priority;
  this.project = project;
  this.user = user;
  this.completed = completed;
}

var FlyweightFactory = function () {
  var flyweights = {};

  var get = function (project, priority, user, completed) {

    if (!flyweights[project + priority + user + completed]) {
      flyweights[project + priority + user + completed] = new Flyweight(project, priority, user, completed);
    }
    return flyweights[project + priority + user + completed];
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
}();

// END FLYWEIGHT


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

var tasks = new TaskCollection();

var projects = ['none', 'courses', 'training', 'project'];
var priorities = [1, 2, 3, 4, 5];
var users = ['Jon', 'Erica', 'Amanda', 'Nathan'];
var completed = [true, false];

var initialMemory = process.memoryUsage().heapUsed;

// My additional logic

  function randomizeNumber (value) {
    return Math.floor((Math.random() * value));
  };

// For Loop

for (var i = 0; i < 1000000; i++) {
  tasks.add({
    name: `Task ${i}`,
    priority: priorities[randomizeNumber(5)],
    project: projects[randomizeNumber(4)],
    user: users[randomizeNumber(4)],
    completed: completed[randomizeNumber(2)]
  })
}

// Log Impact

var afterMemory = process.memoryUsage().heapUsed;

afterVSInitialinMB = (afterMemory - initialMemory) / 1000000;

console.log(`Used Memory: ${afterVSInitialinMB}`);

console.log(`Tasks: ${tasks.getCount()}`);
console.log(`Flyweights: ${FlyweightFactory.getCount()}`);

