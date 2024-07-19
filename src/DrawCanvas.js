// src/DrawCanvas.js
import React, { useRef, useState, useEffect } from 'react';

const DrawCanvas = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [positions, setPositions] = useState([]);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    setIsDrawing(true);
    setPositions([{ x: offsetX, y: offsetY }]);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = nativeEvent;
    const newPos = { x: offsetX, y: offsetY };
    setPositions((prevPositions) => [...prevPositions, newPos]);
    console.log(newPos);  // Log the position
    const context = canvasRef.current.getContext('2d');
    context.strokeStyle = 'black';
    context.lineWidth = 2;
    context.lineTo(offsetX, offsetY);
    context.stroke();
    context.beginPath();
    context.moveTo(offsetX, offsetY);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    const context = canvasRef.current.getContext('2d');
    context.closePath();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const context = canvas.getContext('2d');
    context.lineCap = 'round';
    context.lineJoin = 'round';
  }, []);

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={stopDrawing}
      onMouseLeave={stopDrawing}
    />
  );
};

export default DrawCanvas;
