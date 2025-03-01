import React, { useEffect } from 'react';
import PageHeader from './PageHeader';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

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

      document.getElementById('terms-of-service')?.appendChild(star);

      star.addEventListener('animationend', () => {
        star.remove();
      });
    };

    // Create shooting stars at random intervals
    const interval = setInterval(() => {
      if (Math.random() > 0.85) {
        createShootingStar();
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="terms-of-service" className="min-h-screen bg-black text-white relative overflow-hidden">
      <PageHeader title="Terms of Service" />
      <div className="pt-32 pb-24">
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0"
            style={{
              background: `
                radial-gradient(1px 1px at 20% 30%, rgba(255, 255, 255, 0.8) 0%, transparent 100%),
                radial-gradient(1px 1px at 40% 70%, rgba(255, 255, 255, 0.7) 0%, transparent 100%),
                radial-gradient(1px 1px at 60% 40%, rgba(255, 255, 255, 0.9) 0%, transparent 100%),
                radial-gradient(2px 2px at 70% 90%, rgba(255, 255, 255, 0.6) 0%, transparent 100%),
                radial-gradient(2px 2px at 90% 20%, rgba(255, 255, 255, 0.8) 0%, transparent 100%)
              `,
              backgroundSize: '250px 250px',
              animation: 'twinkle 8s ease-in-out infinite alternate',
            }}
          />
          
          <div className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at 50% 50%, rgba(76, 0, 255, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 20% 30%, rgba(0, 183, 255, 0.1) 0%, transparent 40%),
                radial-gradient(circle at 80% 70%, rgba(255, 0, 221, 0.1) 0%, transparent 40%)
              `,
              filter: 'blur(20px)',
              animation: 'nebulaPulse 15s ease-in-out infinite',
            }}
          />
        </div>
        <div className="grid-animation absolute inset-0" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="prose prose-invert">
            <h1 className="text-4xl font-bold mb-8 font-mono">Terms of Service</h1>
            <p className="text-gray-300 mb-8">
              These Terms of Service ("Terms") govern your access to and use of the services provided by Xerobro ("we," "us," or "our") as a user ("you" or "your"). By accessing or using our services, you agree to be bound by these Terms. If you do not agree with these Terms, please refrain from using our services.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Use of Services</h2>
              
              <h3 className="text-xl font-semibold mb-2">1.1. Scope</h3>
              <p className="text-gray-300 mb-4">
                Our services include but are not limited to digital AI automation tools, software applications, and related services provided through our website or other platforms.
              </p>

              <h3 className="text-xl font-semibold mb-2">1.2. Compliance</h3>
              <p className="text-gray-300 mb-4">
                You agree to comply with all applicable laws and regulations when using our services. You are solely responsible for ensuring that your use of our services is in compliance with applicable laws.
              </p>

              <h3 className="text-xl font-semibold mb-2">1.3. Account</h3>
              <p className="text-gray-300 mb-4">
                Some features of our services may require you to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
              <p className="text-gray-300">
                If you have any questions or concerns about these Terms, please contact us at{' '}
                <a href="mailto:info@xerobro.com" className="text-white underline hover:text-gray-300">
                  info@xerobro.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;