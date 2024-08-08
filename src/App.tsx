import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Stack } from "@chakra-ui/react";
import Navbar from "./components/shared/Navbar";
import Home from "./components/pages/Home";
import Resume from "./components/pages/Resume";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects";
import Footer from "./components/shared/Footer.tsx";

function App() {
    return (
        <Router>
            <Stack h="100vh">
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer/>
            </Stack>
        </Router>
    );
}

export default App;
