To run the application locally, follow these steps:

## 1.Prerequisites
* Make sure you have Node.js installed on your system.
* Ensure you have MongoDB installed and running, or have access to a MongoDB Atlas cluster.

## 2.Clone the Repository
Clone the repository to your local machine using the following command:
[ git clone https://github.com/sparshkadian/ScaleX-Finance.git](https://github.com/sparshkadian/ScaleX-Finance)

## 3.Install Dependencies
Navigate to the project directory:
* cd ScaleX-Finance
Install the required dependencies by running:
* npm install

## 4.Configure Environment Variables
 * Create a .env file in the project root directory.
 * Add the necessary environment variables to the .env file. For example: MONGODB_URI=your-mongodb-connection-string
 * Replace your-mongodb-connection-string with the appropriate connection string for your MongoDB instance or Atlas cluster.
 
## 5.Run the Application
* For development mode (with hot-reloading):
 npm run dev
This command will start the application using nodemon, which automatically restarts the server whenever you make changes to the code.

* For production mode:
npm start
This command will start the application using node.

## 6.Access the Application
* Once the application is running, you can access it in your web browser at http://localhost:4100
* You can now interact with the API endpoints and test the application's functionality.
