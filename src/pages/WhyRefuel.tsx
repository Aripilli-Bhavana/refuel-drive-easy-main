
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, Fuel, Map } from 'lucide-react';

const WhyRefuel = () => {
  const benefits = [
    {
      icon: <Fuel className="h-12 w-12 text-refuel-orange" />,
      title: "24/7 Availability",
      description: "Get fuel delivered any time of day or night, even when traditional stations are closed",
      highlight: "Never worry about station hours again"
    },
    {
      icon: <Map className="h-12 w-12 text-refuel-orange" />,
      title: "No More Queues",
      description: "Skip the long lines and waiting times at crowded fuel stations",
      highlight: "Save 15-30 minutes per fuel stop"
    },
    {
      icon: <ArrowDown className="h-12 w-12 text-refuel-orange" />,
      title: "Verified Quality",
      description: "Premium fuel with quality certificates and regular testing",
      highlight: "Better engine performance guaranteed"
    },
    {
      icon: <Fuel className="h-12 w-12 text-refuel-orange" />,
      title: "App Convenience",
      description: "Order with just a few taps from anywhere, anytime",
      highlight: "Easier than ordering food"
    },
    {
      icon: <Map className="h-12 w-12 text-refuel-orange" />,
      title: "Safety First",
      description: "Professional handling with all safety protocols and insurance",
      highlight: "Zero safety incidents to date"
    },
    {
      icon: <ArrowDown className="h-12 w-12 text-refuel-orange" />,
      title: "Competitive Pricing",
      description: "Transparent pricing with no hidden charges or peak hour rates",
      highlight: "Often cheaper than station prices"
    }
  ];

  const comparison = [
    {
      aspect: "Availability",
      traditional: "Limited hours (6 AM - 10 PM typically)",
      refuel: "24/7 availability, even holidays"
    },
    {
      aspect: "Waiting Time",
      traditional: "5-30 minutes in queues",
      refuel: "0 minutes - delivered to you"
    },
    {
      aspect: "Location Dependency",
      traditional: "Must drive to specific locations",
      refuel: "Delivered anywhere in the city"
    },
    {
      aspect: "Fuel Quality",
      traditional: "Variable, no transparency",
      refuel: "Certified quality with reports"
    },
    {
      aspect: "Payment",
      traditional: "Cash/Card at station",
      refuel: "Multiple digital payment options"
    },
    {
      aspect: "Safety",
      traditional: "Self-service risks",
      refuel: "Professional trained handlers"
    },
    {
      aspect: "Convenience",
      traditional: "Plan trips around fuel stops",
      refuel: "Fuel comes to you, no planning needed"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Why Choose Refuel?</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the advantages that make Refuel the smart choice for modern fuel delivery
          </p>
        </div>

        {/* Benefits Grid */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 mb-4">{benefit.description}</p>
                  <Badge variant="secondary" className="bg-refuel-orange/10 text-refuel-orange">
                    {benefit.highlight}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Refuel vs Traditional Gas Stations</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-gray-900">Aspect</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-600">Traditional Gas Stations</th>
                    <th className="px-6 py-4 text-left font-semibold text-refuel-orange">Refuel Delivery</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-medium text-gray-900">{item.aspect}</td>
                      <td className="px-6 py-4 text-gray-600">{item.traditional}</td>
                      <td className="px-6 py-4 text-refuel-orange font-medium">{item.refuel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Why Customers Love Us</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-refuel-orange mb-2">98%</div>
              <p className="text-gray-600">Customer Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-refuel-blue mb-2">15min</div>
              <p className="text-gray-600">Average Delivery Time</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-refuel-orange mb-2">24/7</div>
              <p className="text-gray-600">Service Availability</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-refuel-blue mb-2">100%</div>
              <p className="text-gray-600">Quality Guaranteed</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-600 italic">
                    "Saved my day when I ran out of fuel at midnight. Quick, professional, and convenient!"
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Rahul M.</p>
                  <p className="text-sm text-gray-500">Software Engineer</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-600 italic">
                    "No more waiting in long queues! The fuel quality is excellent and delivery is always on time."
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Priya S.</p>
                  <p className="text-sm text-gray-500">Marketing Manager</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-600 italic">
                    "Game changer for busy professionals. I order fuel like I order food - so convenient!"
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Amit K.</p>
                  <p className="text-sm text-gray-500">Entrepreneur</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhyRefuel;
