# Globiliti

A Full-Stack project showcasing authentication and design.

## Demo

Visit :arrow_right: [Globiliti](https://globiliti1.herokuapp.com/)


## Screenshots
### Login page

![App Screenshot](https://user-images.githubusercontent.com/54614756/118363308-5bdd4a00-b5b1-11eb-8fa0-00622cc7600a.png)

###  Dashboard page

![App Screenshot](https://user-images.githubusercontent.com/54614756/118363243-115bcd80-b5b1-11eb-8ad8-955633fe63df.png)


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
   git clonehttps://github.com/Gurveen-codes/globiliti.git
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

### Running locally

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
   
   
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT` - Port value to run Node Server

`NODE_ENV` - production or development

`MONGO_URI` - URI to your MongoDb database

`JWT_SECRET` - A secret key to generate JSON web tokens


## Roadmap

See the [open issues](https://github.com/Gurveen-codes/globiliti/issues) for a list of proposed features (and known issues).


## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

Gurveen Singh - Twitter - [@_Gurveen_](https://twitter.com/_Gurveen_) - Email - gurveen33@outlook.com

Project Link: [https://github.com/Gurveen-codes/globiliti](https://github.com/Gurveen-codes/globiliti)
