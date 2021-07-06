# Mr.RobogersProject
## Epicodus Week 5 Code Review (Project 3)
### Creator:  Daisy Collins / git-daisy 

### Tools Used:
* JavaScript
* jQuery
* Html/CSS
* jsFiddle & devtools - debugging/testing
* VScode
* Github & Terminal 
* Bootstrap 

### Program Description 
<p> Mr.Robogers wierd number converter accepts inputed values from a user, transforms 1's, 2's and 3's and spits out a new string of values! 
This project was definitley the most difficult project I have overcome yet, I re-wrote my branching statements multiple times, confused the heck out of myself with improper syntax and attempting to use REGEX. Initially the beepBoop function was going to compare values using .indexOf, but I was having a hard time getting my values to return, so I decided to ditch that method, and used .includes instead. Now the program works great! I struggled to consistently use TDD but see the value in this type of development and hope to push myself to utilize it more throughout my programming.<p>


### Known Bugs: 
    None
  
### Specs
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
  
 ## License :
  Copyright [2021] [ Daisy Collins ]
 Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

## To Clone This Repository Locally: 
* In my Github account, navigate to the main page of the 'Programming-Portfolio' repository. 
* Above the list of files, click the green box that says "Code" - this will copy the URL to your clipboard.
* To clone the repository using HTTPS, under "Clone with HTTPS", click the small clipboard icon. Use the same process for cloning with SSH key or Github CLI.
* Open gitbash and change the current working directory to the location where you want the cloned directory.
* Type "git clone" and then paste the URL you copied to the clipboard earlier.
* Press "enter" to create your local clone.
