For this homework I created a website where users can vote on an existing show or add a new one. This data is stored in a database; if the show already exists, the 'count' will be updated. If it is a new show, a new entry will be created; a show is assigned a random color and location. The color and location will be utilized in the p5js sketch. The sketch loops through the database and draws a circle for each show. When a show is more popular, its radius increases. 

To recreate, download repository and in terminal:
1. npm install node
2. npm install express
3. npm install ejs
4. npm install nedb
