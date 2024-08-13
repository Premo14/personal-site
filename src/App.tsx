import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Stack } from "@chakra-ui/react";
import Navbar from "./components/shared/Navbar";
import Home from "./components/pages/Home";
import Resume from "./components/pages/Resume";
import Projects from "./components/pages/Projects";
import Footer from "./components/shared/Footer";
import ProjectLargeCard from "./components/projects/ProjectLargeCard.tsx";
import ProjectDetails from "./components/projects/ProjectDetails.tsx";

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
                        <Route path="/project/:id" element={<ProjectLargeCard />} />
                        <Route path="/projects/:detailsUrl" element={<ProjectDetails />} />
                    </Routes>
                </Stack>
                <Footer />
            </Stack>
        </Router>
    );
}

export default App;
