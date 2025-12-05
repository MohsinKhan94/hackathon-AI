# Physical AI & Humanoid Robotics Platform

## Project Overview
This project delivers a comprehensive platform for learning and interacting with concepts in Physical AI and Humanoid Robotics. It integrates an interactive documentation website, a sophisticated AI-powered chatbot, personalized learning insights, and an authentication system, all built to provide an engaging and educational experience.

## Features
-   **Interactive Documentation Website (Docusaurus):** A user-friendly, responsive website for accessing detailed documentation on various robotics and AI modules (ROS2, Digital Twin, Isaac Sim, VLA).
-   **AI-Powered RAG Chatbot:** A Retrieval-Augmented Generation (RAG) chatbot that provides accurate and contextual answers to user queries based on the project's documentation.
-   **Personalized Learning Insights:** Tailors learning content and provides specific insights based on the user's declared software and hardware preferences.
-   **Content Translation:** Translates documentation content into multiple languages (currently supports Urdu by default) to enhance accessibility.
-   **Authentication System:** Secure user registration and login functionality.
-   **Real-time Snake Game:** An interactive grid snake component on the homepage for engaging user experience.

## Technologies Used

### Frontend (`my-website`)
-   **Framework:** Docusaurus (React.js)
-   **Styling:** CSS Modules, Infima
-   **Authentication Client:** `better-auth/react`

### Backend (`backend`)
-   **Framework:** FastAPI (Python)
-   **AI/ML:** LangChain, Google Gemini Pro (`gemini-2.5-flash`, `text-embedding-004`)
-   **Vector Database:** Pinecone
-   **Environment Management:** `python-dotenv`

### Authentication Server (`auth-server`)
-   **Framework:** Hono (Node.js)
-   **Authentication Library:** `better-auth`
-   **CORS:** `hono/cors`

## Project Structure
```
hackathon-book/
├── auth-server/       # Node.js Hono server for authentication
│   ├── auth.ts        # Authentication logic
│   └── index.ts       # Server entry point
├── backend/           # Python FastAPI server for AI (RAG, Personalization, Translation)
│   ├── main.py        # FastAPI application, AI chains, API endpoints
│   └── ingest.py      # Script for ingesting documentation into Pinecone (assumed)
└── my-website/        # Docusaurus frontend for documentation and interactive components
    ├── src/components/# React components (Chatbot, PersonalizedInsight, GridSnake, Auth forms)
    ├── src/lib/       # Frontend utility functions (e.g., auth-client)
    ├── docs/          # Markdown documentation files
    ├── blog/          # Blog posts
    └── docusaurus.config.ts # Docusaurus configuration
```

## Setup and Installation

### Prerequisites
-   Node.js (LTS recommended)
-   Python 3.9+
-   Git
-   Google Cloud Project with Gemini API enabled
-   Pinecone account and API key

### 1. Clone the Repository
```bash
git clone https://github.com/MohsinKhan94/hackathon-AI.git
cd hackathon-AI
```

### 2. Backend Setup (`backend/`)
```bash
cd backend
python -m venv venv
./venv/bin/activate   # On Windows: .\venv\Scripts\activate
pip install -r requirements.txt
```
Create a `.env` file in the `backend/` directory with your credentials:
```
GOOGLE_API_KEY="YOUR_GEMINI_API_KEY"
PINECONE_API_KEY="YOUR_PINECONE_API_KEY"
PINECONE_ENVIRONMENT="YOUR_PINECONE_ENVIRONMENT"
PINECONE_INDEX_NAME="hackathon-chatbot" # Or your chosen index name
```
*(Note: You might need to run `ingest.py` to populate your Pinecone index with documentation content. This script is assumed to exist for data ingestion.)*

### 3. Authentication Server Setup (`auth-server/`)
```bash
cd ../auth-server
npm install
```
*(Note: Configuration for `better-auth` might be needed in `auth.ts` or environment variables.)*

### 4. Frontend Website Setup (`my-website/`)
```bash
cd ../my-website
npm install
```

## Running the Project

### 1. Start the Backend Server (`backend/`)
```bash
cd backend
./venv/bin/activate
uvicorn main:app --reload --port 8000
```
The backend will be available at `http://localhost:8000`.

### 2. Start the Authentication Server (`auth-server/`)
```bash
cd auth-server
npm run start # or node index.ts if 'start' script is not defined
```
The auth server will be available at `http://localhost:3001`.

### 3. Start the Frontend Website (`my-website/`)
```bash
cd my-website
npm run start
```
The Docusaurus website will typically open in your browser at `http://localhost:3000`.

## License
[Placeholder for License Information, e.g., MIT, Apache 2.0]
