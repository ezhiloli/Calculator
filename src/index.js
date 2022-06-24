import "./styles.css";

// document.getElementById("app").innerHTML = ``;
var button = document.getElementsByClassName("button");

var display = document.getElementById("dis");

display.innerText = "";

var operator1 = null;

var operator2 = null;

var operand = null;

for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    var value = this.getAttribute("data-value");

    var val = "";

    if (value == "+") {
      display.innerText += value;
      operand = "+";
      operator1 = parseInt(display.innerText);
      display.innerText = "";
    } else if (value == "-") {
      display.innerText += value;
      operand = "-";
      if (!operator1 != null) {
        operator1 = parseInt(display.textContent);
        display.innerText = "";
      }
    } else if (value == "*") {
      display.innerText += value;
      operand = "*";
      operator1 = parseInt(display.textContent);
      display.innerText = "";
    } else if (value == "/") {
      display.innerText += value;
      operand = "/";
      operator1 = parseInt(display.textContent);
      display.innerText = "";
    } else if (value == "%") {
      display.innerText += value;
      operand = "%";
      operator1 = parseInt(display.textContent);
      display.innerText = "";
    } else if (value == "AC") {
      operator1 = null;
      operator2 = null;
      operand = null;
      display.innerText = "";
    } else if (value == "+/-") {
      operator1 = parseInt(display.innerText);
      // display.innerText="Hi";
      if (operator1 <= 0) {
        operator1 = -(-operator1);
        display.innerText = operand;
      } else if (operator1 >= 0) {
        operator1 = -operator1;
        display.innerText = operator1;
      }
    } else if (value == "=") {
      // display.innerText+=value;
      operator2 = parseInt(display.textContent);

      var val = "";
      val += operator1;

      val += operand;

      val += operator2;

      display.innerText = val;

      if (operand == "+") {
        display.innerText = operator1 + operator2;
        // display.innerText=operator1+operator2;
      } else if (operand == "-") {
        display.innerText = operator1 - operator2;
        // display.innerText=operator1-operator2;
      } else if (operand == "*") {
        display.innerText = operator1 * operator2;
        // display.innerText=operator1operator2;
      } else if (operand == "%") {
        display.innerText = operator1 % operator2;
      } else if (operand == "/") {
        display.innerText = operator1 / operator2;
        // display.innerText=operator1+operator2;
      }
    } else {
      display.innerText += value;
    }
  });
}
