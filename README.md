# System Vue Frontend

This is the frontend application for the modern web application demo. It's built with Vue.js and provides a user-friendly interface for interacting with the REST API.

## 1. Repository Structure

This repository is part of a three-repository architecture:

1. **system-demo**: The main coordinator repository containing Docker Compose configuration, CI/CD setup, and documentation
2. **system-rest**: The backend Spring Boot REST API
3. **system-vue** (this repository): The frontend Vue.js application

## 2. Development Setup

For development, this repository should be cloned **inside** the system-demo directory:

```bash
# First, clone the main coordinator repository
git clone https://github.com/YOUR_USERNAME/system-demo.git
cd system-demo

# Then clone this repository inside system-demo
git clone https://github.com/YOUR_USERNAME/system-vue.git

# Also clone the backend repository
git clone https://github.com/YOUR_USERNAME/system-rest.git
```

The final directory structure should look like this:

```
system-demo/             # Main coordinator repository
├── system-rest/         # Backend repository
└── system-vue/          # This frontend repository
```

Note: The `.gitignore` file in the main repository is configured to ignore the component folders, allowing each repository to maintain its own Git history.

## 3. Technologies Used

- Vue.js 3
- TypeScript
- Tailwind CSS
- Axios for API calls
- Font Awesome icons

## 4. Running Locally

### 4.1 Prerequisites

- Node.js 16 or higher
- npm or yarn
- Backend API running (see [system-rest](https://github.com/YOUR_USERNAME/system-rest))

### 4.2 Development Mode

```bash
# Install dependencies
npm install

# Start development server with hot-reload
npm run dev
```

The application will be available at http://localhost:5173 (or another port if 5173 is in use).

### 4.3 Production Build

```bash
# Build for production
npm run build
```

### 4.4 Running with Docker Compose (Recommended)

The recommended way to run the complete system is using Docker Compose from the main system-demo repository:

```bash
# From the system-demo directory
docker compose up --build
```

This will start the frontend, backend, and database together.

## 5. Project Structure

```
system-vue/
├── public/              # Static assets
├── src/
│   ├── assets/          # CSS and other assets
│   ├── components/      # Vue components
│   ├── router/          # Vue Router configuration
│   ├── stores/          # Pinia stores
│   ├── views/           # Page components
│   ├── App.vue          # Root component
│   └── main.ts          # Application entry point
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## 6. Configuration

The application can be configured by modifying the API URL in the components or by setting environment variables.

## 7. Version Information

This component is part of the system-demo v0.1.0. All components are versioned together as a single unit, with version control managed by the main system-demo repository.

## 8. License

This project is licensed under the Apache License 2.0 - see the LICENSE file for details.
