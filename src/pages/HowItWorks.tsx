
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowDown, Fuel, MapPin, Smartphone, CheckCircle, Clock } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Place Your Order",
      description: "Open the Refuel app or website, select your fuel type, quantity (1L-5L), and enter your location",
      icon: <Smartphone className="h-8 w-8" />,
      detail: "Choose from premium petrol or diesel, specify the exact amount you need, and provide your precise location"
    },
    {
      number: 2,
      title: "Partner Gets Notified",
      description: "Our nearest delivery partner receives your order instantly and prepares for delivery",
      icon: <MapPin className="h-8 w-8" />,
      detail: "Our smart algorithm assigns the closest available partner with verified fuel containers"
    },
    {
      number: 3,
      title: "Real-time Tracking",
      description: "Track your delivery partner's location in real-time as they head to your location",
      icon: <MapPin className="h-8 w-8" />,
      detail: "Get live updates with ETA, partner details, and contact information"
    },
    {
      number: 4,
      title: "Safe Fuel Dispensing",
      description: "Our partner arrives with sealed, certified fuel containers and safely dispenses fuel into your vehicle",
      icon: <Fuel className="h-8 w-8" />,
      detail: "All safety protocols followed with spill-proof equipment and environmental safety measures"
    },
    {
      number: 5,
      title: "Order Confirmation",
      description: "Receive confirmation, payment receipt, and quality assurance certificate",
      icon: <CheckCircle className="h-8 w-8" />,
      detail: "Digital receipt with fuel quality report and feedback option for continuous improvement"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">How Refuel Works</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting fuel delivered to your location is as easy as 1-2-3-4-5. Here's how our seamless process works.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden md:block">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-refuel-burgundy/20"></div>
            {steps.map((step, index) => (
              <div key={index} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className={`flex items-center mb-4 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                        <div className="text-refuel-burgundy mr-3">{step.icon}</div>
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-3">{step.description}</p>
                      <p className="text-sm text-gray-500">{step.detail}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-refuel-burgundy rounded-full flex items-center justify-center z-10">
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden">
            <div className="absolute left-6 top-0 h-full w-1 bg-refuel-burgundy/20"></div>
            {steps.map((step, index) => (
              <div key={index} className="relative pl-16 mb-12">
                <div className="absolute left-0 w-12 h-12 bg-refuel-burgundy rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{step.number}</span>
                </div>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="text-refuel-burgundy mr-3">{step.icon}</div>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-3">{step.description}</p>
                    <p className="text-sm text-gray-500">{step.detail}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <section className="mt-20 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Our Process Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-refuel-burgundy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Fuel className="h-8 w-8 text-refuel-burgundy" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality Assured</h3>
                <p className="text-gray-600">All fuel comes in sealed, certified containers with quality certificates</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-refuel-gray/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-refuel-gray" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Real-time Tracking</h3>
                <p className="text-gray-600">Know exactly when your fuel will arrive with live GPS tracking</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-refuel-burgundy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-refuel-burgundy" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Safe & Secure</h3>
                <p className="text-gray-600">Trained professionals follow all safety protocols for fuel handling</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center bg-gray-50 rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the Future of Fuel Delivery?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have made the switch to convenient, reliable fuel delivery.
          </p>
          <Link to="/order">
            <Button size="lg" className="bg-refuel-burgundy hover:bg-refuel-burgundy-light text-white px-8 py-4 text-lg">
              Order Your First Delivery
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
