'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Car, Mountain, Star, Clock, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Tour Packages',
      description: 'Discover amazing destinations with our carefully curated tour packages. From cultural experiences to scenic landscapes.',
      icon: MapPin,
      features: ['Expert Guides', 'All Inclusive', 'Group Discounts'],
      price: 'From $299',
      rating: 4.9,
      reviews: 156,
      gradient: 'bg-ocean-gradient',
    },
    {
      id: 2,
      title: 'Taxi Service',
      description: 'Reliable and comfortable transportation to get you anywhere you need to go. Professional drivers, clean vehicles.',
      icon: Car,
      features: ['24/7 Available', 'GPS Tracking', 'Fixed Rates'],
      price: 'From $25',
      rating: 4.8,
      reviews: 342,
      gradient: 'bg-sunset-gradient',
    },
    {
      id: 3,
      title: 'Adventure Sports',
      description: 'Get your adrenaline pumping with our exciting adventure sports activities. Safety equipment and training included.',
      icon: Mountain,
      features: ['Safety First', 'All Skill Levels', 'Equipment Included'],
      price: 'From $89',
      rating: 4.9,
      reviews: 89,
      gradient: 'bg-adventure-gradient',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our wide range of services designed to make your travel experience unforgettable. 
            Each service comes with our guarantee of quality and customer satisfaction.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.id} className="card-service group cursor-pointer">
                {/* Service Header with Gradient */}
                <div className={`h-32 ${service.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-6 text-white">
                    <IconComponent className="w-8 h-8 mb-2" />
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="font-semibold">{service.rating}</span>
                      <span className="text-sm opacity-80">({service.reviews})</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-6 text-white">
                    <span className="text-2xl font-bold">{service.price}</span>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button className="btn-adventure flex-1">
                      Book Now
                    </Button>
                    <Button variant="outline" className="btn-outline-ocean flex-1">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-medium p-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Ready to Start Your Adventure?
                </h3>
                <p className="text-muted-foreground">
                  Join thousands of satisfied customers and create memories that last a lifetime.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-hero">
                  View All Services
                </Button>
                <Button variant="outline" className="btn-outline-ocean">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;