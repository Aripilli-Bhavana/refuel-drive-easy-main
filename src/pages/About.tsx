
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const achievements = [
    "Finalist at LevUP Ideathon 2024",
    "Naaripreneur @ IIM Visakhapatnam",
    "AWE Cohort Participant",
    "Student Innovation Award Winner"
  ];

  const team = [
    {
      name: "Student Founders",
      role: "Passionate about solving real-world problems",
      description: "A team of dedicated students who identified the gap in traditional fuel delivery"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Refuel</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From a student idea to a revolutionary fuel delivery service
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-refuel-blue">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                To revolutionize the fuel industry by making fuel delivery as convenient as ordering food online. 
                We envision a world where running out of fuel is never a worry, and where quality fuel is always 
                just a tap away.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-refuel-orange">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                To provide reliable, convenient, and quality fuel delivery services to individual vehicle owners 
                and urban commuters, eliminating the hassle of traditional gas stations while ensuring safety 
                and environmental responsibility.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Journey Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-refuel-orange rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">The Problem</h3>
                    <p className="text-gray-600">
                      As students, we constantly faced the frustration of running out of fuel at inconvenient times - 
                      late nights, during exams, or when stations were overcrowded. We realized this was a universal problem.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-refuel-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">The Idea</h3>
                    <p className="text-gray-600">
                      Drawing inspiration from food delivery apps, we conceptualized on-demand fuel delivery. 
                      Why should fuel be any different from other essentials that can be delivered?
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-refuel-orange rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">The Validation</h3>
                    <p className="text-gray-600">
                      Through extensive research and surveys, we discovered that 78% of urban commuters have 
                      experienced fuel-related inconveniences, validating our solution.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-refuel-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">The Launch</h3>
                    <p className="text-gray-600">
                      With support from various incubators and competitions, we're now ready to launch Refuel 
                      and transform how people think about fuel delivery.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Achievements</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {achievements.map((achievement, index) => (
              <Badge key={index} variant="secondary" className="text-lg py-2 px-4 bg-refuel-orange/10 text-refuel-orange hover:bg-refuel-orange/20">
                {achievement}
              </Badge>
            ))}
          </div>
        </section>

        {/* Team */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">Meet the Team</h2>
          <div className="max-w-2xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-refuel-blue to-refuel-orange rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">RF</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-refuel-orange font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
