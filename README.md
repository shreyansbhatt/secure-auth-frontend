# Secure Auth Frontend

## Overview
This repository contains the **frontend** implementation of a secure authentication system, built as part of a full-stack solution. It demonstrates a robust, scalable, and maintainable architecture designed with **React** for the frontend.

The accompanying **backend** repository can be found [here](https://github.com/shreyansbhatt/secure-auth-backend).

---

## Features
- **User Authentication**: Includes login and registration pages.
- **Input Validation**: Enforces input rules using client-side validation.
- **API Integration**: Handles secure communication with backend APIs via `axios`.
- **Responsive UI**: Simplified and functional user interface.

---

## Tech Stack
- **React**: Library for building the frontend user interface.
- **React Router**: For routing and navigation between pages.
- **Axios**: For secure HTTP requests to backend APIs.
- **CSS**: Minimal custom styles for layout and basic responsiveness.

---

## Best Practices Followed
As a **Solution Architect**, the project was designed with the following principles:

### **Security**
1. **Input Validation**: Input fields are validated to enforce integrity before submission.
2. **Sanitization**: Inputs are trimmed to avoid malicious payloads.
3. **JWT Handling**: Authentication tokens are securely managed in `localStorage`.

### **Scalability**
1. **Modular Design**: Components, API calls, and utilities are organized into distinct directories.
2. **Routing**: The use of React Router allows for clean and scalable navigation between pages.

### **Code Quality**
1. **Readability**: The code includes meaningful comments for clarity and maintainability.
2. **Error Handling**: API responses are handled gracefully with user feedback.

---

## Project Setup

### Prerequisites
- **Node.js**: Ensure Node.js is installed (v16+ recommended).
- **Backend**: Set up the backend from the [secure-auth-backend](https://github.com/shreyansbhatt/secure-auth-backend) repository.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/shreyansbhatt/secure-auth-frontend.git
   cd secure-auth-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create an `.env` file to specify the backend API URL:
   ```env
   REACT_APP_API_BASE_URL=http://localhost:4000/auth
   ```

---

## Running the Application
1. Start the development server:
   ```bash
   npm start
   ```

2. Access the application in your browser:
   ```plaintext
   http://localhost:3001
   ```

---

## Folder Structure
```plaintext
frontend/
├── src/
│   ├── components/          # React components (Login, Register)
│   ├── api/                 # Centralized API calls (auth.js)
│   ├── utils/               # Validation utilities
│   ├── index.js             # Entry point
│   ├── App.jsx              # Main App component with routing
├── package.json
├── README.md
```

---

## API Endpoints
The application integrates with the following backend API endpoints:
1. **POST /auth/register**: Registers a new user.
2. **POST /auth/login**: Authenticates a user and returns a JWT token.

---

## Future Enhancements
1. **Styling Framework**: Introduce TailwindCSS or another framework for consistent and dynamic styling.
2. **State Management**: Implement Redux or Context API for improved global state handling.
3. **Unit Testing**: Add Jest and React Testing Library for comprehensive test coverage.
4. **Internationalization (i18n)**: Enable multilingual support for a global audience.

---

## Contributing
Contributions are welcome! Fork the repository, create a feature branch, and submit a pull request.

---

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
