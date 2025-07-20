
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { HelpCircle, MessageCircle, Phone } from 'lucide-react';

const FAQs = () => {
  const faqCategories = [
    {
      title: "General Questions",
      icon: <HelpCircle className="h-6 w-6 text-refuel-orange" />,
      faqs: [
        {
          question: "Is Refuel legal and safe?",
          answer: "Yes, absolutely! Refuel operates under all necessary licenses and safety regulations. We comply with petroleum safety norms, have proper insurance coverage, and our delivery partners are trained in safe fuel handling practices. All our containers are certified and meet industry safety standards."
        },
        {
          question: "How do I ensure fuel quality?",
          answer: "We guarantee premium fuel quality through multiple measures: All fuel comes from certified suppliers, each delivery includes a quality certificate, we conduct regular testing, and our sealed containers prevent contamination. If you're not satisfied with the quality, we offer a 100% replacement guarantee."
        },
        {
          question: "Do you charge extra for delivery?",
          answer: "Our delivery fees are transparent and competitive. Charges range from ₹60-100 depending on quantity, with no hidden fees or surge pricing. We often run promotions offering free delivery for larger quantities or subscription plans."
        },
        {
          question: "What areas do you currently serve?",
          answer: "We currently serve Visakhapatnam and we will expand to all Tier 2 cities. We're rapidly expanding to Bangalore, Chennai, and Pune in the coming months."
        }
      ]
    },
    {
      title: "Ordering & Delivery",
      icon: <MessageCircle className="h-6 w-6 text-refuel-blue" />,
      faqs: [
        {
          question: "How quickly can you deliver fuel?",
          answer: "For emergency deliveries, we typically reach you within 15-30 minutes depending on your location and traffic conditions. Scheduled deliveries can be booked for specific time slots throughout the day. We provide real-time tracking so you know exactly when to expect us."
        },
        {
          question: "What is the minimum and maximum quantity I can order?",
          answer: "You can order anywhere from 1 liter to 5 liters per delivery. Our 1L option is perfect for emergency top-ups, while 5L is ideal for longer trips or weekly fuel needs. Larger quantities may be available for commercial customers upon request."
        },
        {
          question: "Can I schedule regular deliveries?",
          answer: "Yes! We offer subscription plans for regular deliveries - weekly, bi-weekly, or monthly. Subscribers get priority booking, 10% discount on fuel prices, free delivery, and can modify or skip deliveries as needed through our app."
        },
        {
          question: "What if I'm not available when the delivery arrives?",
          answer: "We offer flexible delivery options: You can have a trusted person receive the delivery, we can wait for up to 15 minutes at no extra charge, or you can reschedule for another time slot. We always call before arriving to confirm your availability."
        }
      ]
    },
    {
      title: "Payment & Pricing",
      icon: <Phone className="h-6 w-6 text-refuel-orange" />,
      faqs: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major payment methods: Credit/Debit cards, UPI payments (GPay, PhonePe, Paytm), Net Banking, and digital wallets. Payment is processed securely through our app, and you'll receive an instant receipt."
        },
        {
          question: "Are your fuel prices competitive?",
          answer: "Our fuel prices are dynamic and typically competitive with or below market rates. While there's a delivery fee, you save on travel costs, time, and often get better fuel quality. Subscribers enjoy additional discounts making it even more cost-effective."
        },
        {
          question: "Is there a cancellation policy?",
          answer: "You can cancel your order free of charge within 60 seconds after placing it. If you cancel between 60 seconds to 180 seconds, a small cancellation fee of ₹50 will be applied. Emergency orders cannot be cancelled once a partner is assigned to ensure fair compensation."
        }
      ]
    },
    {
      title: "Safety & Environment",
      icon: <HelpCircle className="h-6 w-6 text-refuel-blue" />,
      faqs: [
        {
          question: "Is it environmentally safe?",
          answer: "Yes, we prioritize environmental safety through: Spill-proof containers and equipment, proper disposal of any waste materials, carbon-neutral delivery routes where possible, and partnerships with eco-friendly fuel suppliers. We're working towards becoming a completely green delivery service."
        },
        {
          question: "What safety measures do you follow?",
          answer: "Our comprehensive safety protocol includes: All delivery partners are trained in fuel handling, fire safety equipment on all delivery vehicles, spill-proof certified containers, comprehensive insurance coverage, and emergency response procedures. Safety is our top priority."
        },
        {
          question: "What happens in case of spillage or accidents?",
          answer: "While rare due to our safety measures, we're fully prepared: Immediate cleanup protocols, comprehensive insurance covers any damages, 24/7 emergency response team, and we work with local authorities when necessary. Your safety and property are fully protected."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our fuel delivery service. 
            Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  {category.icon}
                  <span className="ml-3">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`item-${categoryIndex}-${faqIndex}`}>
                      <AccordionTrigger className="text-left hover:text-refuel-orange transition-colors">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-refuel-orange mb-2">15min</div>
            <p className="text-gray-600">Average Response Time</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-refuel-blue mb-2">24/7</div>
            <p className="text-gray-600">Customer Support</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-refuel-orange mb-2">98%</div>
            <p className="text-gray-600">Customer Satisfaction</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-refuel-blue mb-2">5000+</div>
            <p className="text-gray-600">Successful Deliveries</p>
          </div>
        </div>

        {/* Still Have Questions */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-refuel-blue to-refuel-orange text-white">
            <CardContent className="text-center p-12">
              <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Our friendly support team is available 24/7 to help with any questions or concerns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-refuel-blue hover:bg-gray-100">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Contact Support
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-refuel-blue">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Us Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Popular Topics */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">Popular Help Topics</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-refuel-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HelpCircle className="h-6 w-6 text-refuel-orange" />
                </div>
                <h3 className="font-semibold mb-2">How to Place an Order</h3>
                <p className="text-gray-600 text-sm">Step-by-step guide to ordering fuel</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-refuel-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-6 w-6 text-refuel-blue" />
                </div>
                <h3 className="font-semibold mb-2">Track Your Delivery</h3>
                <p className="text-gray-600 text-sm">Learn how to monitor your order status</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-refuel-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-refuel-orange" />
                </div>
                <h3 className="font-semibold mb-2">Emergency Support</h3>
                <p className="text-gray-600 text-sm">Get immediate help when you need it</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
