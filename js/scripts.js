
const beep = "Beep!!"
const boop = "Boop!!"
const wybmn = "Won't you be my neighbor??"

const beepBoop = function(input) {
  let numbers = [];
  for (let i = 0; i <= input; i++) {
    numbers.push(i.toString());
  };

const beepBoops = numbers.map(function(number) {
  if (number.includes("3")) {
    return number = wybmn;
  } else if (number.includes("2")) {
    return number = boop; 
  } else if (number.includes("1")) {
    return number = beep;
  } else {
  return number; 
  };
});
  return beepBoops;
};


$(document).ready(function() {
  $("form#number").submit(function(event) {
    event.preventDefault();
    const input = parseInt($("input#input").val());
    const output = beepBoop(input);
    $("#result").text(output);
    $(".output").show();
  });
}); 
