# Creating Console-based Node Application
1. Running NodeJS with Console (No Setup Required) <br>
NodeJS allows developers to run JavaScript directly in the console without any setup. We can start the NodeJS REPL (Read-Eval-Print Loop) by simply typing node in the terminal and running JavaScript commands interactively.
```
$ node
> let name = "Jiya";
> console.log("Hello, " + name + "!");
```

*Output:*
```
Hello, Jiya!
udefined
```

# Creating Application with npm init and Installed Modules
## Step 1: Initialize a NodeJS Project <br>
```
mkdir my-node-app
cd my-node-app
npm init -y
```

## Step 2: Install Required Modules
We will install fs (for handling file operations) and path (for working with file paths).
```
npm install fs path
```

## Step 3: Create an index.js File
Create a simple HTTP server that reads and serves a file. <br>
```
import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, "message.txt");

    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Error reading file");
        } else {
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end(data);
        }
    });
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
```

## Step 4: Create a message.txt File
Create a message.txt file in the same directory and add some content <br>
```
Hello, this is a Node.js application without Express!
```

## Step 5: Run the Application
```
node index.js
```

# Creating Web-based Node Application
A web-based Node application consists of the following three important components: <br>
<ul>
    <li>Import required module</li>
    <li>Create server</li>
    <li>Read Request and return response</li>
</ul>
Let us learn more about them in detail <br>

## Step 1: Import required modules
Load Node modules using the required directive. Load the http module and store the returned HTTP instance into a variable. <br>

*Syntax:*
```
var http = require("http");
```

## Step 2: Creating a server in Node
Create a server to listen to the client's requests. Create a server instance using the createServer() method. Bind the server to port 8080 using the listen method associated with the server instance. <br>

*Syntax:*
```
http.createServer().listen(8080);
```

## Step 3: Read request and return response in Node
Read the client request made using the browser or console and return the response. A function with request and response parameters is used to read client requests and return responses. <br>

*Syntax:*
```
http.createServer(function (request, response) {...}).listen(8080);
```

## Step 4: Create an index.js File
```
var http = require('http');
 
http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'});
    
    res.end('Hello World!');

}).listen(8080);
```

## Step 5: To run the program type the following command in terminal
```
node index.js  
```

*Output:*
```
Your environment has been set up for using Node.js 10.15.3 (X64) and npm.

C:\Users\chait\cd C:\nodejstutorial

C:\nodejstutorial>node firstprogram.js
```

At port 8080:
```
Hello World!
```

---

## Core Components of a Node-First Application
<ul>
    <li>Backend (NodeJS with Express.js/NestJS/Koa.js): The backend serves as the core processing unit, handling API requests, database interactions, and authentication mechanisms.</li>
    <li>Database (MongoDB, PostgreSQL, MySQL, Redis): A Node-First approach commonly utilizes NoSQL databases like MongoDB for scalability, though SQL databases like PostgreSQL or MySQL are also widely used.</li>
    <li>Frontend (React, Vue.js, Angular): Although frontend technologies can vary, JavaScript frameworks like React.js, Vue.js, and Angular work seamlessly with a Node-powered backend.</li>
    <li>Authentication & Security: Utilizing JWT (JSON Web Tokens), OAuth, or session-based authentication ensures secure user interactions.</li>
    <li>Real-Time Capabilities (Socket.io, WebRTC): For real-time applications like chat apps or live updates, Socket.io provides seamless WebSocket communication.</li>
</ul>

## Best Practices for a Node-First Application
<ul>
    <li>Follow Modular Code Structure: Break the application into reusable modules for better maintainability.</li>
    <li>Use Asynchronous Programming: Leverage async/await or Promises to handle asynchronous tasks efficiently.</li>
    <li>Implement Proper Logging and Monitoring: Use tools like Winston, Bunyan, or ELK Stack (Elasticsearch, Logstash, Kibana) for logging and monitoring.</li>
    <li>Secure APIs with Rate Limiting: Prevent abuse by implementing rate-limiting strategies using express-rate-limit.</li>
    <li>Optimize Performance with Load Balancing: Distribute traffic efficiently using NGINX, HAProxy, or Load Balancers.</li>
</ul>
