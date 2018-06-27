var repo = function () {
  var called = 0;

  var save = function (task) {
    called++;
    console.log(`Saving ${task} \n Called ${called} times`);
  }
  console.log('newing up task repo');
  return {
    save: save
  }
}

module.exports = repo(); // adding () creates a singleton of this repository
// module.exports = new repo(); -- Another way to do this
