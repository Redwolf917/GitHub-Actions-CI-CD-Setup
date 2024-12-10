# Full-Stack Quiz Application

This is a full-stack application that allows users to take a quiz. The frontend is built with **React 18** and the backend is powered by **Node.js** (Express). The project includes automated tests using **Cypress** for end-to-end testing and **component testing**.

## Features

- **Frontend**: Built with React 18, the user can take a quiz, answer questions, and see their score.
- **Backend**: A simple API built with Node.js and Express to serve questions for the quiz.
- **Testing**: End-to-end tests and component tests using Cypress.
- **Deployment**: Can be deployed on platforms like **Render** or **Heroku**.

## Table of Contents

1. [Technologies](#technologies)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Testing](#testing)
5. [Deployment](#deployment)
6. [Contributing](#contributing)
7. [License](#license)

## Technologies

- **Frontend**: React 18
- **Backend**: Node.js, Express
- **Testing**: Cypress
- **Deployment**: Render/Heroku
- **Styling**: CSS (custom)
- **Database**: Not used in this project (API serves static data for quiz questions)

## Installation

### Prerequisites

Make sure you have the following installed:

- **Node.js**: [Download Node.js](https://nodejs.org/en/download/)
- **npm** (Node Package Manager): Comes with Node.js
- **Git**: [Download Git](https://git-scm.com/)

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/full-stack-quiz-app.git
cd full-stack-quiz-app
```

### 2. Install dependencies for both the frontend and backend

Run the following commands in the root folder of the project:

- **Install backend dependencies**:

```bash
cd server
npm install
```

- **Install frontend dependencies**:

```bash
cd client
npm install
```

### 3. Set up environment variables

In the backend (`server` folder), create a `.env` file for any necessary environment variables (e.g., API keys, database URLs).

Example `.env` for the backend:

```env
PORT=5000
```

For the frontend, ensure your API endpoint in React points to the correct backend URL. This can be configured in the code directly or through environment variables.

## Usage

### 1. Run the development server

To run the frontend and backend locally, follow these steps:

- **Start the backend (Node.js/Express)**:

```bash
cd server
npm start
```

- **Start the frontend (React)**:

```bash
cd client
npm start
```

The React app will be available at [http://localhost:3000](http://localhost:3000) and the backend at [http://localhost:5000](http://localhost:5000).

### 2. Run the production build

- **For the backend**:
  In your backend folder (`server`), run the following:

  ```bash
  npm run build
  npm start
  ```

- **For the frontend**:
  In your frontend folder (`client`), run the following:

  ```bash
  npm run build
  serve -s build
  ```

The app will be available in production mode.

## Testing

The project uses **Cypress** for testing. You can run Cypress in both **component testing** and **end-to-end testing** modes.

### 1. Run Cypress component tests

For running **component tests** (React components):

```bash
cd cypress
npx cypress open  # Opens the Cypress UI to run the tests
```

### 2. Run Cypress end-to-end tests

For **end-to-end tests**, you can run the following:

```bash
npx cypress open
```

Or run the tests headlessly:

```bash
npx cypress run
```

## Deployment

### 1. Deploying to Render (Frontend + Backend)

To deploy the app to **Render**, follow these steps:

1. Go to [Render](https://render.com) and sign up/sign in.
2. Create a **new web service** for both the frontend (React) and backend (Node.js).
3. Link your GitHub repository to Render.
4. For the **frontend** service, set the **build command** to `npm run build` and the **start command** to `serve -s build` (assuming you have `serve` installed for serving your React app).
5. For the **backend** service, set the **build command** to `npm install` and the **start command** to `npm start`.
6. Deploy the services and connect them to your domain.

Once deployed, Render will provide you with a live URL for both the **frontend** and **backend**.

### 2. Deploying the Backend to Heroku (if you prefer)

If you're deploying only the backend to **Heroku**:

1. Go to [Heroku](https://heroku.com) and create a new app.
2. Link your **GitHub repository** to the app.
3. In your **`package.json`**, ensure that the start script is correct:

   ```json
   "scripts": {
     "start": "node server.js"
   }
   ```

4. Deploy the backend and connect it to your frontend (if hosted separately).

## Contributing

If you'd like to contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push your branch to GitHub (`git push origin feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
