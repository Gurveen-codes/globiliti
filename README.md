# Globiliti

A Full-Stack project showcasing authentication and design.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT` - Port value to run Node Server

`NODE_ENV` - production or development

`MONGO_URI` - URI to your MongoDb database

`JWT_SECRET` - A secret key to generate JSON web tokens

## Screenshots

![App Screenshot](https://ibb.co/qYVDy1r)

## Tech Stack

**Client:** React

**Server:** Node, Express, Mongoose

**Database:** MongoDB

## API Reference

#### Register user

```http
  POST /api/users
```

#### Login user

```http
  POST /api/users/login
```

#### Get logged in user profile

```http
  GET /api/users/profile
```

#### Update logged in user profile

```http
  POST /api/users/profile
```

## Getting Started

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

### Optional Dev-Dependencies

- In backend/package.json
  ```sh
  npm i -D concurrently nodemon morgan
  ```

### Running

1. To run Node-Express Server

```sh
npm start
```

2. To run client-side React Project
   ```sh
   npm run client
   ```
3. To run both frontend and backend (only works with 'concurrently' package)
   ```sh
   npm run dev
   ```

## Roadmap

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a list of proposed features (and known issues).

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)
