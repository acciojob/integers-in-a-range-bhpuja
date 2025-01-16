// write your code here
function generateRange() {
  const start = parseInt(document.getElementById("start").value);
  const end = parseInt(document.getElementById("end").value);

  // Check if both inputs are valid integers
  if (isNaN(start) || isNaN(end)) {
    alert("Please enter valid integer values.");
    return;
  }

  const rangeArray = range(start, end);

  // Display the result
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `Range: [${rangeArray.join(", ")}]`;
}

function range(start, end) {
  const result = [];

  // Generate the range of integers from start to end (inclusive)
  for (let i = start; i <= end; i++) {
    result.push(i);
  }

  return result;
}

