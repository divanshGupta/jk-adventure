'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
const CTA = () => {
    return (
        <div className="text-center my-12">
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
                  <Link href="/contact">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
    );
};
export default CTA;