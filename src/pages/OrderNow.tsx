
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Fuel, Map, ArrowDown } from 'lucide-react';

const OrderNow = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fuelType: '',
    quantity: '',
    serviceType: '',
    address: '',
    landmark: '',
    phoneNumber: '',
    timeSlot: '',
    specialInstructions: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fuelType || !formData.quantity || !formData.address || !formData.phoneNumber) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Simulate order submission
    toast({
      title: "Order Placed Successfully!",
      description: "We'll send you a confirmation SMS shortly. Your delivery partner will be assigned within 5 minutes.",
    });

    // Reset form
    setFormData({
      fuelType: '',
      quantity: '',
      serviceType: '',
      address: '',
      landmark: '',
      phoneNumber: '',
      timeSlot: '',
      specialInstructions: ''
    });
  };

  const fuelTypes = [
    { value: 'premium-petrol', label: 'Premium Petrol (91-95 Octane)', price: '₹105/L' },
    { value: 'regular-petrol', label: 'Regular Petrol (87-91 Octane)', price: '₹98/L' },
    { value: 'diesel', label: 'Diesel (High Cetane)', price: '₹89/L' }
  ];

  const quantities = [
    { value: '1', label: '1 Liter', deliveryFee: '₹150' },
    { value: '2', label: '2 Liters', deliveryFee: '₹130' },
    { value: '3', label: '3 Liters', deliveryFee: '₹120' },
    { value: '5', label: '5 Liters', deliveryFee: '₹100' }
  ];

  const serviceTypes = [
    { value: 'emergency', label: 'Emergency Delivery (15-30 mins)', icon: <Fuel className="h-4 w-4" /> },
    { value: 'scheduled', label: 'Scheduled Delivery', icon: <ArrowDown className="h-4 w-4" /> }
  ];

  const timeSlots = [
    '09:00 - 11:00', '11:00 - 13:00', '13:00 - 15:00', 
    '15:00 - 17:00', '17:00 - 19:00', '19:00 - 21:00'
  ];

  const calculateTotal = () => {
    const selectedFuel = fuelTypes.find(f => f.value === formData.fuelType);
    const selectedQuantity = quantities.find(q => q.value === formData.quantity);
    
    if (!selectedFuel || !selectedQuantity) return { fuel: 0, delivery: 0, total: 0 };
    
    const fuelPrice = parseInt(selectedFuel.price.replace('₹', '').replace('/L', ''));
    const deliveryFee = parseInt(selectedQuantity.deliveryFee.replace('₹', ''));
    const fuelCost = fuelPrice * parseInt(formData.quantity);
    
    return {
      fuel: fuelCost,
      delivery: deliveryFee,
      total: fuelCost + deliveryFee
    };
  };

  const pricing = calculateTotal();

  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Order Fuel Delivery</h1>
          <p className="text-xl text-gray-600">
            Get premium fuel delivered to your location in minutes
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Order Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Fuel className="h-6 w-6 text-refuel-orange mr-2" />
                  Order Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Fuel Type */}
                  <div>
                    <Label htmlFor="fuelType">Fuel Type *</Label>
                    <Select value={formData.fuelType} onValueChange={(value) => handleInputChange('fuelType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select fuel type" />
                      </SelectTrigger>
                      <SelectContent>
                        {fuelTypes.map((fuel) => (
                          <SelectItem key={fuel.value} value={fuel.value}>
                            <div className="flex justify-between items-center w-full">
                              <span>{fuel.label}</span>
                              <Badge variant="secondary" className="ml-2">{fuel.price}</Badge>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Quantity */}
                  <div>
                    <Label htmlFor="quantity">Quantity *</Label>
                    <Select value={formData.quantity} onValueChange={(value) => handleInputChange('quantity', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select quantity" />
                      </SelectTrigger>
                      <SelectContent>
                        {quantities.map((qty) => (
                          <SelectItem key={qty.value} value={qty.value}>
                            <div className="flex justify-between items-center w-full">
                              <span>{qty.label}</span>
                              <Badge variant="outline" className="ml-2">Delivery: {qty.deliveryFee}</Badge>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Service Type */}
                  <div>
                    <Label htmlFor="serviceType">Service Type *</Label>
                    <Select value={formData.serviceType} onValueChange={(value) => handleInputChange('serviceType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceTypes.map((service) => (
                          <SelectItem key={service.value} value={service.value}>
                            <div className="flex items-center">
                              {service.icon}
                              <span className="ml-2">{service.label}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Time Slot (if scheduled) */}
                  {formData.serviceType === 'scheduled' && (
                    <div>
                      <Label htmlFor="timeSlot">Preferred Time Slot</Label>
                      <Select value={formData.timeSlot} onValueChange={(value) => handleInputChange('timeSlot', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time slot" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((slot) => (
                            <SelectItem key={slot} value={slot}>
                              {slot}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  {/* Delivery Address */}
                  <div>
                    <Label htmlFor="address">Delivery Address *</Label>
                    <Textarea
                      id="address"
                      placeholder="Enter your complete address with area, city, and pincode"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      className="min-h-[80px]"
                    />
                  </div>

                  {/* Landmark */}
                  <div>
                    <Label htmlFor="landmark">Nearby Landmark</Label>
                    <Input
                      id="landmark"
                      placeholder="e.g., Near City Mall, Opposite Metro Station"
                      value={formData.landmark}
                      onChange={(e) => handleInputChange('landmark', e.target.value)}
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <Label htmlFor="phoneNumber">Phone Number *</Label>
                    <Input
                      id="phoneNumber"
                      type="tel"
                      placeholder="Enter your mobile number"
                      value={formData.phoneNumber}
                      onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                    />
                  </div>

                  {/* Special Instructions */}
                  <div>
                    <Label htmlFor="specialInstructions">Special Instructions</Label>
                    <Textarea
                      id="specialInstructions"
                      placeholder="Any specific instructions for the delivery partner"
                      value={formData.specialInstructions}
                      onChange={(e) => handleInputChange('specialInstructions', e.target.value)}
                    />
                  </div>

                  {/* Submit Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Button type="submit" className="flex-1 bg-refuel-orange hover:bg-refuel-orange/90">
                      Place Order
                    </Button>
                    <Button type="button" variant="outline" className="flex-1" onClick={() => window.location.reload()}>
                      Clear Form
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Map className="h-6 w-6 text-refuel-blue mr-2" />
                  Order Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {formData.fuelType && formData.quantity ? (
                  <>
                    <div className="flex justify-between">
                      <span>Fuel Type:</span>
                      <span className="font-medium">
                        {fuelTypes.find(f => f.value === formData.fuelType)?.label.split(' (')[0]}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Quantity:</span>
                      <span className="font-medium">{formData.quantity}L</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Service:</span>
                      <span className="font-medium">
                        {formData.serviceType === 'emergency' ? 'Emergency' : 'Scheduled'}
                      </span>
                    </div>
                    <hr />
                    <div className="flex justify-between">
                      <span>Fuel Cost:</span>
                      <span>₹{pricing.fuel}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery Fee:</span>
                      <span>₹{pricing.delivery}</span>
                    </div>
                    <hr />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total:</span>
                      <span className="text-refuel-orange">₹{pricing.total}</span>
                    </div>
                  </>
                ) : (
                  <p className="text-gray-500 text-center py-8">
                    Select fuel type and quantity to see pricing
                  </p>
                )}

                {/* Service Features */}
                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-semibold mb-3">What's Included:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Quality certified fuel
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Real-time GPS tracking
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Professional delivery
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Insurance coverage
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderNow;
