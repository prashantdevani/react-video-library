# React Video Library

## Overview

This project is created to learn about Tailwind CSS and how to design and architect complex UI for large projects.

**Key Packages Used:**

- React (Vite)
- React Redux Toolkit
- Lucide React
- Tailwind CSS

## Installation

Follow these steps to setup the project:

**Prerequisites:**

- Node.js (v22.15.0 or compatible)
- npm (v10 or compatible)

**Steps:**

1.  Clone the repository.
2.  Open the project directory in your terminal.
3.  Install dependencies:
    ```bash
    npm install --legacy-peer-deps
    ```
4.  Start the development server:
    ```bash
    npm run dev
    ```
5.  Open the URL shown in the terminal (usually `http://localhost:5173`) to view the application.

## Docker Support

You can also run the application using Docker.

**Prerequisites:**

- Docker
- Docker Compose

**Using Docker Compose (Recommended):**

1.  Build and start the container:
    ```bash
    docker-compose up -d --build
    ```
2.  Open [http://localhost:3000](http://localhost:3000) to view the application.

**Using Docker manually:**

1.  Build the image:
    ```bash
    docker build -t react-video-library .
    ```
2.  Run the container:
    ```bash
    docker run -p 3000:80 react-video-library
    ```
3.  Open [http://localhost:3000](http://localhost:3000) to view the application.

### Environment Variables for Docker

These environment variables are used for Docker images:

- `GITHUB_URL`: URL for the repository link (enables button in header).
  - Example: `https://github.com/prashantdevani/react-video-library`
- `GITHUB_BUTTON_LABEL`: Label for the code button.
  - Example: `Github Code`
- `ENABLE_STORYBOOK`: Enable or disable Storybook (recommended to disable for production).
  - Example: `true`

## Routes

- `/login`: Login page.
- `/video-library`: Video library page.
- `/storybook`: Storybook demo and individual component showcase.

## Features

### Login System

- Created a dummy login system to demonstrate the concept.
- **State Management**: Uses Redux Toolkit at the application level, making authentication state accessible to any component or page.
- **Features**:
  - Login with any username and password (no backend implementation).
  - Multi-tab synchronization:
    - Logout from all open tabs when logging out from the current tab.
    - Login in all tabs when logging in from the current tab.

### Video Library

- Static UI/UX for the video library.

## UI/UX Design

- The goal is to transform the provided design expectations into a functional page using CSS.
- The design is visible after logging in on the [/video-library](https://videolibrary-alpha.labstack.site/login?bypass=true) route.
- Reference Image: ![](/public/IMG_4487.JPG)

## Storybook

The Storybook contains three types of sections:

- **Components**: Reusable components that can be used within pages or layouts.
- **Layout**: Reusable layouts for pages.
- **Pages**: Page components that require a layout and place components inside.

[👉 Open Video Storybook](https://videolibrary-alpha.labstack.site/storybook/)

## 🚀 Demo URL

[👉 Open Video Library Demo](https://videolibrary-alpha.labstack.site)
