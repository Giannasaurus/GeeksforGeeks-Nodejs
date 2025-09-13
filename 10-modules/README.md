# What are modules in NodeJS?
In NodeJS, modules are encapsulated units of code that can be reused across different parts of an application. Modules help organize code into smaller, manageable pieces, promote code reusability, and facilitate better maintainability and scalability of NodeJS applications.

## Types of Modules:
- **Core Modules:** Core modules are built-in modules provided by NodeJS. They offer essential functionalities such as file system operations (`fs`), HTTP server (`http`), and utilities (`util`). Core modules can be accessed using the `require()` function without specifying a path.
```
const fs = require('fs');
```
- **Third-Party Modules:** Third-party modules are created by the NodeJS community or external developers and are hosted on package registries like npm (Node Package Manager). Developers can install third-party modules using npm and include them in their applications using `require()`.
```
npm install package-name
const package = require('package-name');
```
- **Custom Modules:** Custom modules are user-defined modules created by developers to encapsulate reusable code. Developers can create custom modules by defining functions, objects, or classes in separate files and exporting them using the `module.exports` or `exports` object.

**Example:** Below is the code example of the custom modules:
```
// index.js
const math = require('./math');
console.log(math.add(5, 3));
```
```
// math.js
exports.add = (a, b) => a + b;
exports.subtract = (a, b) => a - b;
```

**Output:**
```
8
```

## Benefits of Using Modules:
- **Encapsulation:** Modules encapsulate code, allowing developers to hide implementation details and expose only the necessary interfaces or functionalities.
- **Code Reusability:** Modules promote code reusability by enabling developers to reuse modules across different parts of an application or in multiple applications.
- **Maintainability:** Modular code is easier to maintain and refactor, as changes made to a module's implementation do not affect other parts of the application.
- **Scalability**: Modules help organize code into smaller, manageable units, making it easier to scale applications as they grow in complexity.

## Conclusion:
Modules are a fundamental concept in NodeJS that enable developers to organize code, promote reusability, and improve the maintainability and scalability of applications. Whether using core modules provided by NodeJS, third-party modules from npm, or custom modules created by developers, understanding how to leverage modules effectively is essential for building robust and maintainable NodeJS applications.