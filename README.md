# Hydraform

## Project Overview

Hydraform is a modern web application built with React and Vite, featuring the Boafo accessibility widget to ensure the site is accessible to all users regardless of their abilities.

### Purpose

This application provides a responsive and user-friendly interface with integrated accessibility features, making digital content more inclusive and compliant with accessibility standards.

### Main Features

- Responsive design with Tailwind CSS
- React Router for seamless navigation
- Boafo accessibility widget for enhanced accessibility
- Interactive UI components with Framer Motion
- Rich media support with React Player
- Toast notifications for user feedback
- Carousel/slider functionality

### Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router v7
- **Animations:** Framer Motion
- **Icons:** Lucide React, React Icons
- **Accessibility:** Boafo Accessibility Widget
- **Notifications:** React Toastify
- **Media:** React Player
- **Carousel:** React Slick

## How to Get Your Boafo API Key

To integrate the Boafo accessibility widget, you need to obtain an API key:

1. Visit [boafo.co](https://boafo.co)
2. Register for an account
3. Navigate to your dashboard
4. Retrieve your API key from the dashboard

## Boafo Widget Integration Guide

For detailed integration instructions, refer to the official guide:
[Boafo Widget Integration Guide](https://drive.google.com/file/d/1tvwK-sBZI2a4uldd6z5LD1iLblSl3WbG/view?usp=sharing)

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/GROW-YAI/hydraform.git
   cd hydraform
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy the environment example file:
   ```bash
   cp .env.example .env
   ```

4. Fill in your Boafo API key in the `.env` file:
   ```
   NEXT_PUBLIC_BOAFO_API_KEY=your_actual_api_key_here
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open your browser and navigate to the URL shown in the terminal (typically http://localhost:5173) to verify the widget loads correctly.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
