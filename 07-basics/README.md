# NodeJS Basics
NodeJS is a JavaScript runtime environment built on Chrome’s V8 JavaScript engine that allows developers to execute JavaScript code outside the browser. It can make console-based and web-based NodeJS applications.

Some of the features of the NodeJs are mentioned below:

- Non-blocking I/O: NodeJS is asynchronous, enabling efficient handling of concurrent requests.
- Event-driven architecture: Developers can create event-driven applications using callbacks and event emitters.
- Extensive module ecosystem: npm (Node Package Manager) provides access to thousands of reusable packages.
- Single-threaded Model: Node js runs on a single thread despite being asynchronous, it uses an event loop to handle requests.

## Setting Up NodeJS
To start using NodeJS, you’ll first need to install it on your system.

**Step 1: Download and Install NodeJS**
- Go to the NodeJS official website or you can follow our article to install NodeJS
- Download the appropriate installer for your operating system (Windows, macOS, or Linux).
- Follow the installation steps to set up NodeJS.

**Step 2: Verify Installation**
Once installed, you can verify the installation by opening your terminal and typing the following commands:
```
node -v
npm -v
```

**Step 3: Create a NodeJS Project**
Create a new directory for your project and initialize it with npm by running.
```
mkdir node-project
cd node-project
```

**Step 4: Write Your First NodeJS Application:**
Create a new file called app.js and add the following code to create a simple HTTP server:
```
const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Hello World!');
    res.end();
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});
```

*Output:*
```
node app.js
```

*At port 3000:*
```
Hello World!
```

**In this example**
- The http module is imported using require('http') to allow you to create an HTTP server.
- http.createServer creates a new server that listens for incoming HTTP requests.
- The callback function (req, res) handles requests and responses.
- Inside the callback, res.write('Hello, World!') sends "Hello, World!" as a response, and res.end() ends the response.
- server.listen(3000) starts the server on port 3000. Once the server is running, it logs "Server running on port 3000" to the console.

## NodeJS Architecture
NodeJS follows a single-threaded event loop model that handles all client requests using a single thread. It is based on a non-blocking I/O model, meaning the server can process multiple requests without waiting for one task to complete before starting the next.

- Event Loop: The event loop processes tasks without blocking, allowing NodeJS to handle many requests concurrently on a single thread.
- Asynchronous Execution: Non-blocking functions are used for tasks such as reading from the file system or querying databases. This ensures the application remains responsive.

## Basic NodeJS Concepts
### 1. Modules in NodeJS
NodeJS is built around the concept of modules. Modules in NodeJS are reusable pieces of code that can be imported into your application. These can be built-in modules (like fs for file system operations, http for HTTP server, etc.) or external packages installed using NPM.

**Common NodeJS Modules**
- **HTTP Module:** The http module is used to create web servers. It allows you to handle requests and send responses.
- **FS (File System) Module:** The fs module provides an API to interact with the file system. It can be used to read and write files, check for file existence, etc.
- **Path Module:** The path module helps in handling and transforming file paths. It makes working with file systems easier and more cross-platform.
- **Event Module:** The events module allows objects to emit and listen to events, which helps in writing event-driven applications.
- **Express Framework:** While NodeJS provides basic capabilities, many developers use the Express framework, which simplifies routing, middleware integration, and HTTP request handling.

### 2. Event Loop and Asynchronous Programming:
NodeJS uses an event loop to handle asynchronous operations. Rather than waiting for tasks (like I/O operations) to complete, NodeJS executes them in the background and moves on to other tasks. Once a task is complete, the corresponding callback is invoked. This non-blocking approach helps build highly responsive applications, especially useful for web servers and real-time applications.

## Advantages of Using NodeJS
- **High Performance:** NodeJS is optimized for performance due to its non-blocking I/O model and V8 engine, making it highly suitable for handling real-time applications and large-scale systems.
- **Scalable:** With its event-driven architecture, NodeJS can handle a large number of concurrent connections, making it highly scalable.
- **Cross-Platform:** NodeJS is cross-platform, meaning it can run on various operating systems like Windows, macOS, and Linux.
- **Active Community:** NodeJS has a large and active community that constantly contributes to its growth. This results in a vast array of open-source libraries and tools that can be easily integrated into your application.

## Conclusion
NodeJS is a versatile platform for building scalable and efficient apps with its event-driven, non-blocking architecture, making it perfect for real-time and I/O-heavy tasks. Though less suited for CPU-heavy work, its async model excels in modern app development. Dive deeper into its features and explore real-world use cases.