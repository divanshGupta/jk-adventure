import { Button } from '@/components/ui/button';
import { MapPin, Star, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white mt-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover Your Next
            <span className="block bg-gradient-to-r from-accent to-secondary bg-clip-text ">
              Adventure
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            From breathtaking tours to thrilling adventures, we'll help you create unforgettable memories 
            that will last a lifetime. Your journey begins here.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="btn-hero text-lg px-10 py-6">
              Explore Tours
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="btn-outline-ocean bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary text-lg px-10 py-6"
            >
              View Gallery
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center space-y-2">
              <div className="flex items-center space-x-2 text-accent">
                <MapPin className="w-6 h-6" />
                <span className="text-3xl font-bold">50+</span>
              </div>
              <p className="text-white/80">Destinations</p>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <div className="flex items-center space-x-2 text-accent">
                <Star className="w-6 h-6" />
                <span className="text-3xl font-bold">4.9</span>
              </div>
              <p className="text-white/80">Average Rating</p>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <div className="flex items-center space-x-2 text-accent">
                <Users className="w-6 h-6" />
                <span className="text-3xl font-bold">10K+</span>
              </div>
              <p className="text-white/80">Happy Travelers</p>
            </div>
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