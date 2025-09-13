# Core Modules in NodeJS
Node.js is a powerful JavaScript runtime environment built on Chrome’s V8 engine. One of the Important features that makes Node.js efficient and versatile is its rich set of **core modules**—built-in libraries that help developers build scalable and efficient applications without relying on third-party packages.

To use a core module, you simply use the `require()` function:
```
const fs= require('fs');
```

## List of Commonly Used Node.js Core Modules
### 1. fs (File System)
The **File System (fs) module** in Node.js is a built-in module that allows you to work with the file system on your computer. It provides important methods to create, read, update, delete, and rename files and directories. The fs module helps both synchronous and asynchronous operations, making it easier to build effective and non-blocking I/O applications. Whether you are building a simple text reader or managing large data files, the fs module is an important tool in Node.js for handling file-related tasks.

This `fs.readFile()` is used to read the contents of a file named **mahima.txt** asynchronously. By using the `fs.readFile()` method with **'utf-8'** encoding, it makes sure that the file content is returned as a readable string. If an error occurs during the file read operation, it throws an error; otherwise, it logs the file’s content to the console.

**filename: fs.js**
```
const fs = require('fs');
fs.readFile('mahima.txt', 'utf8', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('Mahima Bhardwaj, You have Created file system successfully');
});
```

The Node is being used to run the Node.js script `fs.js`. Upon starting, Node run the script which reads the contents of the **mahima.txt** text file using the fs module and prints the output: "Mahima Bhardwaj, You have Created file system successfully", confirming that the file was created successfully.

**Output:**
```
PS C:\Users\gfg0691\NodeJS\coremodules> node fs.js
Mahima Bhardwaj, You have Created file system successfully
```

**Note:** When running a file using Node.js, it does not automatically watch for changes. If you make any changes to the file, you need to manually stop and restart the application for the updates to take effect.

fs module in Node.js provide methods for interacting with the file system are as follows:
- For Reading Files- `fs.readFile`/`fs.readFileSync`
- For Writing Files- `fs.writeFile`/`fs.writeFileSync`
- For appending Files- `fs.appendFile`/`fs.appendFileSync`
- For deleting Files- `fs.unlink`/`fs.unlinkSync` and `fs.rm/fs.rmSync`

### Difference Between readFile/writeFile and readFileSync/writeFileSync
| **Feature** | **readFile/writeFile** | **readFileSync/writeFileSync** |
|:-------:|:------------------:|:--------------------------:|
| **Execution** | Asynchronous (non-blocking) | Synchronous (blocking) |
| **Performance** | Better for high-performance and large-scale applications | Slower, blocks the event loop until the operation completes|
| **Callback Required** | Yes – takes a callback function | Yes – takes a callback function |
| **Use Case** | Preferred in server environments to avoid blocking | Preferred in server environments to avoid blocking |
| **Error Handling** | Error passed to callback | Use try...catch block for error handling |
| **Ex - Read File** | fs.readFile('file.txt', 'utf8', (err, data) => {...}) | const data = fs.readFileSync('file.txt', 'utf8') |
| **Ex -Write File** | fs.writeFile('file.txt', data, err => {...}) | fs.writeFileSync('file.txt', data) |

### fs.appendfile
fs.appendFile is used to add data inside file successfully. It will use fs.appendFile method to update file data . It will take three parameters file name, file data and callback function. The callback function will take parameter err . If there is any error it will throw the error on the console, if there is no error it will print the message.

**filename: fs.js**
```
// fs.js
const fs= require('fs');
fs.appendFile('mahima.txt', 'file added successfully',(err)=>{
    if(err)throw error;
    console.log('Data added in my file Successfully');
})
```
```
// mahima.txt
file added successfully
```

**Output:**
```
PS C:\Users\gfg0691\NodeJS\expressjs> node fs.js
Data added in my file successfully
```

### fs.appendfileSync
It is synchronous method from Node.js built-in module. It is used to append data to file. If the specified file will not be created fileappendSync will automatically create it.

**filename: fsappendSync.js**
```
// fsappendSync.js
const fs=require('fs');
fs.appendFileSync('mahima.txt', 'file added Successfully')
    console.log('data added in file successfully');
```
```
// mahima.txt
file added Successfully
```

**Output:**
```
PS C:\Users\gfg0691\NodeJS\expressjs> node appendfileSync.js
data added in file successfully
```

### 2. `http` and `https(HTTP/HTTPS)`
This module allows you to create HTTP and HTTPS servers and make HTTP requests. You can build web servers, RESTful APIs, and clients for interacting with web services. Functions like createServer and request are part of these modules.

