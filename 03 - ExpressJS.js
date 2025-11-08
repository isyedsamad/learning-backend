const express = require('express')
const app = express();

// *! what is express?
// express is a web app framework for nodejs
// manages everything from receiving requests to giving the responses

// app.get(route, requestHandler)
// here requestHandler is also a middlewaare function

// *! Basic Routing:
// app.get('/', (req, res) => {
//   res.send('Hello World from Samad!')
// })
// app.get("/profile", (req, res) => {
//     res.send("This is the profile page");
// })
// app.listen(3000)

// *! Middleware: comes before routes in server setup
// middleware is used if we want something to be done before reaching the route
// * this .use will run for every request that comes to the server: it's a global middleware
// app.use((req, res, next) => {
//     console.log("Hello from middleware");
//     next(); // to pass the control to the next middleware or route handler
// })
// app.get("/", (req, res) => {
//     res.send("Hello World from Samad!");
// })
// app.listen(3000)

// *! Error Handler
// app.get("/", (req, res, next) => {
//     return next(new Error("Something went wrong sir!"))
//     res.send("Hello World from Samad!");
// });
// ** error handler: comes with the .use() method but with 4 parameters.
// ** always at the end of all middlewares and routes.
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send("Something broke!");
// });
// app.listen(3000)