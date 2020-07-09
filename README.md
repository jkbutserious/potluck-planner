# Potluck Planner
#### _Team Week Project for Epicodus, 7.9.2020_
#### By _**Kyle Hubbard, Hannah Beinstein, Jeff Kim, and Tyson Lackey**_
## Description
Summer is here! Don't let the daunting task of organization stop you from enjoying fun in the sun with your friends and neighbors! Potluck Planner is here to help you organize your community picnic, barbecue, or good old-fashioned potluck dinner.

This program will allow users to:
* Create and host an event
* Sign up to attend an event
* Post a recipe for a dish they can make
* Sign up to bring a dish to an event
* Share an event on Facebook

## Specifications

**Behavior** _The program should save a user's information into a user object_
* Input: Name: Kyle, Recipes: []
* Output: {Name: Kyle, Recipes: []}
* Complete: Green, True

**Behavior** _The program should save a new event into a new event object_
* Input: Name: My Birthday, Location: Portland, OR, DateTime: 00/00/00 00:00, Description: lorem ipsum, CreatedBy: Mike Tyson, Attendees: Mike Tyson
* Output: {Name: My Birthday, Location: Portland, OR, Date: 00/00/00, Description: lorem ipsum, CreatedBy: Mike Tyson, Attendees: Mike Tyson}
* Complete: Green, True

**Behavior** _The program should save user objects into a profile database object_
* Input: User1, User2, User3
* Output: {Users: [User1, User2, User3]}
* Complete: Green, True

**Behavior** _The program should save event objects into an event database object_
* Input: event1, event2, event3
* Output: [event1, event2, event3]
* Complete: Green, True

**Behavior** _The program should save a recipe to a recipe object_
* Input: Name: Cherry Pie, Description: Lorem Ipsum, Type: Lorem Ipsum
* Output: {Name: Cherry Pie, Description: Lorem Ipsum, Type: Lorem Ipsum}
* Complete: Green, True

**Behavior** _User Object Method to add recipe objects to the object_
* Input: CherryPie
* Output: {Name: Kyle, Recipes: [CherryPie]}
* Complete: Green, True

**Behavior** _Event Object Method to add User objects to the object_
* Input: User1
* Output: {Attendees: [User1]}
* Complete: Green, True

**Behavior** _Event Database Object Method to add event objects to the object_
* Input: Event1
* Output: {Events: [Event1]}
* Complete: Green, True

**Behavior** _Deletes user profile object_
* Input:
* Output:
* Complete: Red, False

**Behavior** _Deletes event objects_
* Input:
* Output:
* Complete: Red, False

**Behavior** _Deletes recipe object_
* Input:
* Output:
* Complete: Red, False

## Setup/Installation Requirements

#### Requirements
* _GitBash or a preferred computer terminal_
* _node.js (visit: https://nodejs.org/en/ for instructions on downloading)
* _Web browser_
* _Optional: code editor - suggested VSCode-_

#### Install
1.  Navigate to my github repository at: https://github.com/potluck-planner_
2.  Click the **Code** button and copy the ".git" link
3.  On your homescreen open up your preferred terminal - GitBash recommended - and clone the file to your desktop. If you are using GitBash the command is :

  ```$ git clone https://github.com/hubba180/potluck-planner.git```

4.  Navigate your terminal into the root directory of the project and execute the command ```$ npm install```
5.  After installation is finished, execute the command ```$ npm run build```
6.  Use the command ```$ npm run start``` to view the program

## Known Bugs
_No known bugs_

## Support and contact details
_Kyle Hubbard:_
kyle.james.hubbard@gmail.com

_Jeff Kim:_
kim2jy@hotmail.com

_Tyson Lackey:_
lackeyt90@gmail.com

## Technologies Used
* HTML
* CSS
* Bootstrap version 4.5.0
* Javascript
* JQuery version 3.5.1
* Git
* node.js/npm

### License
Copyright © 2020 Kyle Hubbard, Hannah Beinstein, Jeffrey Kim, & Tyson Lackey

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.