The http module is imported using require('`http`'), and `http.createServer()` is used to create a server that takes a request (`req`) and response (`res`) object. When the server receives a request, it sends back the message: "**Hello Mahima, this is your first http server**". The server is instructed to listen on port 8080, and once it starts, it logs: "*Mahima, your server is running on port 8080*" to the console.

**filename: http.js**
```
const http = require('http');
const myServer = http.createServer((req, res) => {
    res.end('Hello Mahima, this is your first HTTP server');
});
myServer.listen(8080, () => {
    console.log('Mahima, your server is running on port 8080');
});
```

This result of running the Node.js server using node, which will start your server on provided port no.
```
PS C:\Users\gfg0691\NodeJS\coremodules> node http.js
Mahima, your server is running on port 8080
```

Finally, the message "**Mahima, your server is running on port 8080**" **appears, indicating that the server started successfully** and is now live.

**Output:**
```
Hello Mahima, this is your first http server
```

The output seen in the browser after visiting **`http://localhost:8080`**. The browser shows the response message sent by the server: "**Hello Mahima, this is your first http server**", confirming that the server is working correctly and sending responses as expected when accessed from a client (browser).

The https module in Node.js is a core module used to create secure servers and make HTTPS requests by enabling SSL/TLS encryption. It is similar to the http module but ensures data is transmitted securely over the network. You can use it to create an HTTPS server with an SSL certificate and private key, or to make secure API calls using `https.get()` or `https.request()`. It's essential for building secure applications, especially when handling sensitive data like login details or payments.

**filename: https.js**
```
(function() {

// Reading and writing to files in Node.js
// working with directories or file system
const fs = require("fs");

    // Responsible for creating HTTPS server
    // taking options for the server
    // options like where your certificates 
    // and private key files are located
    // also take actual request and response server
    // code for parsing web pages from files
    const https = require("https");

    // Helps with mimetypes in creating our response header
    const path = require("path");

    // "text/css" is added in response header 
    // so browser knows how to handle it 
    let mimetypes = {
        "css":"text/css",
    "html":"text/html"
};

    // Options is used by the servers
    // pfx handles the certificate file
    let options = {
        pfx: fs.readFileSync("ssl/cert.pfx"),
    passphrase: "encrypted"
};

    let server = https.createServer(options, function(request, response) {
 
    // If the url is empty
    if (request.url == "" || request.url == "/") {
        request.url = "homepage.html";
    }

    // __dirname is the directory where we are getting
    // these files from __dirname holds the file route
    // request.url is the index.html we made earlier
    // function is the callback function that holds two
    // parameters
    fs.readFile(__dirname + "/" + request.url, function(err, content) {
        if (err) {
        console.log("Error: " + err);
        }
    else {

        // 200 is code for OK
        // content-Type is the object or the content header
        response.writeHead(200,
            { 'Content-Type': mimetypes[path.extname(request.url).split(".")[1]] });
    response.write(content); 
        }

    // This will send our response back to the browser
    response.end();
    });
});

    server.listen("port number", "IP Address", function() {

        console.log("Server has started!");
}); 
 
})();
```

**Note:** Whatever the port number and IP Address are given to the server.listen it will execute that only web page whenever requested. And this web page will be HTTPS.

### 3. `events(EventEmitter)`
Node.js is known for its event-driven architecture, and the events module is at its core. It provides the EventEmitter class, allowing you to create custom events and handle them asynchronously. This module is the foundation for building real-time applications and custom event-based logic.

**filename: EventEmitter.js**
```
const EventEmitter = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('Message', (msg) => {
    console.log(`Received: ${msg}`);
});
myEmitter.emit('Message', 'Hello Mahima Bhardwaj');
```

This Node.js code uses the built-in events module to create and handle custom events. It begins by importing the EventEmitter class and creating an instance called myEmitter. Then, it sets up a listener using myEmitter.on() for an event named 'Message'. Whenever this 'Message' event is triggered, the provided callback function runs and prints the received message to the console. Finally, the code triggers (emits) the 'Message' event using myEmitter.emit() and passes the string 'Hello Mahima Bhardwaj' to it.

**Note:** As a result, the console outputs: **Received : Hello Mahima Bhardwaj**.

**Output:**
```
PS C:\Users\gfg0691\NodeJS\coremodules> node eventemitter.js
Received: Hello Mahima Bhardwaj
PS C:\Users\gfg0691\NodeJS\coremodules>
```

The node successfully ran your `eventemitter.js` file and is watching for changes in files with extensions like `.js`, `.json`, etc. When the script executed, it emitted a custom event named '**Message**', which was handled by a listener that printed the message "**Hello Mahima Bhardwaj**" to the console.This confirms that your event emitter logic worked correctly.

