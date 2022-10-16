(function () {
  'use strict';

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var Person = function () {
      function Person(name, age) {
          classCallCheck(this, Person);

          this.name = name;
          this.age = age;
      }

      createClass(Person, [{
          key: "say",
          value: function say() {
              console.log(this.name);
          }
      }]);
      return Person;
  }();

  var version = "1.0.0";

  var xinxin = new Person('xinxn', 20);
  console.log('hello rollup');
  console.log(version);
  console.log(xinxin);

})();
