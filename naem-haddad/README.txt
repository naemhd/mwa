#Cities Project

this project provide crud operations for cities database. this project uses mongodb expressjs and angualrJs

Api Endpoints:
GET /api/cities    	|fetch all cities you can use count and offset query params
GET /api/cities/:cityID  | fetch all details for a city 
POST /api/cities	| add a new city
DELETE /api/cities/:cityId | delete a city from the database


#Installation:

you need to have nodejs, npm, and nodemon installed on your machine

- clone or download the source files
- npm i
- npm start

visit http://localhost:5000/

#Database

you are expected to have a mongo database mounted to 127.0.0.1
Name: "cities"
username: mwa 
password: cs572