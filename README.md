

# Google Keep Clone Project

Welcome to the Google Keep Clone Project! This project aims to replicate the functionality of Google Keep, providing users with a platform to create and manage notes seamlessly.

### Demo

You can view a live demo of the project [here](https://google-keep-clone-client.vercel.app/).

### Getting Started

To run the application on your local machine, follow these simple steps:

#### Prerequisites

- Docker Desktop Software

#### Clone the Repository

```bash
git clone [url.git]    # Replace [url.git] with the actual URL of the repository
cd [cloned_folder]     # Navigate into the cloned folder
```

#### Build Client and Server Images

1. Open a terminal:
   ```bash
   cd client
   docker build -t google_keep_clone:client .
   ```

2. Open another terminal:
   ```bash
   cd api
   docker build -t google_keep_clone:api .
   ```

#### Run the Application

Open one more terminal and run:
```bash
docker compose up
```

You can now access the client side of the MERN application by navigating to [http://localhost:3000](http://localhost:3000) on your computer.

### Stopping the Application

To stop the application, simply press `Ctrl+C` on the terminal running the containers.

--
