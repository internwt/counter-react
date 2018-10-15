"use strict";

console.log("every thing id fine");

var count = 0;
var addone = function addone() {
  count++;
  recounterapp();
};
var minusone = function minusone() {
  count--;
  recounterapp();
};

var reset = function reset() {
  count = 0;

  recounterapp();
};
var objecty = document.getElementById("one");

var recounterapp = function recounterapp() {
  var templatetwo = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "count: ",
      count
    ),
    React.createElement(
      "button",
      { onClick: addone },
      "+1"
    ),
    React.createElement(
      "button",
      { onClick: minusone },
      "-1"
    ),
    React.createElement(
      "button",
      { onClick: reset },
      "Reset"
    )
  );

  ReactDOM.render(templatetwo, objecty);
};

recounterapp();
