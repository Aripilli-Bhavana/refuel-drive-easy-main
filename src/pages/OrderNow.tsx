
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Fuel, Map, ArrowDown, User, LogIn } from 'lucide-react';

const OrderNow = () => {
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [authData, setAuthData] = useState({
    email: '',
    password: '',
    name: '',
    phone: ''
  });
  
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

  const handleAuthInputChange = (field: string, value: string) => {
    setAuthData(prev => ({ ...prev, [field]: value }));
  };

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate authentication
    if (authMode === 'signin') {
      // Admin credentials check
      if (authData.email === 'admin@refuel.com' && authData.password === 'admin123') {
        setIsLoggedIn(true);
        setShowAuth(false);
        toast({
          title: "Welcome Admin!",
          description: "You have successfully signed in.",
        });
      } else {
        toast({
          title: "Sign In Successful",
          description: "Welcome back! You can now place your order.",
        });
        setIsLoggedIn(true);
        setShowAuth(false);
      }
    } else {
      toast({
        title: "Account Created!",
        description: "Your account has been created successfully. You can now place orders.",
      });
      setIsLoggedIn(true);
      setShowAuth(false);
    }
  };

  const detectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // Simulate reverse geocoding
          const mockAddress = `Location: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}, Visakhapatnam, Andhra Pradesh`;
          setFormData(prev => ({ ...prev, address: mockAddress }));
          toast({
            title: "Location Detected",
            description: "Your current location has been added to the address field.",
          });
        },
        (error) => {
          toast({
            title: "Location Error",
            description: "Unable to detect location. Please enter manually.",
            variant: "destructive",
          });
        }
      );
    } else {
      toast({
        title: "Not Supported",
        description: "Geolocation is not supported by this browser.",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isLoggedIn) {
      setShowAuth(true);
      return;
    }
    
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
    { value: '0.5', label: '0.5 Liter', deliveryFee: '₹60' },
    { value: '1', label: '1 Liter', deliveryFee: '₹60' },
    { value: '2', label: '2 Liters', deliveryFee: '₹60' },
    { value: '3', label: '3 Liters', deliveryFee: '₹60' },
    { value: '4', label: '4 Liters', deliveryFee: '₹60' },
    { value: '5', label: '5 Liters', deliveryFee: '₹60' }
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

  if (showAuth) {
    return (
      <div className="min-h-screen py-20 bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md animate-scale-in">
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="h-6 w-6 text-refuel-orange mr-2" />
              {authMode === 'signin' ? 'Sign In' : 'Sign Up'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAuth} className="space-y-4">
              {authMode === 'signup' && (
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={authData.name}
                    onChange={(e) => handleAuthInputChange('name', e.target.value)}
                    required
                  />
                </div>
              )}
              
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={authData.email}
                  onChange={(e) => handleAuthInputChange('email', e.target.value)}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="password">Password *</Label>
                <Input
                  id="password"
                  type="password"
                  value={authData.password}
                  onChange={(e) => handleAuthInputChange('password', e.target.value)}
                  required
                />
              </div>
              
              {authMode === 'signup' && (
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={authData.phone}
                    onChange={(e) => handleAuthInputChange('phone', e.target.value)}
                    required
                  />
                </div>
              )}
              
              <Button type="submit" className="w-full bg-refuel-orange hover:bg-refuel-orange/90">
                {authMode === 'signin' ? 'Sign In' : 'Sign Up'}
              </Button>
              
              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setAuthMode(authMode === 'signin' ? 'signup' : 'signin')}
                  className="text-refuel-orange hover:underline"
                >
                  {authMode === 'signin' ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
                </button>
              </div>
              
              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setShowAuth(false)}
                  className="text-gray-500 hover:underline text-sm"
                >
                  Back to Order
                </button>
              </div>
              
              {authMode === 'signin' && (
                <div className="text-xs text-gray-500 text-center">
                  Admin credentials: admin@refuel.com / admin123
                </div>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Order Fuel Delivery</h1>
          <p className="text-xl text-gray-600">
            Get premium fuel delivered to your location in Visakhapatnam
          </p>
          {!isLoggedIn && (
            <div className="mt-4">
              <Button onClick={() => setShowAuth(true)} className="bg-refuel-orange hover:bg-refuel-orange/90">
                <LogIn className="h-4 w-4 mr-2" />
                Sign In to Order
              </Button>
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Order Form */}
          <div className="lg:col-span-2">
            <Card className="animate-slide-in-right">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Fuel className="h-6 w-6 text-refuel-orange mr-2" />
                  Order Details
                  {isLoggedIn && <Badge className="ml-2 bg-green-100 text-green-800">Signed In</Badge>}
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
                        <SelectValue placeholder="Select quantity (0.5L-5L available)" />
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
                    <div className="flex gap-2 mb-2">
                      <Button
                        type="button"
                        onClick={detectLocation}
                        className="bg-refuel-blue hover:bg-refuel-blue/90 text-white"
                        size="sm"
                      >
                        Detect Location
                      </Button>
                    </div>
                    <Textarea
                      id="address"
                      placeholder="Enter your complete address in Visakhapatnam with area and pincode"
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
                      placeholder="e.g., Near Beach Road, Opposite RTC Complex"
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

                  {/* Submit Button */}
                  <div className="pt-6">
                    <Button type="submit" className="w-full bg-refuel-orange hover:bg-refuel-orange/90 hover-scale transition-all duration-300">
                      {isLoggedIn ? 'Place Order' : 'Sign In to Place Order'}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 animate-scale-in">
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

                {/* Fuel Quality Assurance */}
                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-semibold mb-3">Fuel Quality Assurance:</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We partner with certified fuel providers such as Indian Oil, HP, and Bharat Petroleum to ensure premium fuel quality. Our delivery partners carry sealed containers, and each order includes a quality certificate. We also provide a real-time density meter check at your doorstep. Not satisfied? We offer a 100% replacement guarantee.
                  </p>
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
