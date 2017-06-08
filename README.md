[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Links:

Client Repo: https://github.com/sjruby/book-club-manager-api
Deployed Client: https://sjruby.github.io/book-club-client/
API Repo: https://github.com/sjruby/book-club-manager-api
Deployed API:  https://salty-citadel-91716.herokuapp.com

# Bookclub Manager
The purpose of this app is to track all the book-clubs that you are planing on hosting.  In the alpha version it can only be used to record key information about the book club you will host.  There is not social aspect

The next steps would be to allow users to view all the books clubs being hosted, and allow them to search posted book clubs.  After that I would want to add RSVP functionality.  Another feature I would like to add is allowing users to track which books they have read in each book club.

# How does it works
The only required value for a user to enter is the Title of the book club.

The other key information is optional.  There is no validation on dates to confirm that the book-club is starting and ending in the future OR that the user does not claim it ends before starting. In the future I would like to add a warning pop-up when the user submits odd dates, but not prevent the user from entering bad data because it is up to them how to use the application.

# User Stories:
- As a user I want to be able to enter bookclubs I am hosting into the app.
- As a user, I want to to be able to store and display a multi-line description for the book club
- As a user I want to be able to assign any valid date to the start date and end date to the book club

# ERD

A link to the ERD is below:

[ERD](http://i.imgur.com/vX1mcmn.jpg)

# Wireframe:
A link to the wire frames can be found below at:

[Landing Page](http://i.imgur.com/Je4FNW5.jpg)

[Book Club List](http://i.imgur.com/LTBlP6x.jpg)

# Dependincies

Can be installed with npm install and include:

- bable
- bootstrap
- eslint
- grunt
- handlebars
- node
- webpack
