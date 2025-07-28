import { Button } from '@/components/ui/button';
import { MapPin, Star, Users } from 'lucide-react';
import Link from 'next/link';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'], // Optional: Specify font weights if needed
});

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mb-4">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white mt-32 md:mt-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
            Discover Your Next <br />
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              Adventure
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/85 max-w-3xl mx-auto mb-8 leading-relaxed">
            From breathtaking tours to thrilling adventures, create unforgettable memories that last a lifetime.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="btn-hero text-lg px-8 py-4 shadow-lg hover:scale-105 transition duration-200">
              Explore Tours
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="btn-outline-ocean text-white bg-white/10 backdrop-blur-sm border-white/30 hover:bg-white hover:text-primary hover:border-white text-lg px-8 py-4 shadow-lg transition duration-200"
            >
              <Link href="/gallery">
                View Gallery
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
            {[
              { icon: MapPin, label: 'Destinations', value: '50+' },
              { icon: Star, label: 'Avg Rating', value: '4.9' },
              { icon: Users, label: 'Happy Travelers', value: '10K+' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex flex-col items-center text-white/90">
                <div className="flex items-center space-x-2 text-accent mb-1">
                  <Icon className="w-6 h-6" />
                  <span className="text-2xl font-semibold">{value}</span>
                </div>
                <p className="text-sm tracking-wide">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      {/* <div className="absolute bottom-10 left-10 hidden lg:block animate-float">
        <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
          <MapPin className="w-8 h-8 text-white" />
        </div>
      </div>
      
      <div className="absolute top-1/3 right-10 hidden lg:block animate-float" style={{ animationDelay: '2s' }}>
        <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
          <Star className="w-8 h-8 text-white" />
        </div>
      </div> */}
    </section>
  );
};

export default Hero;