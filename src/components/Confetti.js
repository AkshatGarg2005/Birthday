import React, { useEffect, useRef } from 'react';

function Confetti() {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    let particles = [];
    const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', 
                    '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50', 
                    '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722'];
    
    // Resize canvas to full window
    canvas.width = width;
    canvas.height = height;
    
    // Handle window resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      init(); // Reinitialize particles on resize
    };
    
    window.addEventListener('resize', handleResize);
    
    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height - height;
        this.size = Math.random() * 8 + 4;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.speed = Math.random() * 2 + 0.5;
        this.angle = Math.random() * 360;
        this.spin = Math.random() < 0.5 ? -1 : 1;
        this.spinSpeed = Math.random() * 3;
        this.shape = Math.random() < 0.3 ? 'circle' : 'rect'; // Add circle shape
        this.opacity = Math.random() * 0.6 + 0.4;
      }
      
      update() {
        this.y += this.speed;
        this.x += Math.sin(this.angle * Math.PI / 180) * 0.5; // Add slight horizontal movement
        this.angle += this.spin * this.spinSpeed;
        
        // Reset particle if it goes off screen
        if (this.y > height) {
          this.y = -this.size;
          this.x = Math.random() * width;
          this.size = Math.random() * 8 + 4;
          this.speed = Math.random() * 2 + 0.5;
        }
      }
      
      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle * Math.PI / 180);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        
        if (this.shape === 'circle') {
          // Draw circle confetti
          ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Draw rectangle confetti
          ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size / 2);
        }
        
        ctx.restore();
      }
    }
    
    // Initialize particles
    function init() {
      particles = [];
      const particleCount = Math.min(150, Math.floor(width * height / 8000));
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
        // Start with particles spread throughout the canvas
        particles[i].y = Math.random() * height;
      }
    }
    
    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      requestAnimationFrame(animate);
    }
    
    init();
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -1
      }}
    />
  );
}

export default Confetti;