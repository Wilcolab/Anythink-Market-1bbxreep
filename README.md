# Node.js Server

This project now contains a Node.js server implemented with Express.js, replacing the previous FastAPI Python server. The server provides two routes for managing a task list and runs on port **8001** by default.

## Migration Details

The backend has been migrated from Python (FastAPI) to Node.js (Express.js) for improved performance, scalability, and ecosystem compatibility. All API endpoints remain the same, ensuring a seamless transition for clients.

## Project Structure

The project has the following files and directories:

- `node-server/src/index.js`: Contains the implementation of the Express.js server with two routes. It handles adding a task to a list and retrieving the list.

- `node-server/package.json`: Lists the dependencies required for the Node.js server and other configurations.

- `node-server/Dockerfile`: Used to build a Docker image for the Node.js server. It specifies the base image, copies the source code, installs dependencies, and sets the command to run the server.

- `docker-compose.yml`: Defines and runs multi-container Docker applications. It specifies the services to run, their configurations, and any dependencies between them.

## Getting Started

To run the Node.js server using Docker, follow these steps:

- Build and start the Docker containers by running the following command:

  ```shell
  docker compose up
  ```

  This command will build the Docker image for the Node.js server and start the containers defined in the `docker-compose.yml` file.

- The Node.js server should now be running and accessible at [http://localhost:8001](http://localhost:8001).

## Ports

- The Node.js server listens on **port 8001** by default.
- If you modify the port in the source code or Docker configuration, update your requests accordingly.

## API Routes

The Node.js server provides the following API routes:

- `POST /tasks`: Adds a task to the task list. The request body should contain the task details.

- `GET /tasks`: Retrieves the task list.

