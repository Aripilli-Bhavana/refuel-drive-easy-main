
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Fuel, ArrowDown, Map } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Fuel className="h-12 w-12 text-refuel-orange" />,
      title: "Emergency Fuel Delivery",
      description: "Stuck with an empty tank? Get emergency fuel delivered within 15-30 minutes",
      features: ["Available 24/7", "Priority delivery", "Real-time tracking", "Quick emergency service"],
      price: "Fuel cost + delivery charges",
      popular: true
    },
    {
      icon: <ArrowDown className="h-12 w-12 text-refuel-blue" />,
      title: "Scheduled Delivery",
      description: "Plan ahead and schedule your fuel delivery for a convenient time",
      features: ["Choose date & time", "Recurring deliveries", "Advance booking", "Up to 5L capacity"],
      price: "Fuel cost + delivery charges",
      popular: false
    },
    {
      icon: <Map className="h-12 w-12 text-refuel-orange" />,
      title: "Subscription Plans",
      description: "Regular fuel deliveries with exclusive benefits and discounts",
      features: ["Monthly/Weekly plans", "10% discount on fuel", "Priority support", "Free delivery"],
      price: "Plan starting at ₹599/year",
      popular: false
    }
  ];

  const fuelTypes = [
    {
      name: "Premium Petrol",
      description: "High-quality unleaded petrol for optimal engine performance",
      octane: "91-95 Octane",
      available: true
    },
    {
      name: "Regular Petrol",
      description: "Standard unleaded petrol for everyday driving needs",
      octane: "87-91 Octane", 
      available: true
    },
    {
      name: "Diesel",
      description: "Premium diesel fuel for diesel vehicles and generators",
      octane: "High Cetane Rating",
      available: true
    },
    {
      name: "Premium Diesel",
      description: "Ultra-low sulfur diesel for modern diesel engines",
      octane: "Ultra-Low Sulfur",
      available: false
    }
  ];

  const deliveryOptions = [
    {
      quantity: "1 Litre",
      container: "Sealed Can",
      useCase: "Emergency top-up",
      price: "Current market rate"
    },
    {
      quantity: "2 Litres", 
      container: "Sealed Can",
      useCase: "Short distance travel",
      price: "Current market rate"
    },
    {
      quantity: "3 Litres",
      container: "Sealed Can", 
      useCase: "Daily commute",
      price: "Current market rate"
    },
    {
      quantity: "4 Litres",
      container: "Certified Container",
      useCase: "Extended travel",
      price: "Current market rate"
    },
    {
      quantity: "5 Litres",
      container: "Certified Container",
      useCase: "Long distance/Weekend",
      price: "Current market rate"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive fuel delivery solutions designed for your convenience and peace of mind
          </p>
        </div>

        {/* Main Services */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Service</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`relative hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${service.popular ? 'ring-2 ring-refuel-orange' : ''}`}>
                {service.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-refuel-orange text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div className="mb-4 flex justify-center">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center justify-center">
                        <span className="w-2 h-2 bg-refuel-orange rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-lg font-semibold text-refuel-blue mb-4">{service.price}</div>
                  <Link to="/order">
                    <Button className="w-full bg-refuel-orange hover:bg-refuel-orange/90">
                      Select Service
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Fuel Types */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Available Fuel Types</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {fuelTypes.map((fuel, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow duration-300 ${!fuel.available ? 'opacity-60' : ''}`}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold">{fuel.name}</h3>
                    <Badge variant={fuel.available ? "default" : "secondary"} className={fuel.available ? "bg-green-100 text-green-800" : ""}>
                      {fuel.available ? "Available" : "Coming Soon"}
                    </Badge>
                  </div>
                  <p className="text-gray-600 mb-2">{fuel.description}</p>
                  <p className="text-sm text-refuel-blue font-medium">{fuel.octane}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Delivery Options */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Delivery Quantities & Pricing</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryOptions.map((option, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 text-center">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-refuel-orange mb-2">{option.quantity}</div>
                  <p className="text-sm text-gray-600 mb-2">{option.container}</p>
                  <p className="text-sm text-gray-600 mb-4">{option.useCase}</p>
                  <div className="text-lg font-semibold text-refuel-blue">{option.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-sm text-gray-600">
              * Fuel prices are dynamic and based on current market rates. Delivery charges are separate from fuel costs.
            </p>
          </div>
        </section>

        {/* Additional Services */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Additional Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <Fuel className="h-12 w-12 text-refuel-orange mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Quality Testing</h3>
                <p className="text-gray-600">Every fuel delivery comes with a quality certificate and testing report</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <Map className="h-12 w-12 text-refuel-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">GPS Tracking</h3>
                <p className="text-gray-600">Real-time tracking of your delivery partner from dispatch to arrival</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <ArrowDown className="h-12 w-12 text-refuel-orange mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Insurance Coverage</h3>
                <p className="text-gray-600">All deliveries are fully insured for your peace of mind</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-refuel-blue to-refuel-orange rounded-lg p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Choose the service that best fits your needs and experience the convenience of on-demand fuel delivery.
          </p>
          <Link to="/order">
            <Button size="lg" className="bg-white text-refuel-blue hover:bg-gray-100 px-8 py-4 text-lg">
              Order Fuel Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
