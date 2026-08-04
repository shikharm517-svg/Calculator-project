// Function to add value to the display
function appendValue(val) {
  document.getElementById("result").value += val;
}

// Function to clear the display
function clearResult() {
  document.getElementById("result").value = "";
}

// Function to calculate the expression
function calculate() {
  let res = document.getElementById("result").value;
  try {
    // eval() evaluates the string expression
    document.getElementById("result").value = eval(res);
  } catch {
    // If error occurs, show "Error"
    document.getElementById("result").value = "Error";
  }
}
