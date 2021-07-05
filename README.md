# Mr.RobogersProject

Describe: beepBoop()

Test: "It should return with a 0 if the number 0 is inputted"
Expect: (beepBoop(0).toEqual(0); 

Test: "It should return all numbers coming before the number in which the user inputs" 
Expect: (beepBoop(5).toEqual(0,1,2,3,4,5))

Test: "It should replace all numbers containing '3' with "Won't you be my neighbor?"
Expect: (beepBoop(5).toEqual("0","1","2","Won't you be my neighbor?","4","5"))

Test: " It should replace all numbers containing 2 with "Boop"
Expect: (beepBoop(5).toEqual("0","1","Boop","Won't you be my neighbor?","4","5"))

Test: "It should replace all numbers containing 1 with "Beep"
Expect: (beepBoop(5).toEqual("0","Beep","Boop","Won't you be my neighbor?"))