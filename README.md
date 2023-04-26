# to-do-list with MySQL, Node.js, Express.js, React.js, and TailwindCSS

This project is a simple task management application built using ReactJS on the frontend and a NodeJS/Express server on the backend. The user can add new tasks to the list, mark them as done, and delete them. The application fetches data from a MySQL database using Axios. The interface is designed using Tailwind CSS and features a responsive layout.


## Figma Portotype

<p float="left">
<img src="figma-prototype/Frame 1.png" height="230px" />
<img src="figma-prototype/Frame 2.png" height="230px" />
</p>


## Acknowledgments

This project was built with the help of https://www.youtube.com/watch?v=T8mqZZ0r-RA.
This is my first fullstack web application. I learned the fundamentals of fullstack web development including building a server-side app with Node.js and Express.js, connecting to a MySQL database, and building a user interface with React.js and Tailwind CSS. 


## Prerequisites

To run this project, you'll need to have the following installed on your computer:

- Node.js v14 or higher
- MySQL v8 or higher

## Getting Started

#### 1. Clone the repository to your local machine:

HTTPS: `git clone https://github.com/Louisii/to-do-list.git` 
or
SSH: `git clone git@github.com:Louisii/to-do-list.git`


#### 2. Navigate to the project directory:

`cd to-do-list`


#### 3. Install the dependencies:

`npm install`


#### 4. Create a MySQL database:

You'll need to have MySQL installed on your machine to create the database. Once you have MySQL installed, you can create a new database by running the commands in the "scripts" folder.


#### 5. Create a `.env` file:

Create a new file named `.env` in the root of your project directory. This file will contain your environment variables, including your MySQL database credentials. Add the following to your `.env` file:

- DB_HOST=localhost
- DB_USER=root
- DB_PASSWORD=your-password-here
- DB_DATABASE=todolist

Replace `your-password-here` with your MySQL root password.


#### 6. Start the development server:

`npm start`

This will start the development server on `http://localhost:3000`.


#### 7. Open the app in your browser:

Open your browser and navigate to `http://localhost:3000` to use the app.

## Built With

- MySQL
- Node.js
- Express.js
- React.js
- Tailwind CSS

