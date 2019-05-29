## REMINDLY

The birthday reminder app will help you never forget a loved one's special day again.


<img src="https://img.icons8.com/cotton/2x/twitter.png" width="20">

#Remindly. Don't be that friend!

https://remindly-app.herokuapp.com/

## TEAM: 

@JAMESLEVINE
@SEABASSHOANG
@BAALWAAN

### PROTOTYPE

![](https://i.imgur.com/Om3javg.png)
![](https://i.imgur.com/NwWGGhm.png)


## 🖥 Remindly built with 

* Node.js
* Express
* Handlebars
* Jest
* Postgresql
* Heroku
* Heroku Scheduler
* Travis
* Twilio


## 👨🏻‍💻 Set project up locally

1. To clone repo type following command into your terminal
       
```git clone https://github.com/FAC-Sixteen/Remindly.git```

2. Then to install dependencies 

```npm i```

3. Run script below to start server on localhost 3000

```npm run devGo```

4. Visit http://localhost:3000 in browser


For server tests please run:  ```npm test ```


## Problem we like to solve

Our busy lifestyles means birthdays/events are so hard to remember. People not using Facebook as much and with Facebook having stopped everyone using their API to see birthdays etc makes it even more difficult to remember birthdays/events.

## Solution

An app where you can log events and receive automated notifications regarding upcoming events.

## User Journey

![](https://media.giphy.com/media/fwTIWlnqP9tja/giphy.gif)


- As a user, I would like to make an account
- As a user, I would want to easily be able to navigate through app easily
- As a user user, I would like to add a contact to my events list
- As a user, I would like to have the option to select type of event I would like to add to a contact
- As a user, I would like to select the date of an event for a contact
- As a user, I would like to assign a contact to a specific group (family, friends, etc)
- As a user, I would like to see a list of all upcoming events in my event list in order
- As a user, I would like to view all my contacts in a contacts page
- As a user, I would like to receive text notification for today’s events
- As a user I would like to securely log out


## User Stories

- [x] As a user I would like to recieve notifications
    - [x] notifications on the day
    - [ ] custom time notifications  

- [ ] As a user I would like to see all my upcoming events in one place 
    - [x] As a user I would like to sort events by date.
    - [ ] As a user I would like to filter events by type.
    - [ ] As a user I would like to filter events by group.
    - [x] As a user I would like to show a list of upcoming events automatically sorted by date.
    - [ ] As a user I would like to see information and icons on each upcoming event.

- [ ] As a user I would like to be able to add a contact
    - [ ] I want to add my details.
    - [x] I want to give details about event.
    - [ ] I want to set reminders about individual events.
    - [x] I want to add events.
    - [ ] I want to create events.
    - [x] I want to select group.
    - [ ] I want to create groups.
    - [x] I want to save contact in contact list.
    - [ ] I want to bulk add contacts from Facebook.

- [ ] As a user I would like to be able to view my calendar
    - [ ] I want to see a calendar.
    - [ ] I want to see events in the calendar view.
    - [ ] I want to select dates in calendar and see more information about event.
- [ ] As a user I would like to be able to view my settings
    - [ ] I want to have a way to deactivate my account.
    - [x] I want to have a way to log out.
    - [ ] I want to have a way to set notifications in bulk for Email.
    - [ ] I want to have a way to set notifications in bulk for SMS.
    - [ ] I want to have a way to set notifications in bulk for Push.

- [ ] As a user I would like to be able to view my contacts
    - [x] I want to have a way see all my contacts in a list.
    - [ ] I want to see profile photos for each of my contacts.
    - [ ] I want to have a way to select individual contacts for more information.
    - [ ] I want to have a way to filter my contacts by group.
    - [ ] I want to have a way to sort my contacts alphatically.
    - [ ] I want a way to delete a contact.

- [ ] As a user I would like to be able to view more information on each contact
    - [ ] I want to have a way see my contacts basic information.
    - [ ] I want to able to edit the contact information.
    - [x] I want to see the groups my contact is a part of.
    - [ ] I want to see the events coming up for my contact.
    - [ ] I want to have a way to filter my contacts by group.
    - [ ] I want to have a way to sort my contacts alphatically.

**Stretch User Stories:**


- [ ] As a user I would like to assign contacts a group
    - [ ] I would like to create custom groups 
    - [ ] I would like to filter search groups on events page


## 🏃‍♀️ 1st Sprint
### DAY 1️⃣

- [x] - Create user stories
- [x] - Create user journey
- [x] - Planned mvp user journey 
- [x] -Set up file architecture


### DAY 2️⃣ 
- [x] - Deploying to heroku
- [x] - Setting up travis CI
- [x] - TDD using jest
- [x] - Supertest with jest
- [x] - Serve homeroute using handlebars
- [x] - Split partials individually (mobile navbar, desktop navbar, event list)

### Challenges we faced

- setting up travis properly requires a test script for travis to execute

"test": "jest" vs "test": "jest --watch all"

![](https://media2.giphy.com/media/xT1XH20RPY6rBmMBLa/giphy.gif?cid=790b76115cdb40ea4f72764c2e1c8c89&rid=giphy.gif)

Things we Discovered:

- caching our dependencies in .travis.yml file >>> cache: npm
 this sped up travis' build process
 
 ![](https://media2.giphy.com/media/3oz8xSSfeH1U6l4DTy/giphy.gif?cid=790b76115cdb402568547a3049b5e1de&rid=giphy.gif)

### DAY 3️⃣

Todos

- [x] - Draw db schemas
- [x] - Start building database with dummy data 
- [x] - Create db queries to get info and populate html
- [x] - Test db


Challenges: 

- Sql's strict syntax
- Creating db schemas (made it too complicated)


### DAY  4️⃣

Todos

- [x] - Create helpers show event dates
- [x] - Sort event_date
- [x] - Create add contacts page
- [x] - Post query to database to store contact / event
- [x] - Get query for groups list
- [x] - Get query for event lists
- [x] - Create db queries to get info and populate html
- [ ] - Twilio
- [ ] - Sass  


Challenges

- Using helpers to feed day and month into our handlebars
- Travis 


### DAY 5️⃣

Todos

- [x] - Sort event_date
- [x] - Create add contacts page
- [x] - Queries to db for contact
- [x] - Twilio
- [ ] - Sass

Issues

- TRAVIS

Real photo of james figuring out the sort date function 🎉

![james](https://i.imgur.com/jRzozoF.jpg)
(Thanks Sam for helping out toooo)

## 🏃‍♀️ 2nd Sprint

### DAY 7️⃣

Todos
- [x] - recap on what we have done in wk1 sprint
- [x] - Heroku scheduler for text reminder
- [x] - Service Workers / caching
- [x] - hash passwords
- [x] - add JWTs and cookies for auth
- [ ] - SASS


### DAY 8️⃣ 

Todos:

- [x] Logout functionality with logout button
- [ ] When no events or contacts added, display a message (perhaps with a tag linking to add contact).
- [ ] Create add event button - Sylvia 
    - [ ] route
    - [ ] DB queries to insert new event in event table
    - [x] Add contact page adding groups


- [x] - Validation - burhan
    - [x] Front end validation
        - [x] - Regex for front-end forms
        - [x] - Feedback for forms (password doesn't match etc.)
    - [x] back end validation
        - [x] - Back-end validation before submitting the database.


- [ ] CSS
    - [x] Mobile nav bar - James
    - [ ] Add Contact page - Sylvia
    
    - [ ] Login/Register Boxes - James
    - [x] mobile nav bar needs to be removed on login/register pages - James
- [ ] Error pages
    - [x] 404 error pages handled - James
    - [x] 500 error pages handled - James
    - [ ] Serve file for 404 error pages
    - [ ] Serve file for 500 error pages

- [ ] Personalisation
    - [ ] Add first name into SQL database column in events table and then can personalise website.

Bugs:

- [x] - Fix calendar icon endpoint
- [x] - Error handle when user hasn't logged in (when cookie doesn't exist code tries to split)

### Other problems we had
* last minute commit issue (learnt how to back track on commits)
* passport.js (we may need more time to play with it to fully understand it)
* front end validation through dom.js to check passowrds (decided to just send it to the back and check it there)
* time constraints to reach stretch goals (such as filtering events)


### Things Learnt

- Estimation
- MVP (core app functionality add user, event list, contact page etc)
- Service Workers

