# Simple Express Server

This project is a simple Express server that listens on port 8001. It is set up to automatically restart using Nodemon whenever changes are made to the code.

## Project Structure

```
simple-express-server
├── src
│   └── server.js
├── package.json
├── yarn.lock
├── Dockerfile
└── README.md
```

## Getting Started

To get started with this project, follow the instructions below.

### Prerequisites

Make sure you have Node.js and Yarn installed on your machine.

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd simple-express-server
   ```

2. Install the dependencies:
   ```
   yarn install
   ```

### Running the Server

To start the server, use the following command:
```
yarn start
```
The server will be running on `http://localhost:8001`.

### Docker

To build and run the Docker container, use the following commands:

1. Build the Docker image:
   ```
   docker build -t simple-express-server .
   ```

2. Run the Docker container:
   ```
   docker run -p 8001:8001 simple-express-server
   ```

The server will be accessible at `http://localhost:8001` from your host machine.

### License

This project is licensed under the MIT License.