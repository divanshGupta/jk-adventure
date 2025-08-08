import { Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
const CallButton = () => {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href="tel:9140251061"
      className={`hidden fixed bottom-4 right-4 bg-primary text-white px-4 py-3 rounded-full shadow-lg hover:bg-primary-dark transition-all duration-300 z-50 transform active:scale-95 ${
        animate ? 'animate-bounce' : ''
      }`}
    >
      <Phone className='w-6 h-6'/>
    </a>
  );
};

export default CallButton;