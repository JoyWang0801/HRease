# HRease Project Setup

This is the main setup guide for the HRease project, a web-based HR management system. Below you will find the instructions to launch the backend and frontend parts of the application.

## Prerequisites

Before proceeding, ensure you have the following installed on your system:

- Docker
- Node.js and npm

## Total Setup
To build both frontend and backend of the application, you will be using Docker-compose.

1\.Ensure you are located in the root directory of the application

```sh
$ ./HRease
```

2\. Under the root directory, you will find a `compose.yaml` file. This will build both frontend and backend docker images:
```sh
docker-compose build
```

3\. To force a full rebuild use:
```sh
docker-compose build --no-cache
```

4\. Or execute the following command directly to build and run docker-compose in detach mode:
```sh
docker-compose up --build -d
```

5\. To stop and remove container use:
```sh
docker-compose down
```

## Backend Setup

The backend for HRease is powered by PocketBase. To launch the backend service, you'll be using Docker.

1\. Navigate to the backend directory:

```sh

cd backend

```

2\. Within the `backend` directory, you will find a `Dockerfile` and the `pocketbase` directory. Build the Docker image for PocketBase:

```sh

docker build -t hrease-backend .

```

3\. After the image has been built, you can run the PocketBase service:

```sh

docker run -dp 8080:8080 hrease-backend

```

This command will start a Docker container running PocketBase and will expose it on port `8080`.

## Frontend Setup

The frontend for HRease is a React application that communicates with the PocketBase backend.

1\. Navigate to the frontend directory:

```sh

cd frontend

```

2\. Within the `frontend` directory, you will find a `Dockerfile`, the `src`and `public` directory. Build the Docker image for PocketBase:

```sh

docker build -t hrease-frontend .

```

3\. After the image has been built, you can run the frontend react app:

```sh

docker run -d -p 3000:3000 hrease-frontend

```

This command will launch the frontend and typically open a browser window pointing to `http://localhost:3000` where you can interact with the application.

## Accessing the Application

With both the backend and frontend services running, you can now access the HRease system:

- The frontend can be accessed at `http://localhost:3000`.
- The backend PocketBase admin panel can be accessed at `http://localhost:8080/admin`.

## Additional Notes

- Make sure that both frontend and backend ports are not being used by other services.
- The `npm start` command will run the frontend in development mode. For production deployment, a different process should be followed, involving building and serving the production-optimized build.
- Docker commands should be executed with sufficient permissions. Depending on your system, you might need to use `sudo`.
- If you encounter any CORS issues, ensure that the backend PocketBase server's CORS settings are configured to accept requests from your frontend service's origin.

---

Thank you for setting up the HRease project. For any issues or further configuration settings, please refer to individual `README.md` files in the `frontend` and `backend` directories or contact the development team.