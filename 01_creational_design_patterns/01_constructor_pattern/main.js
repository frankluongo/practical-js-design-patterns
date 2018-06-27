// Example: Constructor Pattern

  function ObjectName(param1, param2) {
    this.param1 = param1;
    this.param2 = param2;

    this.toString = function () {
      return this.param1 + ' ' + this.param2;
    }
  }
