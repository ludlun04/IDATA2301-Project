# Frontend for fullstack app in course IDATA2301

## Running the app
This app can be run with either Docker or Node.js.

### Node.js
1. Install Node.js and npm (Node Package Manager) if you haven't already.
2. Run `npm install` to install the required dependencies.
3. Run `npm start` to start the app.
The app will start on port 3000 by default and can be accessed at `http://localhost:3000`.
### Docker
1. Install Docker, Node.js and npm if you haven't already.
2. Run `npm run build` to build the app.
3. Run `docker build -t fullstack-app .` to build the Docker image.
4. Run `docker run -p 3000:3000 fullstack-app` to start the app in a Docker container.