
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Fuel, Users, Award, Target, Heart, Zap, Shield, Clock } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Fuel className="h-8 w-8 text-refuel-orange" />,
      title: "Quality First",
      description: "We are planning to partner with certified fuel providers such as Indian Oil, HP, and Bharat Petroleum to ensure premium fuel quality. Our delivery partners carry sealed containers, and each order includes a quality certificate. We also provide a real-time density meter check at your footstep."
    },
    {
      icon: <Clock className="h-8 w-8 text-refuel-blue" />,
      title: "Reliability",
      description: "24/7 service availability with guaranteed delivery times. Your time is precious, and we respect that."
    },
    {
      icon: <Shield className="h-8 w-8 text-refuel-burgundy" />,
      title: "Safety",
      description: "All safety protocols followed with trained professionals and proper equipment for secure fuel handling."
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Customer Care",
      description: "Your satisfaction is our priority. We're here to help whenever you need us in Visakhapatnam."
    }
  ];

  const achievements = [
    "Finalist - LevUP Ideathon by Levyug",
    "Guest Speaker - Meetup with Unstoppable Women, IWN AP",
    "State Top 40, Academy for Women Entrepreneurs, Andhra Pradesh Cohort",
    "Guest Speaker - TIE Vizag, Andhra University",
    "Naaripreneur at IIM - Visakhapatnam"
  ];

  const stats = [
    { number: "500+", label: "Happy Customers", icon: <Users className="h-6 w-6" /> },
    { number: "2000+", label: "Deliveries Completed", icon: <Fuel className="h-6 w-6" /> },
    { number: "15min", label: "Average Delivery Time", icon: <Clock className="h-6 w-6" /> },
    { number: "24/7", label: "Service Availability", icon: <Zap className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Refuel</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionizing fuel delivery in Visakhapatnam with on-demand, premium quality fuel service.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To revolutionize the way people access fuel by providing convenient, reliable, 
                and quality-assured on-demand fuel delivery services. We believe that running out 
                of fuel should never be a problem that disrupts your day.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Based in Visakhapatnam, we're a student-led startup from GITAM Deemed to be University, 
                pre-incubated at Venture Development Centre, GITAM, Visakhapatnam, with big dreams and bigger 
                determination to make fuel delivery as easy as ordering food.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-refuel-orange text-white">Student-Led</Badge>
                <Badge className="bg-refuel-blue text-white">Innovation Focused</Badge>
                <Badge className="bg-refuel-burgundy text-white">Customer First</Badge>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&w=600" 
                alt="Fuel delivery service"
                className="rounded-lg shadow-lg hover-lift transition-all duration-300"
              />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">{value.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-20 bg-gray-50 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-refuel-orange rounded-full mb-4 text-white hover-scale">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-refuel-burgundy mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Recognition & Achievements</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <Award className="h-12 w-12 text-refuel-orange" />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-refuel-orange rounded-full flex-shrink-0"></div>
                      <span className="text-lg font-medium text-gray-800">{achievement}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <p className="text-lg text-refuel-burgundy font-semibold">
                    We are expanding soon to all Tier 2 cities.
                  </p>
                  <p className="text-gray-600 mt-2">
                    Our delivery partners carry a fuel density meter for live fuel quality testing at your doorstep.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Quality Assurance */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-refuel-burgundy to-refuel-burgundy-light text-white rounded-lg p-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Fuel Quality Assurance</h2>
              <p className="text-xl max-w-4xl mx-auto leading-relaxed">
                We are planning to partner with certified fuel providers such as Indian Oil, HP, and Bharat Petroleum to ensure premium fuel quality. 
                Our delivery partners carry sealed containers, and each order includes a quality certificate. We also provide a 
                real-time density meter check at your footstep.
              </p>
            </div>
          </div>
        </section>

        {/* Future Vision */}
        <section>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              To become the leading on-demand fuel delivery service across all Tier 2 cities in India, 
              making fuel shortages a thing of the past and empowering people to focus on what matters most.
            </p>
            <div className="flex items-center justify-center">
              <Target className="h-12 w-12 text-refuel-orange" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
