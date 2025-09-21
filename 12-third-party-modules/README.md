# NodeJS Third Party Module

Third-party modules are external libraries maintained and built by the developer community. Unlike core modules that are added with Node.js, these modules must be installed separately using npm. They are designed to make your complex tasks easier & modify application capabilities and make development easier.

From routing and authentication to data validation and HTTP requests, third-party modules cover nearly every aspect of modern backend development.

## Installing and Using Third Party Modules

Node.js uses npm, the world’s largest software registry, to manage third-party packages. To install A module is straightforward; you just need to give the command `npm install express`

```
PS C:\Users\gfg0691\NodeJS\expressjs> npm install express

added 67 packages, and audited68 packagesin 4s

14 packages are looking for funding
    run `npm fund` for details

found 0 vulnerabilities 
```

This command installs all the popular express web framework and adds it to the project's node_modules directory. To use the installed module you just simply need to give the `require` command .
```
const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello Mahima!');
});
app.listen(3000, () => console.log('Server running on port 3000'));
```

When you start running your server on port no 3000 you will see output Hello Mahima!

**Output:**
```
Hello Mahima!
```

## Popular Third-Party Modules
Here are some widely adopted third-party modules and their use cases:

|Module|Purpose|
|:----:|:-----:|
|express|fast , minimalist web framework for building APIs and web apps|
|mongoose|MongoDB ODM for schema-based data modeling|
|axios|Promise-based HTTP client for server and browser|
|lodash|Utility functions for working with arrays, objects etc|
|dotenv|Loads environment variables from a .env file|
|jsonwebtoken|Implementation of JSON Web Tokens (JWT) for authentication|

### Express - Web Framework
Express is a fast, minimalist web framework for Node.js that simplifies the process of building web applications and APIs. It provides robust routing, middleware support, and HTTP utility methods.


**filename: express.js**
```
const express= require('express');
const app= express();
app.get('/',(req,res)=>{
    res.send('Hello from Express')
});
app.listen(8080,()=>{
    console.log('app created successfully');
})
```

**Output:**
```
PS C:\Users\gfg0691\NodeJS\coremodules> node express.js
app created successfully
```

**Use case:** Build APIs and web servers quickly.

### Mongoose
Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a straightforward way to define schemas and interact with MongoDB using JavaScript objects.

**filename:index.js**
```
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/testDB');
const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});
const User = mongoose.model('User', userSchema);
const newUser = new User({ name: 'Alice', age: 25 });
newUser.save().then(() => console.log('User saved!'));
```

**Output:**
```
PS C:\Users\gfg0691\NodeJS\coremodules\mongoose-demo> node index.js
User saved!
```

You can check the data in the database ie. username , user id, user age etc

### Axios
Axios is a promise-based HTTP client for Node.js and the browser. It simplifies making HTTP requests, handling responses, and managing errors.

**filename: axios.js**
```
const axios = require('axios');
axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
```

**Output:**
```
PS C:\Users\gfg0691\NodeJS\coremodules> node axios.js
{
    userId: 1,
    id: 1,
    title: 'sunt unt facere repellat provident occaeceti excepturi optio reprehenderit',
    body: 'quia et suscipit\n' +
        'suscipit recusandae consequuntur expedita et cum\n' +
        'reprehenderit molestiae ut ut quas totam\n' +
        'nostrum rerum est autem sunt rem eveniet architecto'
}
```

### lodash - Utiity Library
Lodash is a utility library that provides helpful functions for manipulating arrays, objects, strings, and more—making JavaScript code cleaner and more readable.

**filename: lodash.js**
```
const _ = require('lodash');
const numbers = [10, 5, 8, 3];
const sorted = _.sortBy(numbers);
console.log(sorted); // [3, 5, 8, 10]
```

**Output:**
```
PS C:\Users\gfg0691\NodeJS\coremodules> node lodash.js
[ 3, 5, 8, 10 ]
```

### dotenv
dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. It helps manage configuration settings securely and separately from code.

**filename: .env**
```
PORT=4000
```
**filename: dotenvx.js**
```
require('dotenv').config();
console.log(process.env.PORT); // 4000
```

**Output:**
```
PS C:\Users\gfg0691\NodeJS\coremodules> node dotenv.js
[dotenv@17.0.1] injecting env (1) from .env - [tip] encrypt with dotenvx: https://dotenvx.com
3000;
```

**Note:** You should have .env file in the same folder  have  Port no . i.e PORT= 4000

### Nodemon 
Nodemon is a development utility that automatically restarts your Node.js Application whenever file change. It is very useful during development to avoid manually stopping and restarting the server after every change.

**Installation : To install nodemon you need to run this command.**
```
C:\Users\gfg0691>npm i -g nodemon

added 29 packages in 2s

4 packages are looking for funding
    run `npm fund` for details
```

**Syntax : To run the command using nodemon**
```
PS C:\Users\gfg0691\NodeJS\expressjs> nodemon fsappend.js
[nodemon] 3.1.10
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node fsappend.js`
Data added in my file Successfully
[nodemon] clean exit - waiting for changes before restart
```

### Jsonwebtoken
Jsonwebtoken (or jwt) is a module that enables you to generate and verify JSON Web Tokens, commonly used for implementing secure authentication in APIs.

**filename : jsonwebtoken.js**
```
const jwt = require('jsonwebtoken');
const token = jwt.sign({ username: 'Mahima_Bhardwaj' }, 'secretKey');
console.log('JWT:', token);
const decoded = jwt.verify(token, 'secretKey');
console.log('Decoded:', decoded);
```

**Output:**
```
PS C:\Users\gfg0691\NodeJS\coremodules> node jsonwebtoken.js
JWT: eyJhbGci0iJIUzI1NiIsInR5cC161kpXVCJ9.eyJ1c2VybmFtZSI6Ik1haGltYV9CaGFyZHdhaiIsIm1hdCI6MTc1MTQzMzA4Mn0.vfX1U3Bu9
4gvuAo31qjRQCYaXth6nKytdPTwWiq4MU
Decoded: { username: 'Mahima_Bhardwaj', iat: 1751433082 }
PS C:\Users\gfg0691\NodeJS\coremodules>
```

## Why Use Third-Party Modules?
- Time Efficiency- They free developers to concentrate on the essential business logic by removing the requirement to create common functionality from the ground up.
- Community Support- The majority of well-liked module are open source and upheld by vibrant communities, guaranteeing constant enhancements and bug patches.
- Scalability and Reusability- It allows a clean, modular code structure that is simpler to grow and maintain.
- Security Updates- Patches for known vulnerabilties are frequently released by its well-maintained modules, which helps to create safer applications.

## Best Practices When Using Third-Party Modules
1. Evaluate Module Quality: It checks all the download stats, github activity, and issue resolution trends.
2. Keeps Dependencies Up to Date: It uses tools like npm outdated or npm-check-updates to manage updates.
3. Conduct Regular Security Audits: It runs npm audit regularly to identify and fix known vulnerabilities.
4. Limit Unneccessary Dependencies: It includes only Important modules . Using excessive dependencies can flood your project and introduce maintenance challenges.
5. Review Documentation Thoroughly: It helps to understand the module's API and integration patterns before implementation.

## Conclusion
- They are Important to the Node.js ecosystem.
- They allow developers to build scalable, effective and maintainable applications.
- They uses best practices to ensure secured and optimized integration of these modules.
- They allows long-term project stability and performance.