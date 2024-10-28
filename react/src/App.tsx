import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Stack } from "@chakra-ui/react";
import Navbar from "./components/shared/Navbar";
import Home from "./components/pages/Home";
import Resume from "./components/pages/Resume/Resume.tsx";
import Projects from "./components/pages/Projects";
import Footer from "./components/shared/Footer";
import ProjectDetails from "./components/projects/ProjectDetails.tsx";
import MiniGames from './components/projects/miniGames/MiniGames.tsx';
import MiniGameDetails from './components/projects/miniGames/MiniGameDetails.tsx';

function App() {
    return (
        <Router>
            <Stack minH="100vh" spacing={0} align="stretch" minW="100vw">
                <Navbar />
                <Stack flex="1" overflowY="auto">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/resume" element={<Resume />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/projects/:detailsUrl" element={<ProjectDetails />} />
                        <Route path="/projects/mini-games" element={<MiniGames />} />
                        <Route path="/projects/mini-games/:detailsUrl" element={<MiniGameDetails />} />
                    </Routes>
                </Stack>
                <Footer />
            </Stack>
        </Router>
    );
}

export default App;
