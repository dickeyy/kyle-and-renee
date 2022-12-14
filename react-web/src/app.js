import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { useColorMode, useColorModeValue } from '@chakra-ui/react';

// Pages
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';

export default function App() {

    const { toggleColorMode } = useColorMode();
    const text = useColorModeValue('dark', 'light');
    
    React.useEffect(() => {
        if (text === 'dark') {
            toggleColorMode()
        }
    });

    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<HomePage />} />
                <Route path="/gallery" element={<GalleryPage />} />

            </Routes>
        </BrowserRouter>
    );
};
