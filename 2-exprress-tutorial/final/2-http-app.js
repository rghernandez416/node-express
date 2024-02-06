//THIS IS THE LONGER INEFFICIENT WAY TO HANDLE A SERVER

const http = require("http");
const { readFileSync } = require("fs");

//get all filles
const homePage = readFileSync("./navbar-app/index.html");
const homeStyles = readFileSync("./navbar-app/styles.css");
const homeImage = readFileSync("./navbar-app/logo.svg");
const homeLogic = readFileSync("./navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
   //console.log(req.method);
   //console.log(req.url);

   const url = req.url;
   //home page
   if (url === "/") {
      res.writeHead(200, {
         "content-type": "text/html",
      });
      res.write(homePage);
      res.end();
   }
   //about page
   else if (url === "/about") {
      res.writeHead(200, {
         "content-type": "text/html",
      });
      res.write("<h1>About Page</h1>");
      res.end();
   }
   //styles for home page
   else if (url === "/styles.css") {
      res.writeHead(200, {
         "content-type": "text/css",
      });
      res.write(homeStyles);
      res.end();
   }
   //svg for home page
   else if (url === "/logo.svg") {
      res.writeHead(200, {
         "content-type": "image/svg+xml",
      });
      res.write(homeImage);
      res.end();
   }
   //logic for homepage
   else if (url === "/browser-app.js") {
      res.writeHead(200, {
         "content-type": "text/javascript",
      });
      res.write(homeLogic);
      res.end();
   }
   //error/404 page
   else {
      res.writeHead(404, {
         "content-type": "text/html",
      });
      res.write("<h1>PAGE NOT FOUND</h1>");
      res.end();
   }
});

server.listen(5000);
