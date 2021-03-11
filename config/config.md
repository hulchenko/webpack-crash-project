'node -v'

'npm -v'

'npm init' (to initialize package.json)

'npm install --save-dev webpack webpack-cli' OR 'npm i -g webpack webpack-cli'

create src folder (for all of the working files)

create dist folder (for all of the webpack compiled files from working files)

create and configure webpack.config.js (for node.js to initialize)

initialize webpack: 'webpack'

check dist folder for bundle.js to appear

test working directory with 'node dist/bundle.js' command

add: "dev": "webpack --mode development" and "build": "webpack --mode production" to package.json to run commands: 'npm run build' or 'npm run dev' to switch between expanded and compressed code inside bundle.js

create /modules folder with configured module files to import into main js file (just like Sass)

run 'npm run dev'(expanded) OR 'npm run build'(compressed) & 'node dist/bundle.js' to test connectivity and performance

run 'npm install --save-dev html-webpack-plugin' to install HTML plugin

in package.json add configuration for HTML plugin
