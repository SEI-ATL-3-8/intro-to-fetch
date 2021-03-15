# Intro to Fetch

## Goals
1. Grab data from the web
1. Understand and work with promises
1. Add the data we grabbed to the DOM


## Grabbing data from the web
In our javascript files, we can run the built-in `fetch` method to grab data from any URL. Today we'll be working with the url that's demonstrated below:
```js
fetch("https://randomuser.me/api?results=5")
```
Note that you can visit this url in your web browser and preview what we should expect to get back! This is also a good time to learn about Postman. You don't necessarily have to use Postman for this exercise, but soon it will be mandatory.

If we assign the result of that fetch to a variable and `console.log` it, we'll see a _Promise_. Javascript uses promises any time we write code that may take a long or unspecified amount of time to run. In our case, the web request could take a long time (~100 ms) to run.

Think of the promise as a wrapper object that encases the data we asked for. We can unwrap the data like so:
```js
fetch("https://randomuser.me/api?results=5").then((response) => {
  console.log(response)
})
```
We are using `.then` to attach a callback function to this promise, and this callback will wait to run until the promise has completed. But the thing that gets logged doesn't contain our data either! The Response object is also a Promise; in other words, we have a wrapper-inside-a-wrapper situation. Here is how to peel back this second (and final) wrapper:
```js
fetch("https://randomuser.me/api?results=5").then((response) => {
  response.json().then((data) => {
    console.log(data)
  })
})
```
Now we have a JSON object that contains our data. (JSON stands for Javascript Object Notation. To us, with javascript as our first language, it has very little meaning. But the server that we requested the data from might be written in Java, or Python, etc. So they must translate their data into JSON so we the javascripters can understand it.)

Note that our callback functions in the `.then`s really do take some time to run: Put a log statement before the fetch and after it. What order do the log statements fire in?

## Mini-lab
We want our fetch to happen not on page load, but when we click a button. Create that button, attach an event listener to it, and perform the fetch when the button is clicked. In the event listener, please write the fetch out by hand instead of copy-pasting it!

## Adding content to the DOM
Logging the data we fetched is just a baby step towards our bigger goal of putting that data into the DOM. Adding to the DOM is a 3-step process:
1. Create a new element using `document.createElement('whichever-element')`, and assign it to a variable. This element isn't in the DOM yet, it's floating in limbo.
1. Add any attributes you want to this in-limbo element: `innerText`, classes, maybe an `src` if it's an image, maybe an `href` it's an `<a>` tag, etc.
1. Actually put it into the DOM: Identify the parent that you want it to live inside, then `querySelector` for that parent, then `theParent.append(yourNewDomElement)`

Let's use this process to put the names of our users into the `#users` div together!

## Mini-lab
For each user, put their email and their picture into the DOM after their username.

## Stretch Goals
1. Add an `<input>` tag to the page that lets us specify how many results we'd like to see. When the button is clicked, get the value by `querySelector`ing for the input tag, then getting its `.value`. Change the `results=5` parameter in our request URL to have the value from the input tag.
1. We can put new DOM elements inside existing ones, but so far we're putting them all in on the same level, with no nesting. Use multiple iterations of 3-step DOM addition process to create a properly nested DOM. This allows us to visually separate our user divs using styling, which you should do!
1. Extract all of our user creation code into a function. Then, call this function in our `.then` handler. Modify our site so that it displays the users on page load, and every click of the button shows us a new set of 5 random users.
