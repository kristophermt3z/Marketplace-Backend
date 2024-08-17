# Marketplace-Backend - Technical documentation

## Overview
Marketplace Application - [Functional Documentation](https://github.com/salvadormartin3z/Marketplace/blob/main/README.md)

## Production Link
Visit the production version here: [Marketplace](https://marketplace-salvadormartinez.netlify.app/)

## Description
This is the backend for a marketplace, implemented using Node.js, Express, and TypeORM. This backend provides APIs to handle operations related to sellers and other marketplace resources.

## Prerequisites
Before getting started, make sure you have Node.js installed on your system. This project also uses PostgreSQL as the database system, so you need to have PostgreSQL installed and properly configured.

## Installation
To install and set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/salvadormartin3z/Marketplace-Backend.git
   cd Marketplace-Backend

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
   Create a .env file in the root of the project with the following environment variables necessary for the database connection and other important configurations.

    ```bash
    DATABASE_URL=postgresql://your_user:your_password@your_host:your_port/your_database?ssl=true
    ```
    ```bash
    JWT_SECRET=exampleSecretToken
    ```

   Note: For security reasons, the .env file is not included in the repository and should not be shared. Each developer or user deploying the project must create their own .env file.

4. Start the server:
    ```bash
    npm start
    ```

5. You will also need to install and set up the project's frontend for full functionality:
- **Frontend**: [Frontend en GitHub](https://github.com/salvadormartin3z/Marketplace-Frontend)

## Contact

You can find and contact me through the following platforms:

- **Portafolio**: [Salvador Martínez - Portafolio](https://salvadormartin3z.netlify.app/)
- **LinkedIn**: [Salvador Martínez en LinkedIn](https://www.linkedin.com/in/salvadormtz/)
- **GitHub**: [Salvador Martínez en GitHub](https://github.com/salvadormartin3z)

## Contributing
If you want to contribute to the project, consider forking the repository and submitting your pull requests. You can also open issues if you find any problems or have suggestions for improvements.

## License
This project is licensed under the MIT License. See the LICENSE file in this repository for more details.