**Note:** The output displays: **Received :Hello Mahima Bhardwaj**.

### 4. `path(Path)`
The path module simplifies working with file and directory paths. It offers functions like `join`, `resolve`, and `basename` to manipulate and construct paths in a platform-independent way.

**filename: path.js**
```
const path=require('path');
console.log(path.basename('users/gfg0691/NodeJS/coremodules/index.html'));
```

This Node.js code uses the built-in `path` module to extract the base file name from a given path. By calling `path.basename('index.html')`, it simply returns '`index.html`' because there’s no directory in the path—just the file name.

**Output:**
```
PS C:\Users\gfg0691\NodeJS\coremodules> node path.js
index.html
```

The `path.js` was executed using `node`, and it printed `index.html` to the console. This likely means the script used Node.js’s path.basename() method to extract the file name from a given path like **/users/gfg0691/NodeJS/coremodules/index.html**.

### 5. `util(Utilities)`
The `util` module contains utility functions that extend JavaScript's built-in capabilities. It's particularly useful for debugging and working with objects. You'll find functions like `promisify`, `inspect`, and `format` here.

**filename:util.js**
```
const util =require('util');
const text=util.format('Hello %s', 'Mahima');
console.log(text);
```

It uses Node.js’s built-in `util` module, specifically the `util.format()` method, to format a string. The `%s` is a placeholder for a string value, which gets replaced by "**Mahima**" in this case. The result is a formatted string: "**Hello Mahima**".

**Output:**
```
PS C:\Users\gfg0691\NodeJS\coremodules> node util.js
Hello Mahima
```

It confirms that the `util.js` script ran successfully using `nodemon`. The line **Hello Mahima** is printed to the console, which verifies that the `util.format('Hello %s', 'Mahima')` function correctly inserted the string '**Mahima**' into the placeholder `%s`.

### `os (Operating System)`
The `os` module provides information about the operating system on which Node.js is running. You can access details like CPU architecture, memory, and network interfaces. It's essential for writing platform-specific code.

**filename: os.js**
```
const os=require('os');
console.log(os.platform());
console.log(os.freemem());
console.log(os.arch());
```

This Node.js code uses the built-in os module to get information about the operating system. It prints the platform **(like '`linux`' or '`win32`')**, the system architecture **(like '`x64`')**, and the amount of free system memory (in bytes).

**Output:**
```
PS C:\Users\gfg0691\NodeJS\coremodules> node os.js
win32
1833299968
x64
```

The `os.js` script uses Node.js's built-in `os` module to retrieve and display basic system information. It logs the operating system platform **(`os.platform()`)**, the system architecture **(`os.arch()`)**, and the available free memory in bytes **(`os.freemem()`)**. When run, it helps identify the environment the Node.js application is running on.

### 7. `crypto(Cryptography)`
For handling cryptographic operations like encryption, decryption, and creating hashes, the `crypto` module is indispensable. It includes functions for secure data handling and authentication.

**filename: crypto.js**
```
const crypto= require('crypto');
const hash= crypto.createHash('sha256');
const result= hash.update('Hello, Mahima Bhardwaj').digest('hex');
console.log(result);
```

This Node.js code uses the built-in `crypto` module to generate a SHA-256 hash of the string '**Hello,Mahima Bhardwaj**'. First, it imports the `crypto` module, then creates a SHA-256 hash object using `crypto.createHash('sha256')`. The `update()` method feeds the input string into the hash function, and `digest('hex')` converts the resulting hash into a hexadecimal string. Finally, `console.log(result)` prints the generated hash value to the console, which is a fixed-length encrypted representation of the input string.

**Output:**
```
PS C:\Users\gfg0691\NodeJS\coremodules> node crypto.js
e1d1c83d4ec0b73cab1f4a863134d1753c67e0fef5c0c9abe53c7f376137688c
```

It will successfully generated a SHA-256 hash of the string 'Hello,Mahima Bhardwaj'. The hashed result is printed in hexadecimal format. Nodemon is now waiting for file changes to automatically restart the script.

## How to Use Core Modules
To use a core module, you need to require it in your Node.js script:

**filename: coremodule.js**
```
const  fs =require('fs');
const path= require('path');
const http= require('http');
const util=require('util);')
```

Once required, you can access the module’s functions and classes and start using them in your application.

Let’s take an example of reading a file using the `fs` module:
```
const fs = require('fs');
fs.readFile('MahimaBhardwaj.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('File content:', data);
});
```