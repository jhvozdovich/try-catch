$(document).ready(function() {
  $("#submittedNumber").click(function() {
    const inputNumber = parseInt($("#number").val());
    $("#number").val("");
    
    function checkNumber(num) {
      if (isNaN(num) || num < 0) {
        return new Error("Not a valid number!");
      } else {
        return true;
      }
    }

    try {
      const isNumberValid = checkNumber(inputNumber);
      if (isNumberValid instanceof Error) {
        console.error(isNumberValid.message);
        throw RangeError("Not a valid number!");
      } else {
        console.log("Try was successful, so no need to catch!");
        $("#displayNumber").text("This number is valid. You may continue.");
      }
    } catch(error) {
      console.error(`Red alert! We have an error: ${error.message}`)
    }
  })
})