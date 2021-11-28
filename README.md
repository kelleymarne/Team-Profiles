# Team Profile Generator
> Lets create a webpage to neatly store your teams information!
---

### Table of Contents
- [Description](#description)
- [Introduction](#introduction)
- [Technologies](#technologies)
- [Resources](#resources)

---

## Description

This command line driven applicaiton will allow you to input the information for your team including
 - Name
 - Email
 - Employee ID
 - Their Role within your company
 - Depending on that role you will either see
 - GitHub information (Engineers)
 - Office Numbers (Managers)
 - School (Interns)

 It will then output it onto a nice HTML file that is easily viewable and accesible.

## Introduction 

First - 
We will have a main page that will help us to run the application with the prompted questions
> index.js

We will also have a JS page for our over all Parent class of Employee, as well has the children classes as well of Intern, Manager, and Engineer
> Employee.js Intern.js Manager.js Engineer.js

This application also requires to have test suites for each of those previous pages.
> Employee.test.js Intern.test.js Manager.test.js Engineer.test.js

And lastly this will output an html into our output folder. 
> ./output/finalHtml.html

___
### Instructions on Use

- First we will want to run our npm install to download the needed dependancies
> npm i / install

- Second to run the application 
> npm start

---

## Technologies

- Node
- Inquirer
- Jest testing packages


---



## Resources 


<a href="https://github.com/kelleymarne/Team-Profiles">GitHub Repo
</a>
- https://github.com/kelleymarne/Team-Profiles



