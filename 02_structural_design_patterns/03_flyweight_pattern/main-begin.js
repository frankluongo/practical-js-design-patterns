/*
  Flyweights allow you to conserve Memory
  Only useful when you have A LOT of objects
*/

var TaskCollection = require('./dependencies/TaskCollection');
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

  var randomPriority = priorities[randomizeNumber(5)];
  var randomProject = projects[randomizeNumber(4)];
  var randomUser = users[randomizeNumber(4)];
  var randomComplete = completed[randomizeNumber(2)];

// For Loop

for (var i = 0; i < 10000; i++) {
  tasks.add({
    name: `Task ${i}`,
    priority: randomPriority,
    project: randomProject,
    user: randomUser,
    completed: randomComplete
  })
}

// Log Impact

var afterMemory = process.memoryUsage().heapUsed;

afterVSInitialinMB = (afterMemory - initialMemory) / 1000000;

console.log(`Used Memory: ${afterVSInitialinMB}`);

console.log(`Tasks: ${tasks.getCount()}`);

