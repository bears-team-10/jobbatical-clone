# Jobbatical Clone
Jobbatical Clone facilitates hiring by allowing users (employers) post jobs on the app and users (talent) can explore available jobs.

Jobbatical Clone is a reverse-engineer of the functionality of https://jobbatical.com/


## Feature List
* Displays featured job listings on the app
* Displays all job listings on the app
* View details of a job listing
* Add a new job to the app
* Signup, Login and Logout of the app.


## Getting Started
Jobbatical Clone is hosted on heroku and can be accessed here:
 - [Production](https://jobbatical.herokuapp.com/)

To use backend API's alone, please use the following instructions. 
  - Download and install [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en)
  - Make sure you have working internet
  - Use the Service API's below with Postman (See how in: Using Postman, below)

### Service API's:
  - [Signup](https://jobbatical.herokuapp.com/signup): Uses firstName, email and password
  - [Login](https://jobbatical.herokuapp.com/login): Uses email and password
  - [Post Job](https://jobbatical.herokuapp.com/job-form): Takes in the job details, user must be logged in
  - [Search Job](https://jobbatical.herokuapp.com/explore): Uses job title


### Using Postman:
 - Install [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en)
 - In the Postman window, populate the url window with the API endpoint you want to take for a test run.
 - For the Service API's listed above, click on the dropdown by the right of the url window, change from get to post
 - Click on the body tab, select the radio button: x-www-form-urlencoded
 - Populate the request body with the appropriate key value pairs: 
      - Signup : keys - firstName, email, password
      - Login: keys - email, password
      - Post Job: keys - jobTitle, companyName, location, salary, date, companyDescription, jobDescription, responsibilities, requirements
      - Search Job: keys - jobTitle
- Click on Send

## Prerequisites
 These are what you need installed on your computer to use the application:

 - Web Browser (Chrome, or Mozilla, or Safari, or Opera, or Microsoft Edge )

 #### For Developers:
 - [Git](https://git-for-windows.github.io/)
 - [Node.js](https://nodejs.org/en/download/)
 - [MonogDb](https://www.mongodb.com/download-center#community)
 - ``` yarn ``` will install all dependencies
     


## Built With

- [Git](https://git-scm.com/) - Version Control
- [Node.js](https://nodejs.org/) - JS Runtime Environment
- [Express](https://expressjs.com/en/starter/installing.html) - Web Framework
- [EJS](http://ejs.co/) - Templating Engine
- [mLab](https://mlab.com/) - Database 
- [Heroku](https://www.heroku.com) - Hosting and Continuous Deployment
- [VS Code](https://code.visualstudio.com/) - Code Editor
- [Chrome](https://www.google.com/chrome/browser/desktop/index.html) - Browser


## Authors

* [Bolu Ajibawo](https://github.com/ajibs)
* [Lidiya Nikolova](https://github.com/l-emi)
* [Floo None](https://github.com/floonone)


## Acknowledgments
* [Chingu Cohorts](https://chingu-cohorts.github.io/chingu-directory/)
* Red Pandas
* [FreeCodeCamp](https://www.freecodecamp.org/)
* Developer Community
* Family
* Friends
