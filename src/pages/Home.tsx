
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Fuel, ArrowRight, Smartphone, MapPin, CheckCircle, Clock, Phone } from 'lucide-react';

const Home = () => {
  const flowSteps = [
    {
      icon: <Fuel className="h-12 w-12 text-refuel-burgundy" />,
      title: "Out of Fuel?",
      description: "Don't panic when you run out",
      bgColor: "bg-gray-50"
    },
    {
      icon: <Smartphone className="h-12 w-12 text-refuel-burgundy" />,
      title: "Open Refuel App",
      description: "Quick and easy access",
      bgColor: "bg-gray-100"
    },
    {
      icon: <MapPin className="h-12 w-12 text-refuel-burgundy" />,
      title: "Place Order",
      description: "Select fuel type & location",
      bgColor: "bg-gray-50"
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-refuel-burgundy" />,
      title: "Order Confirmed",
      description: "Verification & assignment",
      bgColor: "bg-gray-100"
    },
    {
      icon: <Clock className="h-12 w-12 text-refuel-burgundy" />,
      title: "Delivery in Progress",
      description: "Partner on the way",
      bgColor: "bg-gray-50"
    },
    {
      icon: <Fuel className="h-12 w-12 text-refuel-burgundy" />,
      title: "Refuel Complete",
      description: "Back on the road!",
      bgColor: "bg-gray-100"
    }
  ];

  const situations = [
    {
      title: "Late Night Emergency",
      description: "Your car runs out of fuel on your way home from work at 11 PM",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&w=500"
    },
    {
      title: "Weekend Road Trip",
      description: "Planning a long drive but fuel stations are crowded",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&w=500"
    },
    {
      title: "Busy Schedule",
      description: "No time to wait in long queues at fuel stations",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&w=500"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-refuel-burgundy via-refuel-burgundy to-refuel-burgundy-light min-h-[80vh] flex items-center justify-center text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <Fuel className="h-20 w-20 mx-auto mb-6 text-gray-200 animate-float" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="block">REFUEL</span>
              <span className="text-gray-200">On-Demand</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Drive on, we've got your back! Get premium fuel delivered to your location in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/order">
                <Button size="lg" className="bg-white hover:bg-gray-100 text-refuel-burgundy px-8 py-4 text-lg font-semibold">
                  Order Fuel Now
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-refuel-burgundy px-8 py-4 text-lg">
                  How It Works
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Flow Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Fuel Emergency? We've Got You Covered!</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these simple steps when you need fuel delivered to your location
            </p>
          </div>
          
          {/* Desktop Flow */}
          <div className="hidden md:block">
            <div className="process-flow relative">
              <div className="grid grid-cols-6 gap-4 relative z-10">
                {flowSteps.map((step, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className={`${step.bgColor} p-6 rounded-full mb-4 flow-step relative`}>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-refuel-burgundy text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-center mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600 text-center">{step.description}</p>
                    {index < flowSteps.length - 1 && (
                      <ArrowRight className="absolute top-12 right-0 transform translate-x-1/2 text-refuel-burgundy animate-pulse hidden md:block" size={24} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Flow */}
          <div className="md:hidden space-y-6">
            {flowSteps.map((step, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className={`${step.bgColor} p-4 rounded-full flow-step relative flex-shrink-0`}>
                  <div className="absolute -top-2 -left-2 w-6 h-6 bg-refuel-burgundy text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toll-Free Number Section */}
      <section className="py-16 bg-refuel-burgundy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Phone className="h-16 w-16 mx-auto mb-6 text-gray-200" />
            <h2 className="text-3xl font-bold mb-4">No Signal? No Problem!</h2>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              In areas with poor network coverage, simply call our toll-free number to place your fuel order
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
              <p className="text-lg mb-2">Call us anytime, anywhere:</p>
              <a href="tel:1800-REFUEL-1" className="text-3xl font-bold text-gray-200 hover:text-white transition-colors">
                1800-REFUEL-1
              </a>
              <p className="text-sm mt-2 opacity-90">(Available 24/7)</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Refuel Does */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Refuel is an innovative on-demand fuel delivery service that brings premium quality fuel 
              directly to your vehicle, eliminating the need to visit traditional gas stations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-refuel-burgundy" />
                </div>
                <h3 className="text-xl font-semibold mb-3">24/7 Delivery</h3>
                <p className="text-gray-600">Get fuel delivered anytime, anywhere in the city</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Track Your Order</h3>
                <p className="text-gray-600">Real-time tracking of your fuel delivery</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-refuel-burgundy" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality Assured</h3>
                <p className="text-gray-600">Premium quality fuel in sealed, certified containers</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Situations Slideshow */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">When You Need Us Most</h2>
            <p className="text-xl text-gray-600">
              Life happens. We're here when traditional fuel stations aren't an option.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {situations.map((situation, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group">
                <img 
                  src={situation.image} 
                  alt={situation.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-refuel-burgundy/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">{situation.title}</h3>
                    <p className="text-sm">{situation.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-refuel-burgundy to-refuel-burgundy-light text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Never Run Out of Fuel Again?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have made the smart switch to on-demand fuel delivery.
          </p>
          <Link to="/order">
            <Button size="lg" className="bg-white hover:bg-gray-100 text-refuel-burgundy px-8 py-4 text-lg font-semibold">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
