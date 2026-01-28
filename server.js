// This file setup a Node.js server for an e-commerce application. This not setup middleware, database, or any other features.
const app = require("./src/app");

const PORT = 3055

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// process.on("SIGINT", () => {
//     server.close(() => {
//         console.log("Server is closed");
//     });
// });