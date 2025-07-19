
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-refuel-orange" />,
      title: "Phone",
      details: ["1800 000 000", "1800 000 000"],
      availability: "24/7 Emergency Support"
    },
    {
      icon: <Mail className="h-6 w-6 text-refuel-blue" />,
      title: "Email",
      details: ["support@refuel.com", "emergency@refuel.com"],
      availability: "Response within 24 hours"
    },
    {
      icon: <MapPin className="h-6 w-6 text-refuel-orange" />,
      title: "Address",
      details: ["Visakhapatnam, Andhra Pradesh, India"],
      availability: "Mon-Sat: 9 AM - 6 PM"
    },
    {
      icon: <Clock className="h-6 w-6 text-refuel-blue" />,
      title: "Business Hours",
      details: ["Delivery: 24/7", "Support: 24/7"],
      availability: "Always available for emergencies"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions or need support? We're here to help 24/7. Reach out to us anytime.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="What is this regarding?"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help you..."
                      className="min-h-[120px]"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-refuel-orange hover:bg-refuel-orange/90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 mt-1">{info.icon}</div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600">{detail}</p>
                        ))}
                        <p className="text-sm text-refuel-blue mt-1">{info.availability}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Support */}
            <Card className="bg-gradient-to-r from-refuel-blue to-refuel-orange text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Emergency Support</h3>
                <p className="mb-4">
                  Need immediate assistance? Our emergency support team is available 24/7 
                  to help with urgent fuel delivery requests.
                </p>
                <div className="space-y-2">
                  <Button variant="secondary" className="w-full bg-white text-refuel-blue #f3f4f6 hover:bg-burgandy-100">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Emergency Line
                  </Button>
                  <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-refuel-blue">
                    <Mail className="h-4 w-4 mr-2" />
                    Email Emergency Support
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Operating Areas */}
            <Card>
              <CardHeader>
                <CardTitle>Service Areas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-refuel-orange">Currently Serving:</h4>
                    <ul className="text-gray-600 mt-2 space-y-1">
                      <li>Visakhapatnam, Andhra Pradesh</li>
                      <li>Expanding to all Tier 2 Colleges</li>
                      
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-refuel-blue">Expanding Soon:</h4>
                    <ul className="text-gray-600 mt-2 space-y-1">
                      <li>• Bangalore</li>
                      <li>• Chennai</li>
                      <li>• Pune</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16">
          <Card>
            <CardContent className="p-0">
              <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">Interactive Map Coming Soon</p>
                  <p className="text-sm text-gray-500">Find our service locations and coverage areas</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
