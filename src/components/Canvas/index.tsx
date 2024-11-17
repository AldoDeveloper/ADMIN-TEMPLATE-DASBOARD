import React, { useRef } from 'react';

interface Center {
  x: number;
  y: number;
  color: string;
  label: string;
}

const DesignThinkingCanvas: React.FC = () => {

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = 800;
    canvas.height = 400;

    // Center points for circles with their properties
    const centers: Center[] = [
      { x: 100, y: 150, color: '#1f1f1f', label: 'EMPATHISE' },
      { x: 250, y: 250, color: '#4f4f8f', label: 'DEFINE' },
      { x: 400, y: 150, color: '#3fc1c9', label: 'IDEATE' },
      { x: 550, y: 250, color: '#fc5185', label: 'PROTOTYPE' },
      { x: 700, y: 150, color: '#3ecf64', label: 'TEST' },
    ];

    // Draw lines between circles
    ctx.strokeStyle = '#888';
    ctx.lineWidth = 2;
    for (let i = 0; i < centers.length - 1; i++) {
      ctx.beginPath();
      ctx.moveTo(centers[i].x , centers[i].y);
      ctx.lineTo(centers[i + 1].x - 50, centers[i + 1].y);
      ctx.stroke();
    }

    // Draw circles and labels
    centers.forEach((center, index) => {
      // Draw circle
      ctx.beginPath();
      ctx.arc(center.x, center.y, 50, 10, 10 * Math.PI);
      ctx.fillStyle = center.color; 
      ctx.fill();

      // Draw label inside the circle
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 14px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(center.label, center.x, center.y + 5);

      // Draw additional text below the circle
      ctx.fillStyle = '#aaa';
      ctx.font = '12px Arial';
      switch (index) {
        case 0:
          ctx.fillText('Empathise to help', center.x, center.y + 70);
          ctx.fillText('define the problem', center.x, center.y + 85);
          break;
        case 1:
          ctx.fillText('Learn about users', center.x, center.y + 70);
          ctx.fillText('through testing', center.x, center.y + 85);
          break;
        case 2:
          ctx.fillText('Learn from prototypes', center.x, center.y + 70);
          ctx.fillText('to spark new ideas', center.x, center.y + 85);
          break;
        case 3:
          ctx.fillText('Tests create new ideas', center.x, center.y + 70);
          ctx.fillText('for the project', center.x, center.y + 85);
          break;
        case 4:
          ctx.fillText('Tests reveal insights', center.x, center.y + 70);
          ctx.fillText('that redefine the problem', center.x, center.y + 85);
          break;
      }
    });
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <canvas ref={canvasRef} style={{ border: '1px solid #ddd' }} />
    </div>
  );
};

export default DesignThinkingCanvas;
