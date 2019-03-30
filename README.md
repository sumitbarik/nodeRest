# SpringBoot

This is a sample rest web service created using node js.
Created using Node 8.11.4, Express ^4.16.4 Mongoose ^5.4.16

Steps to execute:
- download project
- install mongo db locally. 
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"   
-   install brew
brew tap mongodb/brew   
-   install mongo using brew
brew install mongodb-community@4.0

- start mongo db locally from terminal
mongod --config /usr/local/etc/mongod.conf

- import in vs code(any editor).
- build and run node server
npm run start
- now run the CRUD operation on topic using rest client
