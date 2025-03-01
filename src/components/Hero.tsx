import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Function to create a shooting star
    const createShootingStar = () => {
      const star = document.createElement('div');
      star.className = 'shooting-star';
      
      // Random starting position in top 30% of screen
      const startPos = Math.random() * 30;
      star.style.top = `${startPos}%`;
      star.style.right = '-50px';
      
      const duration = 1.5 + Math.random() * 0.5;
      star.style.animation = `shooting-star-animation ${duration}s linear`;

      document.getElementById('hero-section')?.appendChild(star);

      star.addEventListener('animationend', () => {
        star.remove();
      });
    };

    // Create shooting stars at random intervals with increased frequency
    const interval = setInterval(() => {
      if (Math.random() > 0.80) { // Increased chance to 20% from 15%
        createShootingStar();
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="hero-section" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Main content */}
          <div className="text-center lg:text-left space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white glow-text">
              <div className="relative h-[180px] md:h-[150px]">
                <TypeAnimation
                  sequence={[
                    'Automating Business Logic',
                    2000,
                    'Optimizing Workflows',
                    2000,
                    'Maximizing Efficiency',
                    2000,
                    'Scaling Operations',
                    2000,
                  ]}
                  wrapper="div"
                  speed={50}
                  className="font-mono bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent absolute top-0 left-0 w-full break-words"
                  repeat={Infinity}
                />
              </div>
            </h1>

            <p className="text-gray-400 text-lg max-w-xl">
              Harness the power of AI to transform your business operations and drive innovation forward.
            </p>

            <div className="flex justify-center lg:justify-start">
              <button 
                onClick={() => navigate('/deploy')}
                className="group bg-white text-black px-8 py-4 rounded-lg font-mono hover:bg-gray-100 transition-all flex items-center justify-center border border-white/50 glow-md hover-glow"
              >
                ./deploy.sh <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right side - Terminal */}
          <div className="w-full max-w-xl mx-auto lg:ml-auto">
            <div className="w-full bg-gray-900/80 rounded-lg border border-white/20 backdrop-blur-sm overflow-hidden glow-sm">
              {/* Terminal header */}
              <div className="bg-black/50 p-3 border-b border-white/20">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  <span className="ml-2 text-sm text-gray-400 font-mono">~/xerobro/init.sh</span>
                </div>
              </div>

              {/* Terminal content */}
              <div className="p-4 font-mono text-sm h-[250px]">
                <div className="relative h-full">
                  <TypeAnimation
                    sequence={[
                      '> Initializing core...\n',
                      1000,
                      '> Initializing core...\n> Loading systems...\n',
                      1000,
                      '> Initializing core...\n> Loading systems...\n> Configuring parameters...\n',
                      1000,
                      '> Initializing core...\n> Loading systems...\n> Configuring parameters...\n> System ready.\n',
                      1000,
                    ]}
                    wrapper="pre"
                    speed={50}
                    className="text-white/80 whitespace-pre-wrap absolute top-0 left-0"
                    repeat={1}
                  />
                  <div className="text-white/80 absolute bottom-0 left-0">
                    $ <span className="animate-pulse">_</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;