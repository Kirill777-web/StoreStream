[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# StoreStream-Simplifying E-commerce for Everyone

A robust and efficient backend system for modern E-commerce platforms.

## Description

This E-commerce StoreStream your simple, intuitive e-commerce backend solution. Manage products, track sales, and connect with customers seamlessly. Setting up your online store has never been easier. Experience StoreStream today.

## Table of Contents

- [Features](#features)
- [Usage](#usage)
- [Installation](#installation)
- [Packages](#packages)
- [Database Setup](#database-setup)
- [Environment Variables](#environment-variables)
- [Seeding](#seeding)
- [Credits](#credits)
- [Links](#links)
- [License](#license)

## Features

- Efficient data retrieval methods for products, categories, and tags.
- Secure and robust database design for optimal performance.
- Easy integration with frontend platforms.
- Comprehensive documentation for seamless setup and usage.

## Usage

After installation, the system can be started using the command `npm start`. Use Insomnia to test the API routes.

## Installation

### Packages

To install the required packages, run:

```
npm install
```

The following packages are included:

- `express`: For server management.
- `sequelize`: ORM for database interactions.
- `mysql2`: Driver for MySQL.

### Database Setup

1. Install MySQL on your machine if it's not already.
2. Set up a new database named `ecommerce_db` using your preferred database management tool or the MySQL command line.

### Environment Variables

Create a `.env` file at the root of your project. Include the following variables:

```
DB_USER=your_username
DB_PASSWORD=your_password
DB_HOST=localhost
```

Replace `your_username` and `your_password` with your MySQL credentials.

### Seeding

To seed the database with sample data, run:

```
npm run seed
```

## Credits

- **npm**: [npm Official Website](https://www.npmjs.com/)
- **Sequelize**: [Sequelize Official Documentation](https://sequelize.org/)
- **Insomnia**: [Insomnia REST Client](https://insomnia.rest/)
- **Express.js**: [Express.js Official Website](https://expressjs.com/)

## **Links**

- This is the link of my [GitHub repository](https://github.com/Kirill777-web/StoreStream)
- Link of Screenrecorder the technical acceptance and GET,PUT,DELETE [Screencastify](https://drive.google.com/file/d/1lBj7nmKOkYVypYXVqaGHNWLZG07LSmgo/view)
- Link of Screenrecorder of created schema from the MySQL shell and Insomnia Demo [Screencastify](https://drive.google.com/file/d/1w5uUyGz-ihGNk8tRK2hRZYpEsrL49hCE/view)

## License

Copyright (c) 2023 Kirill Lazutin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
