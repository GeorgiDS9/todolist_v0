const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

// we are requiring the date module we created ourselves separately, in date.js
// but date.js is local (not initialised with npm), so we need to add __dirname + ...
const date = require(__dirname + "/date.js") 

// console.log(date); //equal to whatever we exported into this module

const app = express();

const items = ["Buy Food", "Clean House", "Code"]; //we can use "const" and push items into the array.

const workItems = [];

app.set("view engine", "ejs"); // pleace it just below, right after declaring express.

// we need this code in order to parse through the body of the POST request
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

// Create first route (home) of our server:


app.get("/", function (req, res) {

    const day = date.getDate();
    
    // After our logic, we are sending the below response.
    // We are creating a response by rendering our file list.ejs in a "views" folder and 
    // are passing a js object which has a key value pair in {} which has to match the marker in list.ejs

    res.render("list", {listTitle: day, newListItems: items}); // we are rendering both variables declared in .ejs on the same line of code, otherwise our server crashes

});

app.post("/", function (req, res) {

    const item = req.body.newItem;

    if (req.body.list === "work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }

});

app.get("/work", function (req, res) {
    res.render("list", {listTitle: "Work List", newListItems: workItems});
});


app.listen(3000, function () {
    console.log("Server is running on port 3000");
});


    // var currentDay = today.getDay();
    // var day = "";

    // if (currentDay === 6 || currentDay === 0) { //if today is Saturday (6 position in array) or Sunday (0)
    // day = "Weekend";
    // } else {
    //     day = "Weekday";
    // };

    // switch (currentDay) {
    //     case 0:
    //         day = "Sunday";
    //         break;
    //     case 1:
    //         day = "Monday";
    //         break;
    //     case 2:
    //         day = "Tuesday";
    //         break;
    //     case 3:
    //         day = "Wednesday";
    //         break;
    //     case 4:
    //         day = "Thursday";
    //         break;
    //     case 5:
    //         day = "Friday";
    //         break;
    //     case 6:
    //         day = "Saturday";
    //         break;
    //     default:
    //         console.log("Error: current day is equal to: " + currentDay);

    // }


