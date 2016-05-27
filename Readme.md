
### CSC204/2604
## Assignment 3 - Javascript Programming

Due: June 1st, 10pm

Zip the folder before sending to Shobhit.

# Part 0 (0 pts)

For science: after **fully** reading this assignment estimate how long you think it will take to complete. When you're done the assignment, and after June 1st 10pm, post your estimate and the actual time it took on basecamp.

# Part 1 - Interactive Questionnaire (4 pts)

On index-part1.html add the following input fields:
First Name (text)
Last Name (text)
Year of birth (number, 4 digits)
Month of birth (number, 1 or 2 digits)
Day of birth (number, 1 or 2 digits)

When the user clicks the button “process” your code will display their full name, followed by the generation they are from (e.g. generation X or Y). For this assignment generation X is anyone born between 1961 - 1983 and generation Y  if they were born at or after 1984. Here are some sample inputs:

| Input  | Output  |
|---|---|
| Liz<br>Smith<br>1975<br>5<br>17 | Liz Smith is from generation X, since they were born in 1975. |
| Tom<br>Maven<br>1995<br>11<br>5 | Tom Maven is from generation Y, since they were born in 1995. |
| Maurice<br>Richard<br>1921<br>8<br>4 | Maurice Richard is neither from generation X or Y. |


## Tips

* Text input box: `<input type="text" />`
* Number input box: `<input type="number" />`
* Add an id to each of your input boxes: `<input id="first-name" type="text" />`
* In JavaScript to access the value in the input box do the following: `document.getElementById('first-name').value` . That first gets the element with the id `"first-name"` then gets its value.
* Put your code into the function: `processForm(){ YOUR CODE }`
* To display the results on the page call `displayResults(STRING_WITH_RESULTS)`
* Add your input elements in the `<body>` of index-part1.html.
* Add your code to part1.js


# Part 2: Drawing boxes (`<div>`'s) (6 pts)


Using JavaScript, in part2.js, complete function `start()` so that it creates 20 `<div>`’s by repeatedly calling function `createDiv(num)` (e.g. `var div = createDiv(i)`). num should be a number from 0–19, inclusive. `createDiv(num)` will create a `<div>`, add it to the page, and return the new `<div>`. Based on rules below, your code should update the position of the `<div>` on the page.

## Rules for placement:
* If the `<div>` is green it should be placed randomly on the left side of the webpage. (2pts)
* If the `<div>` is blue it should be placed randomly on the right side of the webpage. (2pts)
* If the `<div>` is black it should be placed on the center of the page, but its height should be random. (2pts)

## Tips
* **Don’t try and solve this whole problem at once. Get the loop working first, then the first rule, the second and finally the third**.
* `window.innerWidth` gives you the width of the webpage 
* `window.innerHeight` gives you the height of the webpage
* To get the `<div>`’s color: `div.style.backgroundColor`
* `Math.random()` will return a random number between 0 and 1 (e.g. 0.567, 0.135).
* Webpages use X and Y coordinates to position elements on the page. X = 0 and Y = 0 (e.g. (0, 0)) corresponds to the top left of the page.
* If you multiply `Math.random()` with `window.innerHeight` you will have a random Y coordinate.
* To change the `<div>`’s position from the top of the screen do: `div.style.top = NUM + 'px'`.
  * If it’s not working be sure to include `+ 'px'`;
  * `div.style.top = 0 + 'px'`. Is the left edge of the page.
  * `div.style.top = 105 + 'px'` is 105 pixes left of left edge of the page.
* To change the `<div>`'s position from the left of the screen do: `div.style.left = NUM + 'px'`
  * `div.style.top = 0  + 'px'` is the top of the page.
* Create two variables that each hold a different random number, one for your random Y and one for you random X.
* You will need to use a for loop. See Mozilla’s documentation on the loop: [https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for). Marks will be deducted if you *don't* use a for loop.


