import React, { useRef, useEffect } from 'react';
import { initThreeJS } from './SpinTheBall.ts';

const SpinTheBall: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (canvasRef.current) {
            // Initialize Three.js with the canvas element
            const cleanup = initThreeJS(canvasRef.current);

            // Cleanup function to remove event listeners
            return () => {
                cleanup();
            };
        }
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                margin: '0',
                padding: '0',
                boxSizing: 'border-box',
                overflow: 'hidden',
                top: '0',
                left: '0',
                zIndex: 1,
                width: '100vw',
            }}
        />
    );
};

export default SpinTheBall;
