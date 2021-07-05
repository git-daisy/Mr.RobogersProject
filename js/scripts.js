// UI Logic 
let returnString = ""

function beepBoop(input) {
  returnString = "" 
  for (i = 0; i <= input; i++) {
    if ((i + '').indexOf('3') > -1) {
      returnString += "Won't you be my neighbor?"
    } else if ((i + '').indexOf('2') > -1) {
      returnString += "Boop"
    } else if ((i + '').indexOf('1') > -1) {
      returnString += "Beep"
    }
  }
}
// Business Logic 

$(document).ready(function() {
  $("#robogers").submit.(function(event) {
    const input = parseInt($("input#number").val());
    console.log(beepBoop(input));
    let returnString = beepBoop(input);
    event.preventDefault();
    $("#output").show();
  });
})
