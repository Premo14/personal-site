import React, { useRef, useEffect } from 'react';
import { initThreeJS } from './threeScene'; // Adjust the import path if necessary

const ThreeScene: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (canvasRef.current) {
            // Initialize Three.js with the canvas element
            const cleanup = initThreeJS(canvasRef.current);

            // Cleanup function to remove event listeners
            return () => {
                cleanup();
                // Additional cleanup if needed
            };
        }
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                margin: '0',
                padding: '10px',
                boxSizing: 'border-box',
                overflow: 'hidden',
                position: 'absolute',
                top: '0',
                left: '0',
                zIndex: 1,
            }}
        />
    );
};

export default ThreeScene;
