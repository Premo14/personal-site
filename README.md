# React + Vite
# personal-site

---

This repository contains the code for my personal website. This site serves as a showcase of my skills, projects, and professional background.

### Tools Used
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [ChakraUI](https://github.com/chakra-ui/chakra-ui/)
- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)

# Getting Started
 
***

### Running Locally With Docker

1. **Install Prerequisites**:
   - [Docker](https://www.docker.com/): Ensure that Docker is installed on your system. Docker provides the tools needed to build and run Docker containers. You can download and install Docker Desktop from the [official installation page](https://docs.docker.com/engine/install/) for your operating system (Windows, macOS, or Linux). Follow the installation instructions provided on Docker's website.


2. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name

3. **Build the Docker Image**:
   ```bash
   docker build -t my-react-app .

4. **Run the Docker Container**:
    ```bash
   docker run -d -p 8080:80 my-react-app

### Running Locally Without Docker

1. **Install Prerequisites**:
   - [Node.js](https://nodejs.org/): Ensure that Node.js is installed on your system. Node.js includes [npm](https://www.npmjs.com/) (Node Package Manager), which is required to manage project dependencies. You can download and install it from the [official installation page](https://nodejs.org/en/download/package-manager). Make sure you have a version compatible with your project (usually the latest LTS version is recommended).

2. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   
3. **Install Dependencies**:
    ```bash
   npm install

4. **Run the Development Server**:
   ```bash
   npm run dev
