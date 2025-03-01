import React, { useEffect } from 'react';
import PageHeader from './PageHeader';

const PrivacyPolicy = () => {
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

      document.getElementById('privacy-policy')?.appendChild(star);

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
    <div id="privacy-policy" className="min-h-screen bg-black text-white relative overflow-hidden">
      <PageHeader title="Privacy Policy" />
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
            <h1 className="text-4xl font-bold mb-8 font-mono">Privacy Policy</h1>
            <p className="text-gray-300 mb-8">
              Xerobro ("us," "we," or "our") is committed to protecting the privacy and security of your personal information. This Privacy Policy describes how we collect, use, and disclose your personal information when you visit our website or engage with our digital AI automation services.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold mb-2">1.1. Personal Information</h3>
              <p className="text-gray-300 mb-4">
                We collect contact information such as name, email address, and phone number when you voluntarily provide it to us. This information is used to communicate with you about our products, services, and promotions.
              </p>

              <h3 className="text-xl font-semibold mb-2">1.2. Company Information</h3>
              <p className="text-gray-300 mb-4">
                Company information, including company name and position, may be collected when provided by you. This data helps us understand our user base and tailor our services accordingly.
              </p>

              <h3 className="text-xl font-semibold mb-2">1.3. Payment Information</h3>
              <p className="text-gray-300 mb-4">
                When you make purchases or transactions, we collect payment information such as credit card details. This data is used solely for processing payments and is securely handled in compliance with industry standards.
              </p>

              <h3 className="text-xl font-semibold mb-2">1.4. Usage Data</h3>
              <p className="text-gray-300 mb-4">
                We automatically collect usage data, including website interactions and product usage data, to analyze trends and improve our products and services.
              </p>

              <h3 className="text-xl font-semibold mb-2">1.5. Technical Information</h3>
              <p className="text-gray-300 mb-4">
                Technical information such as IP address and device information may be collected automatically to ensure the security and functionality of our website and services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Use of Information</h2>
              
              <h3 className="text-xl font-semibold mb-2">2.1. Service Provision</h3>
              <p className="text-gray-300 mb-4">
                We use the information collected to provide and maintain our services, including customer support and account management.
              </p>

              <h3 className="text-xl font-semibold mb-2">2.2. Communication</h3>
              <p className="text-gray-300 mb-4">
                Your contact information may be used to communicate with you about updates, promotions, and relevant information regarding our products and services.
              </p>

              <h3 className="text-xl font-semibold mb-2">2.3. Transaction Processing</h3>
              <p className="text-gray-300 mb-4">
                Payment information is utilised solely for processing transactions and is securely handled in compliance with applicable laws and regulations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Contact Information</h2>
              <p className="text-gray-300">
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at{' '}
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

export default PrivacyPolicy;