# Fiona Ross Angular app (NG6 - ES6, webpack, node)

- Architecture/structure based on the wonderful [NG6-starter] (https://github.com/AngularClass/NG6-starter)

- `client/*` - everything angular
- `server.js`, `client.app.routes.js` - node server for email and deployment

### Commands

- `gulp` - starts a server on port 3000.

- `gulp webpack` - bundles the app, copies files to dist directory for deployment

- `npm run express-server` - run node server (port 2000) for heroku environment, and nodemailer API

- `npm run icons` - compile SVG icons into webfonts (uses fontcustom)

- `npm run start` - tasks for heroku/deployment.

- `npm run test` - run unit tests (karma)
