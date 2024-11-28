# React-Redux Application

## Overview
This is a React-Redux application that fetches and displays posts from a JSONPlaceholder API. It also allows users to add new posts using a simple form.

## Features
- Fetch and display posts from the API.
- Manage state using Redux and Redux Toolkit.
- Add new posts with a form submission.
- Built using [Vite](https://vitejs.dev/) for fast and efficient development.

## Technologies Used
- React
- Redux Toolkit
- Axios
- Vite

## API Endpoint
We use the JSONPlaceholder API for posts:

```
https://jsonplaceholder.typicode.com/posts
```

## Project Structure
The project follows a modular structure:

```
react-redux-app/
├── src/
│   ├── components/
│   │   ├── PostForm.jsx    # Form component to add new posts
│   │   ├── PostList.jsx    # Component to display posts
│   ├── features/
│   │   ├── posts/
│   │   │   ├── postsSlice.js    # Redux slice for posts
│   ├── redux/
│   │   ├── store.js          # Redux store configuration
│   ├── App.jsx           # Main App component
│   ├── main.jsx          # Entry point
├── public/               # Public assets
├── index.html            # HTML template
├── package.json          # Project dependencies and scripts
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/react-redux-app.git
   cd react-redux-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Usage

### Viewing Posts
The application fetches posts from the JSONPlaceholder API and displays them in a list. Each post shows a title and body.

### Adding a New Post
1. Fill in the title and body in the provided form.
2. Click the "Submit" button.
3. The new post will be sent to the API and logged to the console (JSONPlaceholder does not persist data).

## Scripts

### Development
```bash
npm run dev
```
Starts the development server.

### Build
```bash
npm run build
```
Builds the application for production.

### Preview
```bash
npm run preview
```
Previews the production build.

## Notes
- This project uses Redux Toolkit for state management.
- The `fetchPosts` action retrieves posts from the API and stores them in the Redux store.
- JSONPlaceholder API does not actually persist new posts. Instead, it returns a mock response.

## Contributing
Feel free to submit issues or pull requests to improve this project.
