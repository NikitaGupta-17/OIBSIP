function convert() {
    const tempInput = document.getElementById("temp").value;
    const unitInput = document.getElementById("unit").value;
    let result;
  
    if (unitInput === "celsius") {
      result = (tempInput * 9/5) + 32;
      result = result.toFixed(2) + "°F";
    } else {
      result = (tempInput - 32) * 5/9;
      result = result.toFixed(2) + "°C";
    }
  
    document.getElementById("result").innerHTML = result;
  }
  