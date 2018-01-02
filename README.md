# Jobbatical
Jobbatical facilitates hiring by allowing users (employers) post jobs on the app and users (talent) can explore available jobs.


## Feature List
* Displays featured job listings on the app
* Displays all job listings on the app
* View details of a job listing
* Add a new job to the app
* Signup, Login and Logout of the app.


## Getting Started
Jobbatical is hosted on heroku and can be accessed here:
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
 - [Node.js](https://nodejs.org/en/download/)
 - [MongoDb](https://www.mongodb.com/download-center#community)
 - [Yarn](https://yarnpkg.com/en/docs/install)
     
## Setup
#### Local Copy
To create a local copy, run the following in your terminal:
```bash
git clone https://github.com/bears-team-10/jobbatical-clone.git
```
Then change into the local directory, run the following in your terminal:
```bash
cd jobbatical-clone
```

#### Install Node.js and Yarn
If you don't have Node.js installed, please go ahead and grab it [here](https://nodejs.org/).

Yarn is a package manager for Node.js and can be installed from [here](https://yarnpkg.com/en/docs/install).

To confirm that you have Node.js installed, run the following in your terminal:
```bash
node -v
```
You should get something like `v8.9.1`.

To confirm that you have Yarn installed, run the following in your terminal:
```bash
yarn -v
```
You should get something like `1.3.2`.

#### Setup Database and .env file
You can setup a database on [mlab](https://mlab.com/). You should also create a `.env` file using `.env.sample` as a prototype.

#### Install Node.js Modules
To install all dependencies, run the following in your terminal:
```bash
yarn
```


## Development
To kickstart the application, run the following in your terminal:
```bash
node server.js
```

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
* [Chingu](https://chingu-cohorts.github.io/chingu-directory/)
* Red Pandas
* [FreeCodeCamp](https://www.freecodecamp.org/)
* Developer Community
* Family
* Friends
