# 0. Utility belts of JavaScript
- lodash.js
- underscore.js
- prop-type

# 1. Create Node project

**npm init -y**

# 2. Install Babel

**npm install babel-cli --save-dev**

# 3. Configure Babel

Babel uses a special file called .babelrc for its configuration. You must put this file in the project’s root and the contents of the file must be valid JSON. 
To specify that you want Babel to transpile all ES2015 features, you can use the ES2015 preset. Edit the .babelrc file so its contents are   
    {  "presets": ["es2015"]}            

Now that you’ve told Babel to use the ES2015 preset, you must also install it:                  

$ npm install babel-preset-es2015 --save-dev            

You should now be ready to transpile some ES6 code!

# 4. To transpile code execute

**babel src -d dist**

# 5. Additional Babel configuration
{
	"presets": ["es2015", "stage-0"],
	"plugins": ["transform-decorators-legacy"],
	"sourceMaps": "inline"
}

In above configuration, you’re using the ES2015 and stage-0 presets to include all of ES2015 and all of the existing proposed features. 
You also need to include the transform-decorators-legacy plugin in order to transpile decorators. 
And finally you tell Babel to include inline source maps to make debugging easier. Now in order for Babel to use those plugins and presets, you need to install them:
$ npm install babel-preset-es2015 --save-dev
$ npm install babel-preset-stage-0 --save-dev
$ npm install babel-plugin-transform-decorators-legacy --save-dev

# 6. Set up Babel as NPM script

"scripts": {  
	"test": "echo \"Error: no test specified\" && exit 1",
	"babel": "babel src –d dist",
},

**$ npm run babel**

# 7. ES6 Modules

Broswerify is a tool that lets you define modules, the same way Node.js does during development, and then bundle them into a single file.
Browserify operates on an entry point, your main JavaScript file, and analyzes what scripts are imported. It then runs on all those scripts as well, eventually building a tree of all the dependencies that are needed. Browserify then generates a single JavaScript file with all the required modules bundled into it while maintaining their proper scoping and namespacing. This bundled JavaScript file can then be included in a webpage on the frontend. 

Alternatives: webpack or rollup

a). Install Browserify
$ npm install browserify --global

b). Install babelify
$ npm install --save-dev babelify@8
or
$ npm install babelify --save-dev

c). Boundle all scripts in one file
$ browserify src/index.js --transform babelify --outfile dist/bundle.js--debug

d). Run module

$ node dist/bundle.js

# 8. Intellij
a). Configure FilesWatcher
https://hackernoon.com/quickstart-guide-to-using-es6-with-babel-node-and-intellij-a83670afbc49
To support class modifier install transform-class-properties and add arg in file watcher: **--plugins transform-class-properties**

b). Using ES6 in Node.js
https://blog.jetbrains.com/webstorm/2015/05/ecmascript-6-in-webstorm-transpiling/

When you’re developing a Node.js application in ES6, the best way to run and test it is using babel-register.

    Make sure you have babel-cli (babel-register is installed as it’s dependency) properly installed in your project.
        In your Node.js run/debug configuration in the Node parameters field add: -r babel-register. Don’t forget to specify the path to the JavaScript file you’d like to run.
    Save configuration and hit run or debug.

Alternatively (but we would recommend babel-register) , you can use babel-node (which is also a part of the babel-cli module). To use it, you need to specify the path to the babel-node executable (in the .bin folder on macOS, .cmd or .exe file on Windows) in your node_modules folder in the Node interpreter field in the Node.js run/debug configuration.

c). Add library syntax for 'jest' library

Settings -> Languages & Frameworks -> JavaScript -> Libraries (Download ... jest)

# 9. JS Testing
 a). Testing framework
 https://jestjs.io/
 https://www.chaijs.com/
 
 b). Mocking & stubbing framework
 https://sinonjs.org/
 
 c). Assertion framework
 https://www.chaijs.com/


